BEGIN;

CREATE SCHEMA IF NOT EXISTS orangefactory_crm;
REVOKE ALL ON SCHEMA orangefactory_crm FROM PUBLIC;

CREATE TABLE IF NOT EXISTS orangefactory_crm.contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  display_name text,
  company_name text,
  country_code text,
  country_name text,
  preferred_language text,
  contact_type text NOT NULL DEFAULT 'unclear'
    CHECK (contact_type IN ('buyer','supplier','buyer_and_supplier','service_provider','irrelevant_or_spam','unclear')),
  lifecycle_stage text NOT NULL DEFAULT 'new'
    CHECK (lifecycle_stage IN ('new','qualifying','qualified','deal_ready','sourcing_review','supplier_check','quotation_review','negotiation','ordered','fulfilment','dormant','closed','blocked')),
  opportunity_score smallint NOT NULL DEFAULT 0 CHECK (opportunity_score BETWEEN 0 AND 100),
  spam_score smallint NOT NULL DEFAULT 0 CHECK (spam_score BETWEEN 0 AND 100),
  do_not_contact boolean NOT NULL DEFAULT false,
  owner_attention_required boolean NOT NULL DEFAULT false,
  owner_attention_reason text,
  first_seen_at timestamptz,
  last_seen_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS orangefactory_crm.contact_identities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  contact_id uuid NOT NULL REFERENCES orangefactory_crm.contacts(id) ON DELETE CASCADE,
  channel_type text NOT NULL CHECK (channel_type IN ('whatsapp','email','phone','kakao_channel','formspree','website')),
  address_ciphertext text NOT NULL,
  address_hash text NOT NULL,
  external_id text,
  verified boolean NOT NULL DEFAULT false,
  can_receive_messages boolean,
  is_primary boolean NOT NULL DEFAULT false,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(channel_type, address_hash)
);

CREATE TABLE IF NOT EXISTS orangefactory_crm.interactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  contact_id uuid REFERENCES orangefactory_crm.contacts(id) ON DELETE SET NULL,
  channel_type text NOT NULL,
  source_system text NOT NULL,
  external_id text NOT NULL,
  direction text NOT NULL CHECK (direction IN ('inbound','outbound','internal')),
  occurred_at timestamptz,
  subject text,
  body text,
  detected_language text,
  korean_summary text,
  intent text,
  raw_payload jsonb NOT NULL DEFAULT '{}'::jsonb,
  duplicate_of uuid REFERENCES orangefactory_crm.interactions(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(source_system, external_id)
);

CREATE TABLE IF NOT EXISTS orangefactory_crm.contact_profiles (
  contact_id uuid PRIMARY KEY REFERENCES orangefactory_crm.contacts(id) ON DELETE CASCADE,
  conversation_summary text,
  buyer_requirements jsonb NOT NULL DEFAULT '[]'::jsonb,
  supplier_offer jsonb NOT NULL DEFAULT '{}'::jsonb,
  categories jsonb NOT NULL DEFAULT '[]'::jsonb,
  brands_or_styles jsonb NOT NULL DEFAULT '[]'::jsonb,
  commercial_scale_evidence jsonb NOT NULL DEFAULT '[]'::jsonb,
  trust_evidence jsonb NOT NULL DEFAULT '[]'::jsonb,
  risk_flags jsonb NOT NULL DEFAULT '[]'::jsonb,
  missing_information jsonb NOT NULL DEFAULT '[]'::jsonb,
  opportunity_models jsonb NOT NULL DEFAULT '[]'::jsonb,
  recommended_next_action text,
  next_questions jsonb NOT NULL DEFAULT '[]'::jsonb,
  outreach_decision text CHECK (outreach_decision IN ('send','skip','human_review')),
  outreach_message text,
  scores jsonb NOT NULL DEFAULT '{}'::jsonb,
  evidence jsonb NOT NULL DEFAULT '[]'::jsonb,
  model_name text,
  prompt_version text,
  analyzed_at timestamptz,
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS orangefactory_crm.buyer_requirements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  contact_id uuid NOT NULL REFERENCES orangefactory_crm.contacts(id) ON DELETE CASCADE,
  title text NOT NULL,
  category text,
  exact_brand_required boolean,
  reference_items jsonb NOT NULL DEFAULT '[]'::jsonb,
  target_quantity text,
  target_order_value text,
  target_price_range text,
  destination_country text,
  destination_city text,
  required_delivery_date date,
  requirements jsonb NOT NULL DEFAULT '{}'::jsonb,
  status text NOT NULL DEFAULT 'draft'
    CHECK (status IN ('draft','needs_information','qualified','matching','quoted','won','lost','paused','expired')),
  expires_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS orangefactory_crm.suppliers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  contact_id uuid REFERENCES orangefactory_crm.contacts(id) ON DELETE SET NULL,
  legal_name text,
  trading_name text,
  country text,
  website text,
  factory_location text,
  verification_status text NOT NULL DEFAULT 'draft'
    CHECK (verification_status IN ('draft','needs_information','under_review','verified','rejected','suspended','expired')),
  verification_level smallint NOT NULL DEFAULT 0 CHECK (verification_level BETWEEN 0 AND 5),
  verification_evidence jsonb NOT NULL DEFAULT '[]'::jsonb,
  risk_flags jsonb NOT NULL DEFAULT '[]'::jsonb,
  consent_to_process boolean NOT NULL DEFAULT false,
  consent_to_publish boolean NOT NULL DEFAULT false,
  rights_confirmed boolean NOT NULL DEFAULT false,
  last_verified_at timestamptz,
  expires_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS orangefactory_crm.supplier_offers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  supplier_id uuid NOT NULL REFERENCES orangefactory_crm.suppliers(id) ON DELETE CASCADE,
  title text NOT NULL,
  category text NOT NULL,
  origin_country text,
  description text,
  brands jsonb NOT NULL DEFAULT '[]'::jsonb,
  product_attributes jsonb NOT NULL DEFAULT '{}'::jsonb,
  indicative_moq text,
  indicative_price text,
  incoterm_basis text,
  lead_time text,
  capacity text,
  image_assets jsonb NOT NULL DEFAULT '[]'::jsonb,
  compliance_claims jsonb NOT NULL DEFAULT '[]'::jsonb,
  status text NOT NULL DEFAULT 'draft'
    CHECK (status IN ('draft','needs_information','under_review','verified','published','paused','expired','rejected')),
  visibility text NOT NULL DEFAULT 'private'
    CHECK (visibility IN ('private','qualified_buyers','public_summary')),
  last_verified_at timestamptz,
  published_at timestamptz,
  expires_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS orangefactory_crm.matches (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  buyer_requirement_id uuid NOT NULL REFERENCES orangefactory_crm.buyer_requirements(id) ON DELETE CASCADE,
  supplier_offer_id uuid NOT NULL REFERENCES orangefactory_crm.supplier_offers(id) ON DELETE CASCADE,
  match_score smallint NOT NULL CHECK (match_score BETWEEN 0 AND 100),
  match_reasons jsonb NOT NULL DEFAULT '[]'::jsonb,
  mismatch_risks jsonb NOT NULL DEFAULT '[]'::jsonb,
  status text NOT NULL DEFAULT 'suggested'
    CHECK (status IN ('suggested','qualified','sent_to_buyer','interested','introduction_review','introduced','quoted','won','lost','rejected')),
  owner_attention_required boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(buyer_requirement_id, supplier_offer_id)
);

CREATE TABLE IF NOT EXISTS orangefactory_crm.outbound_queue (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  contact_id uuid NOT NULL REFERENCES orangefactory_crm.contacts(id) ON DELETE CASCADE,
  channel_type text NOT NULL,
  identity_id uuid REFERENCES orangefactory_crm.contact_identities(id) ON DELETE SET NULL,
  message_body text NOT NULL,
  language text,
  purpose text NOT NULL,
  status text NOT NULL DEFAULT 'draft'
    CHECK (status IN ('draft','validated','scheduled','sending','sent','failed','cancelled','blocked')),
  safety_checks jsonb NOT NULL DEFAULT '{}'::jsonb,
  idempotency_key text NOT NULL UNIQUE,
  scheduled_at timestamptz,
  sent_at timestamptz,
  attempt_count integer NOT NULL DEFAULT 0,
  last_error text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS orangefactory_crm.owner_reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  contact_id uuid REFERENCES orangefactory_crm.contacts(id) ON DELETE SET NULL,
  report_type text NOT NULL,
  priority text NOT NULL CHECK (priority IN ('low','normal','high','urgent')),
  summary text NOT NULL,
  evidence jsonb NOT NULL DEFAULT '[]'::jsonb,
  risks jsonb NOT NULL DEFAULT '[]'::jsonb,
  recommendation text,
  decision_requested text,
  status text NOT NULL DEFAULT 'open' CHECK (status IN ('open','acknowledged','decided','closed')),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS orangefactory_crm.automation_runs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  automation_name text NOT NULL,
  trigger_type text NOT NULL,
  source_event_id text,
  status text NOT NULL CHECK (status IN ('started','completed','partial','failed','blocked')),
  input_summary jsonb NOT NULL DEFAULT '{}'::jsonb,
  output_summary jsonb NOT NULL DEFAULT '{}'::jsonb,
  error text,
  started_at timestamptz NOT NULL DEFAULT now(),
  completed_at timestamptz
);

CREATE INDEX IF NOT EXISTS crm_contacts_type_score_idx ON orangefactory_crm.contacts(contact_type, opportunity_score DESC);
CREATE INDEX IF NOT EXISTS crm_contacts_attention_idx ON orangefactory_crm.contacts(owner_attention_required, opportunity_score DESC) WHERE owner_attention_required;
CREATE INDEX IF NOT EXISTS crm_identities_hash_idx ON orangefactory_crm.contact_identities(address_hash);
CREATE INDEX IF NOT EXISTS crm_interactions_contact_time_idx ON orangefactory_crm.interactions(contact_id, occurred_at DESC);
CREATE INDEX IF NOT EXISTS crm_requirements_status_idx ON orangefactory_crm.buyer_requirements(status, updated_at DESC);
CREATE INDEX IF NOT EXISTS crm_offers_status_idx ON orangefactory_crm.supplier_offers(status, updated_at DESC);
CREATE INDEX IF NOT EXISTS crm_matches_status_score_idx ON orangefactory_crm.matches(status, match_score DESC);
CREATE INDEX IF NOT EXISTS crm_queue_status_schedule_idx ON orangefactory_crm.outbound_queue(status, scheduled_at);

ALTER TABLE orangefactory_crm.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE orangefactory_crm.contact_identities ENABLE ROW LEVEL SECURITY;
ALTER TABLE orangefactory_crm.interactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE orangefactory_crm.contact_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE orangefactory_crm.buyer_requirements ENABLE ROW LEVEL SECURITY;
ALTER TABLE orangefactory_crm.suppliers ENABLE ROW LEVEL SECURITY;
ALTER TABLE orangefactory_crm.supplier_offers ENABLE ROW LEVEL SECURITY;
ALTER TABLE orangefactory_crm.matches ENABLE ROW LEVEL SECURITY;
ALTER TABLE orangefactory_crm.outbound_queue ENABLE ROW LEVEL SECURITY;
ALTER TABLE orangefactory_crm.owner_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE orangefactory_crm.automation_runs ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'anon') THEN
    REVOKE ALL ON ALL TABLES IN SCHEMA orangefactory_crm FROM anon;
    REVOKE USAGE ON SCHEMA orangefactory_crm FROM anon;
  END IF;
  IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'authenticated') THEN
    REVOKE ALL ON ALL TABLES IN SCHEMA orangefactory_crm FROM authenticated;
    REVOKE USAGE ON SCHEMA orangefactory_crm FROM authenticated;
  END IF;
END $$;

COMMIT;
