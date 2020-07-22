import * as dynamoose from 'dynamoose';
import * as uuid from 'node-uuid';
// import { connectLocalDB } from '@services/db-local.config';
// connectLocalDB(dynamoose);

export interface ItemSchema {
  id: number;
  photoId: string;
  url: string;
}
export interface OrderSchema {
  id: number;
  cost: number;
  promo?: string;
  items: ItemSchema[];
  createdAt?: number;
  updatedAt?: number;
}

export const OrderSchema = new dynamoose.Schema(
  {
    id: {
      type: Number,
      hashKey: true,
      default: uuid.v4,
    },
    cost: {
      type: Number,
    },
    promo: {
      type: String,
    },
    items: {
      type: Array,
      schema: [
        {
          type: Object,
          schema: {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            id: {
              type: Number,
              default: uuid.v4,
            },
            photoId: {
              type: String,
            },
            url: {
              type: String,
            },
          },
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);
export const OrderModel = dynamoose.model('Order', OrderSchema);
