export interface StateProps {
  artworks: ArtworkInt[];
  artwork: ArtWorkProps | null;
  error: ErrorProps | null;
}

export interface ErrorProps {
  message: string;
  statusCode: string;
}

export interface PaginationProps {
  total: number;
  limit: number;
  offset: number;
  totalPages: number;
  currentPage: number;
  prevUrl: string;
  nextUrl: string;
}

export interface ThumbnailProps {
  height: number;
  width: number;
  alt_text: string;
  lqip: string;
}

export interface ArtworkInt {
  id: number;
  title: string;
  thumbnail: ThumbnailProps;
  artistDisplay: string;
  placeOfOrigin: string;
}

export interface ArtWorkProps extends ArtworkInt {
  dateDisplay: string;
  inscriptions: string;
  catalogueDisplay: string;
  publicationHistory: string;
  provenanceText: string;
  exhibitionHistory: string;
  hasEducationalResources: boolean;
  hasMultimediaResources: boolean;
  hasAdvancedImaging: boolean;
  isOnView: boolean;
  categoryTitles: string[];
}
