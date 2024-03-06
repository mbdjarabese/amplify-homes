// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Owner, Home } = initSchema(schema);

export {
  Owner,
  Home
};