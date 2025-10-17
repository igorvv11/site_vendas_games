declare interface GalleryItem {
  type: "image" | "video";
  url: string;
}

declare type Game = {
  id: number;
  name: string;
  description: string;
  release_date?: string;
  prices: {
    old?: number;
    discount?: number;
    current?: number;
  };
  details: {
    category: string;
    developer: string;
    publisher: string;
    system: string;
    languages: string[];
  };
  media: {
    cover: string;
    thumbnail: string;
    gallery: GalleryItem[];
  };
};
