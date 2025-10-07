'use client';

// * Models
import { MealAnalysisResponse } from '@/shared/models/meal-analysis.models';

// * Providers
import { useLanguage } from '@/shared/providers/LanguageContext';

// * Components
import { Button } from '@/shared/components/ui/button';

// * Icons
import { Download, FileSpreadsheet, RefreshCw } from 'lucide-react';

// * Lib
import { exportToExcel, exportToPDF } from '@/shared/lib/export';

interface MealResultsProps {
  data: MealAnalysisResponse;
  onAnalyzeAnother: () => void;
}

export function MealResults({ data, onAnalyzeAnother }: MealResultsProps) {
  const { t, language } = useLanguage();
  const { output } = data;

  const handleExcelExport = () => {
    exportToExcel(data, language);
  };

  const handlePDFExport = () => {
    exportToPDF(data, language);
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      <div className="bg-white rounded-[20px] shadow-medium p-8">
        <h2 className="text-3xl font-bold text-[#1E1E1E] mb-4">
          {t.results.title}
        </h2>

        <div className="bg-[#F5F9F4] rounded-[12px] p-6 mb-6">
          <h3 className="text-xl font-semibold text-[#2EAC3F] mb-3">
            {t.results.summary}
          </h3>
          <p className="text-[#555555] leading-relaxed">{output.summary}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-[#1E1E1E] mb-4">
            {t.results.foodItems}
          </h3>
          <div className="space-y-4">
            {output.food.map((item, index) => (
              <div
                key={index}
                className="bg-[#F5F9F4] rounded-[12px] p-6 hover:shadow-light transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-semibold text-[#2EAC3F]">
                      {item.name}
                    </h4>
                    <p className="text-sm text-[#888888]">{item.quantity}</p>
                  </div>
                  <div className="bg-[#FFD43B] text-[#1E1E1E] px-4 py-1 rounded-[50px] text-sm font-semibold">
                    {item.calories}
                  </div>
                </div>
                <p className="text-[#555555] mb-4">{item.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-xs text-[#888888] uppercase">
                      {t.results.protein}
                    </p>
                    <p className="font-semibold text-[#1E1E1E]">{item.protein}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#888888] uppercase">
                      {t.results.carbs}
                    </p>
                    <p className="font-semibold text-[#1E1E1E]">{item.carbs}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#888888] uppercase">
                      {t.results.fat}
                    </p>
                    <p className="font-semibold text-[#1E1E1E]">{item.fat}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#888888] uppercase">
                      {t.results.fiber}
                    </p>
                    <p className="font-semibold text-[#1E1E1E]">{item.fiber}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-xs text-[#888888] uppercase mb-1">
                    {t.results.micronutrients}
                  </p>
                  <p className="text-sm text-[#555555]">{item.micronutrients}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#2EAC3F] to-[#1D7E2B] rounded-[20px] p-8 text-white mb-6">
          <h3 className="text-2xl font-bold mb-4">{t.results.totals}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-white/80 text-sm uppercase mb-1">
                {t.results.calories}
              </p>
              <p className="text-3xl font-bold">{output.total.calories}</p>
            </div>
            <div>
              <p className="text-white/80 text-sm uppercase mb-1">
                {t.results.protein}
              </p>
              <p className="text-3xl font-bold">{output.total.protein}</p>
            </div>
            <div>
              <p className="text-white/80 text-sm uppercase mb-1">
                {t.results.carbs}
              </p>
              <p className="text-3xl font-bold">{output.total.carbs}</p>
            </div>
            <div>
              <p className="text-white/80 text-sm uppercase mb-1">
                {t.results.fat}
              </p>
              <p className="text-3xl font-bold">{output.total.fat}</p>
            </div>
          </div>
        </div>

        {output.negligibleCalories && output.negligibleCalories.length > 0 && (
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-[#1E1E1E] mb-4">
              {t.results.negligible}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {output.negligibleCalories.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#F5F9F4] rounded-[12px] p-4"
                >
                  <h4 className="font-semibold text-[#1E1E1E] mb-2">
                    {item.name}
                  </h4>
                  <p className="text-sm text-[#555555] mb-2">
                    {item.description}
                  </p>
                  <p className="text-xs text-[#888888]">{item.micronutrients}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {output.notableMicronutrientsAndHealthConsiderations && (
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-[#1E1E1E] mb-4">
              {t.results.healthConsiderations}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#35C759]/10 rounded-[12px] p-6">
                <h4 className="font-semibold text-[#35C759] mb-3 flex items-center">
                  {t.results.strengths}
                </h4>
                <ul className="space-y-2">
                  {output.notableMicronutrientsAndHealthConsiderations.strengths.map(
                    (strength, index) => (
                      <li
                        key={index}
                        className="text-sm text-[#555555] flex items-start"
                      >
                        <span className="text-[#35C759] mr-2">✓</span>
                        {strength}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="bg-[#FFB020]/10 rounded-[12px] p-6">
                <h4 className="font-semibold text-[#FFB020] mb-3 flex items-center">
                  {t.results.considerations}
                </h4>
                <ul className="space-y-2">
                  {output.notableMicronutrientsAndHealthConsiderations.considerations.map(
                    (consideration, index) => (
                      <li
                        key={index}
                        className="text-sm text-[#555555] flex items-start"
                      >
                        <span className="text-[#FFB020] mr-2">!</span>
                        {consideration}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-[#888888]/20">
          <Button
            onClick={handleExcelExport}
            className="flex-1 bg-[#35C759] hover:bg-[#35C759]/90 text-white rounded-[50px] py-6"
          >
            <FileSpreadsheet className="w-5 h-5 mr-2" />
            {t.results.downloadExcel}
          </Button>
          <Button
            onClick={handlePDFExport}
            className="flex-1 bg-[#E63946] hover:bg-[#E63946]/90 text-white rounded-[50px] py-6"
          >
            <Download className="w-5 h-5 mr-2" />
            {t.results.downloadPDF}
          </Button>
          <Button
            onClick={onAnalyzeAnother}
            variant="outline"
            className="flex-1 border-2 border-[#2EAC3F] text-[#2EAC3F] hover:bg-[#2EAC3F] hover:text-white rounded-[50px] py-6"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            {t.results.analyzeAnother}
          </Button>
        </div>
      </div>
    </div>
  );
}