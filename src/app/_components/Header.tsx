'use client';

// * NextJS
import Link from 'next/link';

// * Providers
import { useLanguage } from '@/shared/providers/LanguageContext';

// * Components
import { LanguageSwitcher } from '@/shared/components/LanguageSwitcher';

// * Icons
import { Apple } from 'lucide-react';

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="bg-white shadow-light sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#2EAC3F] to-[#1D7E2B] rounded-full flex items-center justify-center">
              <Apple className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-[#1E1E1E]">Nutri Analysis</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-[#555555] hover:text-[#2EAC3F] transition-colors font-medium"
            >
              {t.nav.home}
            </Link>
            <Link
              href="/about"
              className="text-[#555555] hover:text-[#2EAC3F] transition-colors font-medium"
            >
              {t.nav.about}
            </Link>
            <Link
              href="/faqs"
              className="text-[#555555] hover:text-[#2EAC3F] transition-colors font-medium"
            >
              {t.nav.faqs}
            </Link>
          </nav>

          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}