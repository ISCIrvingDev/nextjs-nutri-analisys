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

export function useTerms() {
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

  return {
    t,
    sections,
  };
}
