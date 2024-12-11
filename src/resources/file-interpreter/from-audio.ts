// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class FromAudio extends APIResource {
  /**
   * Interprets an audio file and returns a description of the audio.
   */
  create(body: FromAudioCreateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post(
      '/v1/file-interpreter/from-audio',
      Core.multipartFormRequestOptions({ body, ...options }),
    );
  }
}

export type FromAudioCreateResponse = unknown;

export interface FromAudioCreateParams {
  file: Core.Uploadable;
}

export declare namespace FromAudio {
  export {
    type FromAudioCreateResponse as FromAudioCreateResponse,
    type FromAudioCreateParams as FromAudioCreateParams,
  };
}
