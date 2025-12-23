import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

export function ServiceCard({ icon, title, description, link }: ServiceCardProps) {
  return (
    <div className="group bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="p-6 md:p-8 flex flex-col h-full">
        <div className="mb-4 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
          {title}
        </h3>
        
        <p className="text-zinc-600 dark:text-zinc-400 mb-6 flex-grow leading-relaxed">
          {description}
        </p>
        
        <div className="mt-auto">
          <Button 
            variant="ghost" 
            className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-transparent px-0 flex items-center gap-1 group-hover:gap-2 transition-all"
            asChild
          >
            <Link href={link}>
              자세히 알아보기
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
} 