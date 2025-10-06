'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function TermsOfService() {
  const { t } = useLanguage();

  const sections = [
    {
      title: t.terms.section1Title,
      content: t.terms.section1Content,
    },
    {
      title: t.terms.section2Title,
      content: t.terms.section2Content,
    },
    {
      title: t.terms.section3Title,
      content: t.terms.section3Content,
    },
    {
      title: t.terms.section4Title,
      content: t.terms.section4Content,
    },
    {
      title: t.terms.section5Title,
      content: t.terms.section5Content,
    },
    {
      title: t.terms.section6Title,
      content: t.terms.section6Content,
    },
    {
      title: t.terms.section7Title,
      content: t.terms.section7Content,
    },
    {
      title: t.terms.section8Title,
      content: t.terms.section8Content,
    },
    {
      title: t.terms.section9Title,
      content: t.terms.section9Content,
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-[20px] shadow-medium p-8 md:p-12">
          <h1 className="text-4xl font-bold text-[#1E1E1E] mb-2">
            {t.terms.title}
          </h1>
          <p className="text-sm text-[#888888] mb-8">{t.terms.lastUpdated}</p>

          <p className="text-[#555555] mb-8 leading-relaxed">{t.terms.intro}</p>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl font-semibold text-[#2EAC3F] mb-3">
                  {section.title}
                </h2>
                <p className="text-[#555555] leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}