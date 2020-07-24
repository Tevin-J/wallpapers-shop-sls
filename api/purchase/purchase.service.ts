export class PurchaseService {
  getPurchaseStatus() {
    const result = Math.round(Math.random());
    return { num: result };
  }
}
