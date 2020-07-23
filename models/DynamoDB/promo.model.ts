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
export interface PromoBody {
  id?: string;
  title: string;
  discount: number;
}
export class Promo implements PromoBody {
  public id?: string;
  public title: string;
  public discount: number;
}
export const PromoSchema = new dynamoose.Schema({
  id: {
    type: String,
    hashKey: true,
    default: uuid.v4,
  },
  title: {
    type: String,
  },
  discount: {
    type: Number,
    validate: (value: number) => value > 5 && value < 91,
  },
});
export const PromoModel = dynamoose.model('Promo', PromoSchema);
