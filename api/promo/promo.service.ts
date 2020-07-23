import { PromoModel } from '@models/DynamoDB/promo.model';
import { ApplyPromoParams, CreatePromoParams } from './promo.interfase';

export class PromoService {
  async createPromo(params: CreatePromoParams) {
    try {
      return await PromoModel.create(params);
    } catch (e) {
      console.log(e);
    }
  }
  async getPromos() {
    try {
      return await PromoModel.scan().all().exec();
    } catch (e) {
      console.log(e);
    }
  }
  async applyPromo(params: ApplyPromoParams) {
    try {
      const response: CreatePromoParams[] = await PromoModel.query({ title: { contains: params.title } }).exec();
      return response;
      // if (response[0].discount) {
      //   return response[0].discount;
      // } else {
      //   return 1;
      // }
    } catch (e) {
      console.log(e);
    }
  }
}
