// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as EmbeddingsAPI from './embeddings';
import { EmbeddingCreateParams, Embeddings } from './embeddings';
import * as RerankAPI from './rerank';
import { Rerank } from './rerank';

export class Models extends APIResource {
  embeddings: EmbeddingsAPI.Embeddings = new EmbeddingsAPI.Embeddings(this._client);
  rerank: RerankAPI.Rerank = new RerankAPI.Rerank(this._client);
}

Models.Rerank = Rerank;

export declare namespace Models {
  export { type Embeddings as Embeddings, type EmbeddingCreateParams as EmbeddingCreateParams };

  export { Rerank as Rerank };
}
