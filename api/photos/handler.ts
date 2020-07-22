import { errorHandler } from '@helper/error-handler';
import { log } from '@helper/logger';
import { UnsplashService } from '@services/unsplash.service';
import { SearchPhotosParams } from './photos.interface';
import { PhotosManager } from './photos.manager';

export async function getPhotos(event) {
  log(event);
  const page = event.query.page ? event.query.page : 1;
  const perPage = event.query.perPage ? event.query.perPage : 30;
  const clientId = 'Z2U-DGy55aYJGgH-2m8y7mNMlwXSEXw0tWsxs4k-snM';
  try {
    const manager = new PhotosManager();
    const unsplashService = new UnsplashService();
    const params = { page, perPage, clientId };
    return await manager.getPhotos(params, unsplashService);
  } catch (e) {
    errorHandler(e);
  }
}

export async function searchPhotos(event) {
  log(event);
  const params: SearchPhotosParams = {
    query: event.query.query,
    clientId: 'Z2U-DGy55aYJGgH-2m8y7mNMlwXSEXw0tWsxs4k-snM',
  };
  if (event.query.page) {
    params.page = event.query.page;
  }
  if (event.query.perPage) {
    params.perPage = event.query.perPage;
  }
  if (event.query.color) {
    params.color = event.query.color;
  }
  if (event.query.orientation) {
    params.orientation = event.query.orientation;
  }
  if (event.query.price) {
    params.price = event.query.price;
  }
  if (!event.query.page) {
    params.page = 1;
  }
  if (!event.query.perPage) {
    params.perPage = 30;
  }
  try {
    const manager = new PhotosManager();
    const unsplashService = new UnsplashService();
    return await manager.searchPhotos(params, unsplashService);
  } catch (e) {
    errorHandler(e);
  }
}
