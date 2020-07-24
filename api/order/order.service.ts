import { OrderModel } from '@models/DynamoDB/order.model';
import { CreateOrderParams } from './order.interface';

export class OrderService {
  async createOrder(params: CreateOrderParams) {
    try {
      return await OrderModel.create(params);
    } catch (e) {
      console.log(e);
    }
  }

  async getOrders() {
    try {
      return await OrderModel.scan().all().exec();
    } catch (e) {
      console.log(e);
    }
  }
}
