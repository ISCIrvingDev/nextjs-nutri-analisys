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

export function usePrivacyPolicy() {
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

  return {
    t,
    sections,
  };
}
