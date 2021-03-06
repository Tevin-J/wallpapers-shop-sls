import { AppError, CommonErrors } from '@helper/app-error';
import { UnsplashService } from '@services/unsplash.service';
import { GetPhotosParams, Photo, SearchPhotosParams } from './photos.interface';

export class PhotosService {
  async getPhotos(params: GetPhotosParams, unsplashService: UnsplashService) {
    try {
      return await unsplashService.getPhotos(params);
    } catch (e) {
      throw new AppError(CommonErrors.InternalServerError, e.message);
    }
  }

  async searchPhotos(params: SearchPhotosParams, unsplashService: UnsplashService) {
    try {
      return await unsplashService.searchPhotos(params);
    } catch (e) {
      throw new AppError(CommonErrors.InternalServerError, e.message);
    }
  }

  getDesiredProps(photos: any): Photo[] {
    return photos.map((photo) => ({
      id: photo.id,
      description: photo.description,
      urlSmall: photo.urls.small,
      urlRegular: photo.urls.regular,
      price: photo.likes,
    }));
  }

  getFilteredByPricePhotos(photos: Photo[], priceFilter: number): Photo[] {
    return photos.filter((photo: Photo) => photo.price < priceFilter);
  }
}
