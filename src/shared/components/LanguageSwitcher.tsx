'use client';

import { useLanguage } from '@/shared/providers/LanguageContext';
import { Button } from '@/shared/components/ui/button';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
      className="flex items-center space-x-2 border-[#2EAC3F] text-[#2EAC3F] hover:bg-[#2EAC3F] hover:text-white transition-colors"
    >
      <Globe className="w-4 h-4" />
      <span className="font-semibold">{language === 'en' ? 'ES' : 'EN'}</span>
    </Button>
  );
}