/**
 * * Presentation Layer: About
 */

// * Providers
import { useLanguage } from "@/shared/providers/LanguageContext";

// * Icons
import { Brain, Code, Database, Sparkles, Users } from "lucide-react";

export function useAbout() {
  const { t } = useLanguage();

  const skills = [
    { icon: Code, text: t.about.skillsList[0] },
    { icon: Brain, text: t.about.skillsList[1] },
    { icon: Database, text: t.about.skillsList[2] },
    { icon: Sparkles, text: t.about.skillsList[3] },
    { icon: Users, text: t.about.skillsList[4] },
  ];

  return {
    t,
    skills,
  };
}
