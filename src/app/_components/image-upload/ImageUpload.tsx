'use client';

import { Upload, Camera } from 'lucide-react';
import { Button } from '@/shared/components/ui/button';
import { useImageUpload } from './_hooks/useImageUpload';
import { ImageUploadProps } from './image-upload.props';

export function ImageUpload({ onImageSelect, isAnalyzing }: ImageUploadProps) {
  const {
    t,
    showCamera,
    videoRef,
    capturePhoto,
    stopCamera,
    fileInputRef,
    handleFileChange,
    handleDrop,
    handleDragOver,
    handleDragLeave,
    isDragging,
    startCamera,
  } = useImageUpload({ onImageSelect })


  if (showCamera) {
    return (
      <div className="w-full max-w-2xl mx-auto">
        <div className="bg-white rounded-[20px] shadow-medium p-6">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="w-full h-full rounded-[12px] mb-4 border border-[#2EAC3F]"
          />
          <div className="flex gap-4">
            <Button
              onClick={capturePhoto}
              className="flex-1 bg-[#2EAC3F] hover:bg-[#1D7E2B] text-white rounded-[50px] py-6"
            >
              <Camera className="w-5 h-5 mr-2" />
              Capture Photo
            </Button>
            <Button
              onClick={stopCamera}
              variant="outline"
              className="flex-1 border-2 border-[#2EAC3F] text-[#2EAC3F] hover:bg-[#2EAC3F] hover:text-white rounded-[50px] py-6"
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/png,image/jpeg,image/jpg"
        onChange={handleFileChange}
        className="hidden"
        disabled={isAnalyzing}
      />

      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => !isAnalyzing && fileInputRef.current?.click()}
        className={`
          bg-[#F5F9F4] rounded-[20px] shadow-light p-12 text-center cursor-pointer
          transition-all duration-300 border-2 border-dashed
          ${isDragging ? 'border-[#2EAC3F] bg-[#2EAC3F]/5' : 'border-[#888888]/30'}
          ${isAnalyzing ? 'opacity-50 cursor-not-allowed' : 'hover:border-[#2EAC3F] hover:bg-[#2EAC3F]/5'}
        `}
      >
        <Upload className="w-16 h-16 mx-auto mb-4 text-[#2EAC3F]" />
        <h3 className="text-xl font-semibold text-[#1E1E1E] mb-2">
          {t.upload.title}
        </h3>
        <p className="text-[#555555] mb-6">{t.upload.dropzone}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              fileInputRef.current?.click();
            }}
            disabled={isAnalyzing}
            className="bg-[#2EAC3F] hover:bg-[#1D7E2B] text-white rounded-[50px] px-8 py-6 shadow-medium"
          >
            <Upload className="w-5 h-5 mr-2" />
            Select Image
          </Button>

          <span className="text-[#888888]">{t.upload.or}</span>

          <Button
            onClick={(e) => {
              e.stopPropagation();
              startCamera();
            }}
            disabled={isAnalyzing}
            variant="outline"
            className="border-2 border-[#2EAC3F] text-[#2EAC3F] hover:bg-[#2EAC3F] hover:text-white rounded-[50px] px-8 py-6"
          >
            <Camera className="w-5 h-5 mr-2" />
            {t.upload.camera}
          </Button>
        </div>
      </div>
    </div>
  );
}