export type ImageMetadata = {
  src: string;
  location?: string;
  releaseDate?: string;
  captureDate?: string;
  alt?: string;
  collection?: ImageCollections;
};

export const imageCollections = ['France', 'Joshua Tree', 'Winter'] as const;

export type ImageCollections = typeof imageCollections[number];