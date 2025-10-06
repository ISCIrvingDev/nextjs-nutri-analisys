'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function PrivacyPolicy() {
  const { t } = useLanguage();

  const sections = [
    {
      title: t.privacy.section1Title,
      content: t.privacy.section1Content,
    },
    {
      title: t.privacy.section2Title,
      content: t.privacy.section2Content,
    },
    {
      title: t.privacy.section3Title,
      content: t.privacy.section3Content,
    },
    {
      title: t.privacy.section4Title,
      content: t.privacy.section4Content,
    },
    {
      title: t.privacy.section5Title,
      content: t.privacy.section5Content,
    },
    {
      title: t.privacy.section6Title,
      content: t.privacy.section6Content,
    },
    {
      title: t.privacy.section7Title,
      content: t.privacy.section7Content,
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-[20px] shadow-medium p-8 md:p-12">
          <h1 className="text-4xl font-bold text-[#1E1E1E] mb-2">
            {t.privacy.title}
          </h1>
          <p className="text-sm text-[#888888] mb-8">{t.privacy.lastUpdated}</p>

          <p className="text-[#555555] mb-8 leading-relaxed">
            {t.privacy.intro}
          </p>

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