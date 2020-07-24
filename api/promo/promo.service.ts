import { AppError, CommonErrors } from '@helper/app-error';
import { PromoModel } from '@models/DynamoDB/promo.model';
import { ApplyPromoParams, CreatePromoParams } from './promo.interfase';

export class PromoService {
  async createPromo(params: CreatePromoParams) {
    try {
      return await PromoModel.create(params);
    } catch (e) {
      throw new AppError(CommonErrors.InternalServerError, e.message);
    }
  }
  async getPromos() {
    try {
      return await PromoModel.scan().all().exec();
    } catch (e) {
      throw new AppError(CommonErrors.InternalServerError, e.message);
    }
  }
  async applyPromo(params: ApplyPromoParams) {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const response: CreatePromoParams[] = await PromoModel.scan('title').eq(params.title).exec();
      if (response[0]) {
        return 1 - response[0].discount / 100;
      } else {
        return 1;
      }
    } catch (e) {
      throw new AppError(CommonErrors.InternalServerError, e.message);
    }
  }
}
