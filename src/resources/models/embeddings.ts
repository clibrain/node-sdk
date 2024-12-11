// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Embeddings extends APIResource {
  /**
   * Creates embeddings from pieces of text.
   */
  create(body: EmbeddingCreateParams, options?: Core.RequestOptions): Core.APIPromise<Embeddings> {
    return this._client.post('/v1/models/embeddings', { body, ...options });
  }
}

export interface Embeddings {
  /**
   * The embeddings generated from the texts.
   */
  embeddings: Array<Array<number>>;
}

export interface EmbeddingCreateParams {
  /**
   * A list of texts from which we will generate the embeddings.
   */
  texts: Array<string>;
}

export declare namespace Embeddings {
  export { type Embeddings as Embeddings, type EmbeddingCreateParams as EmbeddingCreateParams };
}
