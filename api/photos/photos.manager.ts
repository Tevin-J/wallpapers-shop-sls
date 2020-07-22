import { UnsplashService } from '@services/unsplash.service';
import { GetPhotosParams, SearchPhotosParams } from './photos.interface';
import { PhotosService } from './photos.service';

export class PhotosManager {
  private readonly service: PhotosService;

  constructor() {
    this.service = new PhotosService();
  }

  async getPhotos(getPhotosParams: GetPhotosParams, unsplashService: UnsplashService) {
    const response = await this.service.getPhotos(getPhotosParams, unsplashService);
    return this.service.getDesiredProps(response);
  }
  async searchPhotos(searchPhotosParams: SearchPhotosParams, unsplashService: UnsplashService) {
    const response = await this.service.searchPhotos(searchPhotosParams, unsplashService);
    const photosWithDesiredProps = this.service.getDesiredProps(response);
    if (searchPhotosParams.price) {
      return this.service.getFilteredByPricePhotos(photosWithDesiredProps, searchPhotosParams.price);
    } else {
      return photosWithDesiredProps;
    }
  }
}
