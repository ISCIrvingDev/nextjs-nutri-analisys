'use client';

// * Components
import { ImageUpload } from './_components/image-upload/ImageUpload';
import { MealResults } from './_components/MealResults';

// * Shared Components
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/shared/components/ui/alert-dialog';
import { Button } from '@/shared/components/ui/button';

// * Icons
import { Loader as Loader2, Sparkles } from 'lucide-react';

// * MVVM: Custom Hooks
import { useHome } from './_hooks/useHome';

// * Lib
// import { checkUploadLimit, incrementUploadCount } from '@/lib/usageTracking';

export default function Home() {
  const {
    t,
    isAnalyzing,
    results,
    showLimitModal,
    setShowLimitModal,
    handleImageSelect,
    handleAnalyzeAnother,
  } = useHome()

  return (
    <>
      <div className="min-h-[calc(100vh-200px)] py-12 px-4 sm:px-6 lg:px-8">
        {!results && (
          <div className="max-w-7xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#2EAC3F] to-[#1D7E2B] rounded-full mb-6">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-[#1E1E1E] mb-4">
              {t.hero.title}
            </h1>
            <p className="text-xl text-[#555555] max-w-3xl mx-auto">
              {t.hero.subtitle}
            </p>
          </div>
        )}

        {isAnalyzing && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-16 h-16 text-[#2EAC3F] animate-spin mb-4" />
            <p className="text-xl text-[#555555] font-medium">
              {t.upload.analyzing}
            </p>
          </div>
        )}

        {!isAnalyzing && !results && (
          <ImageUpload
            onImageSelect={handleImageSelect}
            isAnalyzing={isAnalyzing}
          />
        )}

        {!isAnalyzing && results && (
          <MealResults data={results} onAnalyzeAnother={handleAnalyzeAnother} />
        )}
      </div>

      <AlertDialog open={showLimitModal} onOpenChange={setShowLimitModal}>
        <AlertDialogContent className="bg-white rounded-[20px] shadow-heavy">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl font-bold text-[#1E1E1E]">
              {t.limit.title}
            </AlertDialogTitle>
            <AlertDialogDescription className="text-[#555555] text-base">
              {t.limit.message}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button
              onClick={() => setShowLimitModal(false)}
              variant="outline"
              className="border-2 border-[#888888] text-[#555555] hover:bg-[#888888] hover:text-white rounded-[50px]"
            >
              Close
            </Button>
            <Button
              onClick={() =>
                window.open('https://ivin-dev.com/#contact', '_blank')
              }
              className="bg-[#2EAC3F] hover:bg-[#1D7E2B] text-white rounded-[50px]"
            >
              {t.limit.contact}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
