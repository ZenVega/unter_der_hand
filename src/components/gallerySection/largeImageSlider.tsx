import React from 'react'
import Image from "next/image";
import type {
  Post,
} from "@behold/types"

interface Props {
  closeSlider: () => void;
  currentPost: Post | undefined;
}
import { useState } from "react";

export const LargeImageSlider: React.FC<Props> = ({ closeSlider, currentPost }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    // @ts-ignore:
    if (currentPost && currentIndex < (currentPost.children.length - 1)) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-transparent_white p-8">
      <button 
        className="w-8 h-8 fixed top-8 right-8 bg-udh_yellow rounded z-30 hover:border-udh_dark_green" 
        onClick={closeSlider}>x</button>
        
      <div className="max-w-4xl max-h-4xl w-full h-auto aspect-square bg-udh_green rounded-md relative">
        {currentPost?.mediaType === "CAROUSEL_ALBUM" && (
          <div className="flex items-center justify-center h-full">
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-udh_yellow rounded p-2 z-20 disabled:opacity-50"
              onClick={prevImage}
              disabled={currentIndex === 0}
            >
              &lt;
            </button>
            
            <div className="overflow-hidden w-full h-full">
              <div
                className={`flex transition-transform duration-300`}
                style={{ 
                  // @ts-ignore:
                  transform: `translateX(-${currentIndex / currentPost.children.length * 100}%)`,
                  // @ts-ignore:
                  width: `${currentPost.children.length * 100}%`
                 }}
              >
                {currentPost.children?.map((child) => (
                  <div
                    key={child.id} 
                    className="w-full h-full flex items-center justify-center"
                  >
                    <Image 
                      alt={"some text"} 
                      src={child.sizes.medium.mediaUrl}
                      width={560}
                      height={560}
                      className="object-cover border-4 w-full max-w-4xl"
                    />
                  </div>
                ))}
              </div>
            </div>

            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-udh_yellow rounded p-2 z-20 disabled:opacity-50"
              onClick={nextImage}
              // @ts-ignore:
              disabled={currentIndex === currentPost.children.length - 1}
            >
              &gt;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
