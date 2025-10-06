'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQs() {
  const { t } = useLanguage();

  const faqs = [
    { q: t.faqs.q1, a: t.faqs.a1 },
    { q: t.faqs.q2, a: t.faqs.a2 },
    { q: t.faqs.q3, a: t.faqs.a3 },
    { q: t.faqs.q4, a: t.faqs.a4 },
    { q: t.faqs.q5, a: t.faqs.a5 },
    { q: t.faqs.q6, a: t.faqs.a6 },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1E1E1E] mb-4">
            {t.faqs.title}
          </h1>
          <p className="text-xl text-[#555555]">
            Find answers to common questions about Nutri Analysis
          </p>
        </div>

        <div className="bg-white rounded-[20px] shadow-medium p-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#F5F9F4] rounded-[12px] px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold text-[#1E1E1E] hover:text-[#2EAC3F] transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#555555] leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}