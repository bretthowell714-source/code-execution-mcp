// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Solargystix } from '../client';

export abstract class APIResource {
  protected _client: Solargystix;

  constructor(client: Solargystix) {
    this._client = client;
  }
}
