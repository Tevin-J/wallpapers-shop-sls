import { connectLocalDB } from '@services/db-local.config';
import * as dynamoose from 'dynamoose';
import * as uuid from 'node-uuid';
connectLocalDB(dynamoose);

export interface PromoBody {
  id: number;
  title: string;
  discount: number;
}
export class Promo implements PromoBody {
  public id: number;
  public title: string;
  public discount: number;
}
export const PromoSchema = new dynamoose.Schema({
  id: {
    type: Number,
    hashKey: true,
    default: uuid.v4,
  },
  title: {
    type: String,
  },
  discount: {
    type: Number,
  },
});
export const PromoModel = dynamoose.model('Promo', PromoSchema);
