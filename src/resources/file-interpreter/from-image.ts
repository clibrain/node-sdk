// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class FromImage extends APIResource {
  /**
   * Interprets an image file and returns a description of the image.
   */
  create(body: FromImageCreateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post(
      '/v1/file-interpreter/from-image',
      Core.multipartFormRequestOptions({ body, ...options }),
    );
  }
}

export type FromImageCreateResponse = unknown;

export interface FromImageCreateParams {
  file: Core.Uploadable;
}

export declare namespace FromImage {
  export {
    type FromImageCreateResponse as FromImageCreateResponse,
    type FromImageCreateParams as FromImageCreateParams,
  };
}
