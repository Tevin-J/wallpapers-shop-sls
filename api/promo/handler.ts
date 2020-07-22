import { errorHandler } from '@helper/error-handler';
import { log } from '@helper/logger';
import { CreatePromoParams } from './promo.interfase';
import { PromoManager } from './promo.manager';

export async function createPromo(event) {
  log(event);
  try {
    const manager = new PromoManager();
    // const params: CreatePromoParams = {
    //   title: event.body.promo,
    //   discount: event.body.discount,
    // };
    const params: CreatePromoParams = {
      title: 'banana',
      discount: 50,
    };
    return await manager.createPromo(params);
  } catch (e) {
    errorHandler(e);
  }
}
