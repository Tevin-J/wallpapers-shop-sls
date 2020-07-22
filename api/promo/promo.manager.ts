import { CreatePromoParams } from './promo.interfase';
import { PromoService } from './promo.service';

export class PromoManager {
  private readonly service: PromoService;

  constructor() {
    this.service = new PromoService();
  }

  async createPromo(createPromoParams: CreatePromoParams) {
    return await this.service.createPromo(createPromoParams);
    //return await this.service.getPromos();
  }
}
