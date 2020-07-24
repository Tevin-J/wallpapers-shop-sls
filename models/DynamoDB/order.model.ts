import * as dynamoose from 'dynamoose';
import * as uuid from 'node-uuid';
import AWS = require('aws-sdk');
dynamoose.aws.ddb.set(
  new AWS.DynamoDB({
    endpoint: 'http://localhost:8000',
    sslEnabled: false,
    region: 'us-east-1',
    accessKeyId: 'key',
    secretAccessKey: 'secret',
  })
);
export interface ItemSchema {
  id?: string;
  photoId: string;
  url: string;
}
export interface OrderSchema {
  id?: string;
  cost: number;
  promo?: string;
  items: ItemSchema[];
  createdAt?: number;
  updatedAt?: number;
}

export const OrderSchema = new dynamoose.Schema(
  {
    id: {
      type: String,
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
              type: String,
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
