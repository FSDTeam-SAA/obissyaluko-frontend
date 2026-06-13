"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

type TourImageGalleryProps = {
  images: string[];
  title: string;
};

export default function TourImageGallery({
  images,
  title,
}: TourImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previewOpen, setPreviewOpen] = useState(false);
  const activeImage = images[activeIndex];
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    setActiveIndex(0);
  }, [images]);

  useEffect(() => {
    if (!hasMultipleImages) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) =>
        currentIndex === images.length - 1 ? 0 : currentIndex + 1
      );
    }, 10000);

    return () => window.clearInterval(intervalId);
  }, [hasMultipleImages, images.length]);

  const showPreviousImage = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  };

  const showNextImage = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <>
      <div>
        <button
          type="button"
          onClick={() => setPreviewOpen(true)}
          className="group relative h-[220px] w-full overflow-hidden rounded-xl bg-gray-100 sm:h-[350px] lg:h-[500px]"
          aria-label={`Preview ${title} image`}
        >
          <Image
            key={activeImage}
            src={activeImage}
            alt={title}
            fill
            priority
            sizes="100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.02]"
          />

          <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/45 text-white opacity-0 transition group-hover:opacity-100">
            <Maximize2 size={20} />
          </span>
        </button>

        {hasMultipleImages ? (
          <div className="mt-3 grid grid-cols-4 gap-3 sm:grid-cols-5 lg:grid-cols-6">
            {images.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`relative aspect-[4/3] overflow-hidden rounded-lg border bg-gray-100 ${
                  activeIndex === index
                    ? "border-[#CD9B46] ring-2 ring-[#CD9B46]/35"
                    : "border-white"
                }`}
                aria-label={`Show ${title} image ${index + 1}`}
              >
                <Image
                  src={image}
                  alt={`${title} thumbnail ${index + 1}`}
                  fill
                  sizes="140px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
        <DialogContent className="max-w-[95vw] border-0 bg-[#101010] p-3 text-white shadow-2xl sm:max-w-[920px] [&>button]:z-20 [&>button]:text-white">
          <DialogTitle className="sr-only">
            {title} image preview
          </DialogTitle>

          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-black">
            <Image
              key={`${activeImage}-preview`}
              src={activeImage}
              alt={`${title} preview`}
              fill
              sizes="95vw"
              className="object-contain"
            />

            {hasMultipleImages ? (
              <>
                <button
                  type="button"
                  onClick={showPreviousImage}
                  className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={22} />
                </button>

                <button
                  type="button"
                  onClick={showNextImage}
                  className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80"
                  aria-label="Next image"
                >
                  <ChevronRight size={22} />
                </button>
              </>
            ) : null}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
