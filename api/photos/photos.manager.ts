import { AppError, CommonErrors } from '@helper/app-error';
import { UnsplashService } from '@services/unsplash.service';
import { GetPhotosParams, SearchPhotosParams } from './photos.interface';
import { PhotosService } from './photos.service';

export class PhotosManager {
  private readonly service: PhotosService;

  constructor() {
    this.service = new PhotosService();
  }

  async getPhotos(getPhotosParams: GetPhotosParams, unsplashService: UnsplashService) {
    if (!getPhotosParams.clientId) {
      throw new AppError(CommonErrors.BadRequest, 'The "clientId param is required."');
    }
    const response = await this.service.getPhotos(getPhotosParams, unsplashService);
    return this.service.getDesiredProps(response);
  }
  async searchPhotos(searchPhotosParams: SearchPhotosParams, unsplashService: UnsplashService) {
    if (!searchPhotosParams.query) {
      throw new AppError(CommonErrors.BadRequest, 'The "query" param is required.');
    }
    if (!searchPhotosParams.clientId) {
      throw new AppError(CommonErrors.BadRequest, 'The "clientId" param is required.');
    }
    const response = await this.service.searchPhotos(searchPhotosParams, unsplashService);
    const photosWithDesiredProps = this.service.getDesiredProps(response);
    if (searchPhotosParams.price) {
      return this.service.getFilteredByPricePhotos(photosWithDesiredProps, searchPhotosParams.price);
    } else {
      return photosWithDesiredProps;
    }
  }
}
