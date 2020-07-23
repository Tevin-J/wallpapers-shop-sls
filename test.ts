import * as dynamoose from 'dynamoose';
import { PromoModel } from './models/DynamoDB';
import AWS = require('aws-sdk');

console.log('Started');

const d = new AWS.DynamoDB({
  endpoint: 'http://localhost:8000',
  sslEnabled: false,
  region: 'us-east-1',
  accessKeyId: 'key',
  secretAccessKey: 'secret',
});
const c = new AWS.DynamoDB.DocumentClient({ service: d });
c.get({ TableName: 'Promo', Key: { id: '1' } }, (e, data) => {
  console.log(e, data);
});
// PromoModel.get('1')
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => console.log(e));
