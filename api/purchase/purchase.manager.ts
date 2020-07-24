import { GetPurchaseStatusResponse } from './purchase.interfase';
import { PurchaseService } from './purchase.service';

export class PurchaseManager {
  private readonly service: PurchaseService;
  constructor() {
    this.service = new PurchaseService();
  }
  getPurchaseStatus(): GetPurchaseStatusResponse {
    return this.service.getPurchaseStatus();
  }
}
