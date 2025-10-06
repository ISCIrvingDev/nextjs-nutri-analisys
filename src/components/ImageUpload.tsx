'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { Upload, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
  isAnalyzing: boolean;
}

export function ImageUpload({ onImageSelect, isAnalyzing }: ImageUploadProps) {
  const { t } = useLanguage();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);

  const validateFile = (file: File): boolean => {
    const validTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    if (!validTypes.includes(file.type)) {
      toast.error(t.upload.invalidFormat);
      return false;
    }
    return true;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && validateFile(file)) {
      onImageSelect(file);
    }
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && validateFile(file)) {
      onImageSelect(file);
    }
  }, [onImageSelect]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (showCamera) {
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    }
  }, [showCamera, stream])

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' },
      });
      setStream(mediaStream);
      setShowCamera(true);
      // if (videoRef.current) {
      //   videoRef.current.srcObject = mediaStream;
      // }
    } catch (error) {
      toast.error('Could not access camera');
      console.error('Camera error:', error);
    }
  };

  const capturePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      // canvas.width = videoRef.current.videoWidth;
      canvas.width = videoRef.current.clientWidth;
      // canvas.height = videoRef.current.videoHeight;
      canvas.height = videoRef.current.clientHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0);
        canvas.toBlob((blob) => {
          if (blob) {
            const file = new File([blob], 'camera-capture.jpg', {
              type: 'image/jpeg',
            });
            onImageSelect(file);
            stopCamera();
          }
        }, 'image/jpeg');
      }
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
    setShowCamera(false);
  };

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