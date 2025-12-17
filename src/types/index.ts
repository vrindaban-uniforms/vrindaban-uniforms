export interface Category {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  icon: string;
  imageCount: number;
  imageExt: string;
  featured: boolean;
}

export interface CategoryImage {
  id: number;
  src: string;
  alt: string;
}

export interface NavLink {
  name: string;
  path: string;
}
