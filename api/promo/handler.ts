import { log } from '@helper/logger';
import { ApplyPromoParams, CreatePromoParams } from './promo.interfase';
import { PromoManager } from './promo.manager';
import { errorHandler } from '@helper/error-handler';

export async function createPromo(event) {
  log(event);
  try {
    const manager = new PromoManager();
    const params: CreatePromoParams = {
      title: event.body.promo,
      discount: event.body.discount,
    };
    return await manager.createPromo(params);
  } catch (e) {
    errorHandler(e);
  }
}

export async function getPromos(event) {
  log(event);
  try {
    const manager = new PromoManager();
    return await manager.getPromos();
  } catch (e) {
    errorHandler(e);
  }
}

export async function applyPromo(event) {
  log(event);
  try {
    const manager = new PromoManager();
    const params: ApplyPromoParams = {
      title: event.body.promo,
    };
    return await manager.applyPromo(params);
  } catch (e) {
    errorHandler(e);
  }
}
