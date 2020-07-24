import { AppError, CommonErrors } from '@helper/app-error';
import { CreateOrderParams } from './order.interface';
import { OrderService } from './order.service';

export class OrderManager {
  private readonly service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  async createOrder(createOrderParams: CreateOrderParams) {
    if (!createOrderParams.cost || !createOrderParams.items.length) {
      throw new AppError(CommonErrors.BadRequest, 'Incorrect request body.');
    }
    return await this.service.createOrder(createOrderParams);
  }

  async getOrders() {
    return await this.service.getOrders();
  }
}
