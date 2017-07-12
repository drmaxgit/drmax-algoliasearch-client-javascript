/* eslint-disable no-console */
/* eslint import/namespace: [2, { allowComputed: true }] */
// @flow

import * as indexMethods from './methods/_index';
import * as clientMethods from './methods/client';
import { createRequester } from './request';

import type {
  ClientParams,
  ClientMethods,
  IndexParams,
  IndexMethods,
} from './types';

export function initClient({ appId, apiKey }: ClientParams): ClientMethods {
  if (appId === undefined) {
    throw new Error(`An appId is required. ${appId} was not valid.`);
  }
  if (apiKey === undefined) {
    throw new Error(`An apiKey is required. ${apiKey} was not valid.`);
  }

  const requester = createRequester(appId, apiKey);

  const methodNames = Object.keys(clientMethods);
  const augmentedMethods = methodNames.reduce(
    (methods, method) => ({
      ...methods,
      [method]: (...args) => clientMethods[method](requester, ...args),
    }),
    {}
  );
  return augmentedMethods;
}

export function initIndex({
  appId,
  apiKey,
  indexName,
}: IndexParams): IndexMethods {
  if (appId === undefined) {
    throw new Error(`An appId is required. ${appId} was not valid.`);
  }
  if (apiKey === undefined) {
    throw new Error(`An apiKey is required. ${apiKey} was not valid.`);
  }
  if (indexName === undefined) {
    throw new Error(`An indexName is required. ${indexName} was not valid.`);
  }

  const requester = createRequester(appId, apiKey);

  const methodNames = Object.keys(indexMethods);
  const augmentedMethods = methodNames.reduce(
    (methods, method) => ({
      ...methods,
      [method]: (...args) =>
        indexMethods[method](requester, indexName, ...args),
    }),
    {}
  );
  return augmentedMethods;
}
