export type ImageMetadata = {
  src: string;
  location?: string;
  date?: Date;
  alt?: string;
  collection?: ImageCollections;
};

export const imageCollections = ['France', 'Joshua Tree', 'Winter'] as const;

export type ImageCollections = typeof imageCollections[number];