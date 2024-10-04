"use client"
import { useTranslations } from "next-intl";
import useGetInstaFeed from "@/utils/hooks/useGetInstaFeed";
import Image from "next/image";
import { Icon } from "@components/icon";
import { LargeImageSlider } from "./largeImageSlider";
import { useState } from "react";
import type { Post } from "@behold/types"

interface GallerySectionProps {
  feedURL: string;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ feedURL }) => {
  const t = useTranslations("Gallery");
  const { posts, error } = useGetInstaFeed(feedURL);
  const [sliderOpen, setSliderOpen] = useState<boolean>(false);
  const [currentPost, setCurrentPost] = useState<Post | undefined>(undefined);

  const openSlider = (id: Post["id"] ) =>
  {
    const post = posts.find((post) => post.id === id);
    setCurrentPost(post);
    setSliderOpen(true);
  }

  return (
    <section id="gallery" className="w-full max-w-3xl mt-8">
      <div className="bg-udh_yellow text-udh_dark_green p-4">
        <h2 className="font-bold pb-4">{t("title")}</h2>
        <div className="flex flex-wrap w-full justify-between">
          {posts && posts.map(post => (
            <div 
              key={post.id} 
              className="flex-shrink-0 relative md+:w-88 w-full mb-4 overflow-hidden aspect-square flex items-center justify-center border-udh_yellow hover:border-udh_dark_green hover:cursor-pointer border-4 transition-all duration-300"
              onClick={() => openSlider(post.id)}
            >
              <Image 
                alt="Instagram Image or Thumbnail" 
                src={post.sizes.medium.mediaUrl} 
                layout="responsive"
                width={340}
                height={340}
                className="object-cover"
                />
                {(post.mediaType == "CAROUSEL_ALBUM") && 
                  <Icon 
                    name={"layers-2"} 
                    color="#1c4441"
                    className="absolute top-4 right-4 r-4 bg-udh_yellow border-2 border-udh_yellow rounded" />
                }
            </div>
          ))}
          { sliderOpen &&
          <LargeImageSlider 
            closeSlider={() => setSliderOpen(false)}
            currentPost= {currentPost}
            />
          }
        </div>
      </div>
    </section>
  )
}