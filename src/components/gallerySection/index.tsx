"use client"
import { useTranslations } from "next-intl";
import useGetInstaFeed from "@/utils/hooks/useGetInstaFeed";
import Image from "next/image";

interface GallerySectionProps {
  feedURL: string;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ feedURL }) => {
  const t = useTranslations("Gallery");
  const { posts, error } = useGetInstaFeed(feedURL);
  console.log("POSTS", posts);
  console.log("Coundn't fetch data:", error);

  return (
    <section id="gallery" className="w-full max-w-3xl mt-8">
      <div className="bg-udh_yellow text-udh_dark_green p-8">
        <h2 className="font-bold">{t("title")}</h2>
        <div className="flex flex-wrap w-full justify-between">
          {posts && posts.map(post => (
            <div key={post.id} className="flex-shrink-0 md+:min-w-84 min-w-full mb-8 overflow-hidden aspect-square flex items-center justify-center">
              <Image 
                alt="Tattoo" 
                src={post.sizes.medium.mediaUrl} 
                layout="responsive"
                width={340}
                height={340}
                className="object-cover rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

