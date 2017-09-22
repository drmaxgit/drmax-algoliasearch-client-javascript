// @flow
import type { AppId, ApiKey } from 'algoliasearch/types';
import type { Requester, RequesterOptions } from 'algoliasearch-requester';

// it will simply give back the arguments given
// this is a mocked method, not implemented yet
// later, we'll import from 'algoliasearch-requester'
//
/* eslint-disable no-unused-vars */
export const createRequester: Requester = ({
  appId,
  apiKey,
  options,
}: {
  appId: AppId,
  apiKey: ApiKey,
  options?: RequesterOptions,
}) => requestParams => new Promise(resolve => resolve(requestParams));
