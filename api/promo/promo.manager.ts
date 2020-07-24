import { AppError, CommonErrors } from '@helper/app-error';
import { ApplyPromoParams, CreatePromoParams } from './promo.interfase';
import { PromoService } from './promo.service';

export class PromoManager {
  private readonly service: PromoService;

  constructor() {
    this.service = new PromoService();
  }

  async createPromo(createPromoParams: CreatePromoParams) {
    if (!createPromoParams.discount || !createPromoParams.title) {
      throw new AppError(CommonErrors.BadRequest, 'Incorrect request body');
    }
    return await this.service.createPromo(createPromoParams);
  }

  async getPromos() {
    return await this.service.getPromos();
  }

  async applyPromo(applyPromoParams: ApplyPromoParams) {
    if (!applyPromoParams.title) {
      throw new AppError(CommonErrors.BadRequest, 'The "title" param is required.');
    }
    return await this.service.applyPromo(applyPromoParams);
  }
}
