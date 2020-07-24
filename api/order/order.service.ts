import { AppError, CommonErrors } from '@helper/app-error';
import { OrderModel } from '@models/DynamoDB/order.model';
import { CreateOrderParams } from './order.interface';

export class OrderService {
  async createOrder(params: CreateOrderParams) {
    try {
      return await OrderModel.create(params);
    } catch (e) {
      throw new AppError(CommonErrors.InternalServerError, e.message);
    }
  }

  async getOrders() {
    try {
      return await OrderModel.scan().all().exec();
    } catch (e) {
      throw new AppError(CommonErrors.InternalServerError, e.message);
    }
  }
}
