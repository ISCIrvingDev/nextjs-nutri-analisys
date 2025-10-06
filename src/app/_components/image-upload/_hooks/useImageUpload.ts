/**
 * * Presentation Layer: Layout principal
 */

// * Props
// En los layout no se usan Props
// No hubo uso de Props

// * React
import { useRef, useState, useCallback, useEffect } from "react";

// * Expo
// xxx

// * Native Components
import { toast } from "sonner";

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
// import { ImageUploadProps } from "../image-upload.props";

export function useImageUpload({
  onImageSelect,
}: {
  onImageSelect: (file: File) => void;
}) {
  const { t } = useLanguage();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);

  const validateFile = (file: File): boolean => {
    const validTypes = ["image/png", "image/jpeg", "image/jpg"];
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

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);

      const file = e.dataTransfer.files[0];
      if (file && validateFile(file)) {
        onImageSelect(file);
      }
    },
    [onImageSelect]
  );

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
  }, [showCamera, stream]);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });
      setStream(mediaStream);
      setShowCamera(true);
      // if (videoRef.current) {
      //   videoRef.current.srcObject = mediaStream;
      // }
    } catch (error) {
      toast.error("Could not access camera");
      console.error("Camera error:", error);
    }
  };

  const capturePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement("canvas");
      // canvas.width = videoRef.current.videoWidth;
      canvas.width = videoRef.current.clientWidth;
      // canvas.height = videoRef.current.videoHeight;
      canvas.height = videoRef.current.clientHeight;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0);
        canvas.toBlob((blob) => {
          if (blob) {
            const file = new File([blob], "camera-capture.jpg", {
              type: "image/jpeg",
            });
            onImageSelect(file);
            stopCamera();
          }
        }, "image/jpeg");
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

  return {
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
  };
}
