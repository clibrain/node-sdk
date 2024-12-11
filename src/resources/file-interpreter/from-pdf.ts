// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class FromPdf extends APIResource {
  /**
   * Transform PDF to Markdown
   */
  create(params: FromPdfCreateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    const { max_pages, ...body } = params;
    return this._client.post(
      '/v1/file-interpreter/from-pdf',
      Core.multipartFormRequestOptions({ query: { max_pages }, body, ...options }),
    );
  }
}

export type FromPdfCreateResponse = unknown;

export interface FromPdfCreateParams {
  /**
   * Body param:
   */
  file: Core.Uploadable;

  /**
   * Query param:
   */
  max_pages?: number | null;
}

export declare namespace FromPdf {
  export {
    type FromPdfCreateResponse as FromPdfCreateResponse,
    type FromPdfCreateParams as FromPdfCreateParams,
  };
}
