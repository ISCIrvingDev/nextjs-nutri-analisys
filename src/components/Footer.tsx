'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#1D7E2B] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Nutri Analysis</h3>
            <p className="text-sm text-white/80">
              AI-powered nutritional analysis for your meals
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <div className="space-y-2">
              <Link
                href="/privacy-policy"
                className="block text-sm text-white/80 hover:text-white transition-colors"
              >
                {t.nav.privacy}
              </Link>
              <Link
                href="/terms"
                className="block text-sm text-white/80 hover:text-white transition-colors"
              >
                {t.nav.terms}
              </Link>
              <Link
                href="/faqs"
                className="block text-sm text-white/80 hover:text-white transition-colors"
              >
                {t.nav.faqs}
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.developer}</h3>
            <a
              href="https://ivin-dev.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              ivin-dev.com
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-white/80">
          {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}