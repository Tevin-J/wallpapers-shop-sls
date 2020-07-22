import { errorHandler } from '@helper/error-handler';
import { log } from '@helper/logger';
import { PurchaseManager } from './purchase.manager';

export async function getPurchaseStatus(event) {
  log(event);
  try {
    const manager = new PurchaseManager();
    return await manager.getPurchaseStatus();
  } catch (e) {
    errorHandler(e);
  }
}
