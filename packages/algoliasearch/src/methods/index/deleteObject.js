// @flow

import type { IndexName, ObjectID } from 'algoliasearch/types';
import type { RequestMethod } from 'algoliasearch-requester';

export default function getObjects(
  requester: RequestMethod,
  indexName: IndexName,
  objectID: ObjectID
) {
  return requester({
    method: 'DELETE',
    path: `/1/indexes/${indexName}/${objectID}`,
    requestType: 'write',
  });
}
