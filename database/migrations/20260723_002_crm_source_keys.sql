BEGIN;

ALTER TABLE orangefactory_crm.contacts
  ADD COLUMN IF NOT EXISTS source_key text;

CREATE UNIQUE INDEX IF NOT EXISTS crm_contacts_source_key_idx
  ON orangefactory_crm.contacts(source_key)
  WHERE source_key IS NOT NULL;

COMMIT;
