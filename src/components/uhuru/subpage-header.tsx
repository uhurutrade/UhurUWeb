import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from '../theme-toggle';
import Logo from './logo';

type SubPageHeaderProps = {
  backHref: string;
  backText: string;
};

export default function SubPageHeader({ backHref, backText }: SubPageHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-zinc-100 dark:bg-background border-border/40 dark:bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-24 max-w-7xl items-center justify-between px-4 md:px-10">
        <Link href="/" className="flex items-center" prefetch={false}>
          <Logo />
        </Link>
        <div className="flex items-center gap-4">
          <Button asChild variant="outline">
            <Link href={backHref}>
              <ChevronLeft className="mr-2 h-4 w-4" />
              {backText}
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
