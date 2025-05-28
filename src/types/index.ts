export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
  content: string;
}

export interface GalleryItem {
  id: string;
  serviceId: string;
  title: string;
  imageUrl: string;
}

export interface TestimonialType {
  id: string;
  name: string;
  position: string;
  content: string;
  imageUrl?: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  service: string;
  message: string;
  photos?: File[];
}