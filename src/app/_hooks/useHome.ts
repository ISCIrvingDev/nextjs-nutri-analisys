/**
 * * Presentation Layer: Home
 */

// * Props
// En los layout no se usan Props
// No hubo uso de Props

// * React
import { useState } from "react";

// * Native Components
import { toast } from "sonner";

// * Icons
// xxx

// * Models
import { MealAnalysisResponse } from "@/shared/models/meal-analysis.models";

// * Services
import { analyzeMeal } from "@/shared/services/api";
import {
  checkUploadLimit,
  incrementUploadCount,
} from "@/shared/services/meal-analysis-limit.service";

// * Custom Hooks
// xxx

// * Providers
import { useLanguage } from "@/shared/providers/LanguageContext";

export function useHome() {
  const { t } = useLanguage();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<MealAnalysisResponse | null>(null);
  const [showLimitModal, setShowLimitModal] = useState(false);

  const handleImageSelect = async (file: File) => {
    const { count } = checkUploadLimit();

    // allowed - Si "allowed" tiene menos de 3, mostrar el modal del limite
    if (count >= 3) {
      setShowLimitModal(true);
      return;
    }

    setIsAnalyzing(true);
    setResults(null);

    try {
      const data = await analyzeMeal(file);
      setResults(data);
      incrementUploadCount();
      toast.success("Analysis complete!");
    } catch (error) {
      console.error("Analysis error:", error);
      toast.error(t.upload.error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleAnalyzeAnother = () => {
    setResults(null);
  };

  return {
    t,
    isAnalyzing,
    results,
    showLimitModal,
    setShowLimitModal,
    handleImageSelect,
    handleAnalyzeAnother,
  };
}
