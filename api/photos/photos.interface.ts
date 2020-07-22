export interface GetPhotosParams {
  page: number;
  perPage: number;
  clientId: string;
}
export interface SearchPhotosParams {
  page?: number;
  perPage?: number;
  clientId: string;
  query: string;
  color?: string;
  orientation?: string;
  price?: number;
}
export interface Photo {
  id: string;
  description?: string;
  urlSmall: string;
  urlRegular: string;
  price: number;
}
