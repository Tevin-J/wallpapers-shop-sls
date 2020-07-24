export interface Item {
  id: string;
  url: string;
}
export interface CreateOrderParams {
  cost: number;
  promo: string;
  items: Item[];
}
