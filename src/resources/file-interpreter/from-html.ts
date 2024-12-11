// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class FromHTML extends APIResource {
  /**
   * Interprets html file and returns a markdown file.
   */
  create(body: FromHTMLCreateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post(
      '/v1/file-interpreter/from-html',
      Core.multipartFormRequestOptions({ body, ...options }),
    );
  }
}

export type FromHTMLCreateResponse = unknown;

export interface FromHTMLCreateParams {
  file: Core.Uploadable;
}

export declare namespace FromHTML {
  export {
    type FromHTMLCreateResponse as FromHTMLCreateResponse,
    type FromHTMLCreateParams as FromHTMLCreateParams,
  };
}
