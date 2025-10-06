/**
 * * Presentation Layer: Layout principal
 */

// * Props
// En los layout no se usan Props
// No hubo uso de Props

// * React
// xxx

// * Expo
// xxx

// * Native Components
// xxx

// * Icons
// xxx

// * Models
// xxx

// * Services
// xxx

// * Custom Hooks
// xxx

// * Providers
import { useLanguage } from "@/shared/providers/LanguageContext";

export function useFaqs() {
  const { t } = useLanguage();

  const faqs = [
    { q: t.faqs.q1, a: t.faqs.a1 },
    { q: t.faqs.q2, a: t.faqs.a2 },
    { q: t.faqs.q3, a: t.faqs.a3 },
    { q: t.faqs.q4, a: t.faqs.a4 },
    { q: t.faqs.q5, a: t.faqs.a5 },
    { q: t.faqs.q6, a: t.faqs.a6 },
  ];

  return {
    t,
    faqs,
  };
}
