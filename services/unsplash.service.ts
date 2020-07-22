import { GetPhotosParams, SearchPhotosParams } from '../api/photos/photos.interface';
import axios from 'axios';

export class UnsplashService {
  async getPhotos(params: GetPhotosParams) {
    const response = await axios({
      url: `https://api.unsplash.com/photos`,
      method: 'GET',
      params: {
        client_id: params.clientId,
        page: params.page,
        per_page: params.perPage,
      },
    });
    return response.data;
  }
  async searchPhotos(params: SearchPhotosParams) {
    const response = await axios({
      url: `https://api.unsplash.com/search/photos`,
      method: 'GET',
      params: {
        client_id: params.clientId,
        page: params.page,
        per_page: params.perPage,
        query: params.query,
        color: params.color,
        orientation: params.orientation,
      },
    });
    return response.data.results;
  }
}
