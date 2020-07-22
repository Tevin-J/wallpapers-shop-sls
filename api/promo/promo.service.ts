import { PromoModel } from '@models/DynamoDB/promo.model';
import { CreatePromoParams } from './promo.interfase';

export class PromoService {
  async createPromo(params: CreatePromoParams) {
    try {
      return await PromoModel.create(params);
    } catch (e) {
      console.log(e);
    }
  }
  async getPromos() {
    return PromoModel.scan();
  }
}
