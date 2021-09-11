// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Bfa } = initSchema(schema);

export {
  Bfa
};