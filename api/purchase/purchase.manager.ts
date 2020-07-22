import { PurchaseService } from './purchase.service';

export class PurchaseManager {
  private readonly service: PurchaseService;
  constructor() {
    this.service = new PurchaseService();
  }
  getPurchaseStatus(): number {
    return this.service.getPurchaseStatus();
  }
}
