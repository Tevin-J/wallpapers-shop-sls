import { errorHandler } from '@helper/error-handler';
import { CreateOrderParams } from './order.interface';
import { OrderManager } from './order.manager';

export async function createOrder(event) {
  try {
    const manager = new OrderManager();
    const params: CreateOrderParams = {
      cost: event.body.cost,
      promo: event.body.promo,
      items: event.body.items,
    };
    return await manager.createOrder(params);
  } catch (e) {
    errorHandler(e);
  }
}
export async function getOrders(event) {
  try {
    const manager = new OrderManager();
    return await manager.getOrders();
  } catch (e) {
    errorHandler(e);
  }
}
