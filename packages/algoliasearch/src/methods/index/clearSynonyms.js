// @flow

import type { IndexName } from 'algoliasearch/types';
import type { RequestMethod } from 'algoliasearch-requester';

export type Options = {| forwardToReplicas: boolean |};

export default function clearSynonyms(
  requester: RequestMethod,
  indexName: IndexName,
  opts: Options
) {
  return requester({
    method: 'GET',
    path: `/1/indexes/${indexName}/synonyms/clear`,
    qs: { opts },
    requestType: 'write',
  });
}
