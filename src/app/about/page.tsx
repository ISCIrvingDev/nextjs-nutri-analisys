'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Brain, Code, Database, Sparkles, Users } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  const skills = [
    { icon: Code, text: t.about.skillsList[0] },
    { icon: Brain, text: t.about.skillsList[1] },
    { icon: Database, text: t.about.skillsList[2] },
    { icon: Sparkles, text: t.about.skillsList[3] },
    { icon: Users, text: t.about.skillsList[4] },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1E1E1E] mb-4">
            {t.about.title}
          </h1>
        </div>

        <div className="bg-white rounded-[20px] shadow-medium p-8 md:p-12 mb-8">
          <h2 className="text-3xl font-bold text-[#2EAC3F] mb-4">
            {t.about.mission}
          </h2>
          <p className="text-[#555555] leading-relaxed text-lg mb-8">
            {t.about.missionText}
          </p>

          <div className="bg-gradient-to-br from-[#2EAC3F] to-[#1D7E2B] rounded-[20px] p-8 text-white">
            <div className="flex items-center mb-4">
              <Sparkles className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-bold">{t.about.developer}</h3>
            </div>
            <p className="leading-relaxed mb-6">{t.about.developerText}</p>

            <div className="bg-white/10 rounded-[12px] p-6">
              <h4 className="text-xl font-semibold mb-4">{t.about.skills}</h4>
              <div className="space-y-3">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div key={index} className="flex items-center">
                      <Icon className="w-5 h-5 mr-3 flex-shrink-0" />
                      <span>{skill.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F5F9F4] rounded-[20px] shadow-light p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-[#1E1E1E] mb-4">
            {t.about.contact}
          </h2>
          <p className="text-[#555555] text-lg mb-6">{t.about.contactText}</p>
          <Button
            onClick={() =>
              window.open('https://ivin-dev.com/#contact', '_blank')
            }
            className="bg-[#2EAC3F] hover:bg-[#1D7E2B] text-white rounded-[50px] px-8 py-6 text-lg shadow-medium"
          >
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  );
}