// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class FromDocx extends APIResource {
  /**
   * Interprets docx file and returns a zip file with the markdown and media files.
   */
  create(body: FromDocxCreateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post(
      '/v1/file-interpreter/from-docx',
      Core.multipartFormRequestOptions({ body, ...options }),
    );
  }
}

export type FromDocxCreateResponse = unknown;

export interface FromDocxCreateParams {
  file: Core.Uploadable;
}

export declare namespace FromDocx {
  export {
    type FromDocxCreateResponse as FromDocxCreateResponse,
    type FromDocxCreateParams as FromDocxCreateParams,
  };
}
