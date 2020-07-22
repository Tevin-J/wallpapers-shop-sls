import * as dynamoose from 'dynamoose';
import * as uuid from 'node-uuid';
import { connectLocalDB } from '@services/db-local.config';
connectLocalDB(dynamoose);

export const OrderSchema = new dynamoose.Schema({
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
});

// const AdressesSchema = new dynamoose.Schema({
//   friends: {
//     type: Array,
//     schema: [
//       {
//         type: Object,
//         schema: {
//           zip: Number,
//           country: {
//             type: String,
//             required: true,
//           },
//         },
//       },
//     ],
//   },
// });
