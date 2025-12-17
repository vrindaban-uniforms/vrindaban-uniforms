import { useEffect, useState, useRef, MouseEvent } from 'react';
import { CategoryImage } from '../types';

interface ImageModalProps {
  image: CategoryImage;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export default function ImageModal({
  image,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: ImageModalProps) {
  const [scale, setScale] = useState<number>(1);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const isZoomed = scale > 1;

  const resetZoom = (): void => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleZoomIn = (): void => {
    setScale((prev) => Math.min(prev + 0.5, 4));
  };

  const handleZoomOut = (): void => {
    setScale((prev) => {
      const newScale = Math.max(prev - 0.5, 1);
      if (newScale === 1) {
        setPosition({ x: 0, y: 0 });
      }
      return newScale;
    });
  };

  const handleImageClick = (e: MouseEvent<HTMLImageElement>): void => {
    e.stopPropagation();
    if (!isDragging) {
      if (scale < 4) {
        setScale((prev) => Math.min(prev + 1, 4));
      } else {
        resetZoom();
      }
    }
  };

  const handleMouseDown = (e: MouseEvent<HTMLImageElement>): void => {
    if (isZoomed) {
      e.preventDefault();
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>): void => {
    if (isDragging && isZoomed) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = (): void => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>): void => {
    e.preventDefault();
    if (e.deltaY < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  };

  // Reset zoom when image changes
  useEffect(() => {
    resetZoom();
  }, [image]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        if (isZoomed) {
          resetZoom();
        } else {
          onClose();
        }
      }
      if (e.key === 'ArrowLeft' && hasPrev && !isZoomed) onPrev();
      if (e.key === 'ArrowRight' && hasNext && !isZoomed) onNext();
      if (e.key === '+' || e.key === '=') handleZoomIn();
      if (e.key === '-') handleZoomOut();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onPrev, onNext, hasPrev, hasNext, isZoomed]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={isZoomed ? undefined : onClose}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onWheel={handleWheel}
    >
      {/* Top Controls */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/60 rounded-full px-4 py-2 z-20">
        <button
          className="text-white hover:text-gray-300 transition-colors p-1 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={(e) => {
            e.stopPropagation();
            handleZoomOut();
          }}
          disabled={scale <= 1}
          aria-label="Zoom out"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
          </svg>
        </button>
        <span className="text-white text-sm font-medium min-w-[60px] text-center">
          {Math.round(scale * 100)}%
        </span>
        <button
          className="text-white hover:text-gray-300 transition-colors p-1 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={(e) => {
            e.stopPropagation();
            handleZoomIn();
          }}
          disabled={scale >= 4}
          aria-label="Zoom in"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
          </svg>
        </button>
        {isZoomed && (
          <button
            className="text-white hover:text-gray-300 transition-colors p-1 ml-2 border-l border-white/30 pl-3"
            onClick={(e) => {
              e.stopPropagation();
              resetZoom();
            }}
            aria-label="Reset zoom"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        )}
      </div>

      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-20 bg-black/60 rounded-full p-2"
        onClick={onClose}
        aria-label="Close"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Previous Button */}
      {hasPrev && !isZoomed && (
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2 z-10"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous image"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Image Container */}
      <div
        className="overflow-hidden flex items-center justify-center"
        style={{
          width: '90vw',
          height: '90vh',
        }}
      >
        <img
          src={image.src}
          alt={image.alt}
          className={`max-h-[90vh] max-w-[90vw] object-contain transition-transform ${
            isZoomed ? 'cursor-grab active:cursor-grabbing' : 'cursor-zoom-in'
          } ${isDragging ? '' : 'duration-200'}`}
          style={{
            transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
          }}
          onClick={handleImageClick}
          onMouseDown={handleMouseDown}
          draggable={false}
        />
      </div>

      {/* Next Button */}
      {hasNext && !isZoomed && (
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2 z-10"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next image"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Help Text */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm bg-black/40 px-4 py-2 rounded-full">
        {isZoomed ? 'Drag to pan • Scroll or +/- to zoom • Esc to reset' : 'Click image to zoom • Scroll to zoom • Arrow keys to navigate'}
      </div>
    </div>
  );
}
