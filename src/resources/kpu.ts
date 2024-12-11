// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Kpu extends APIResource {
  /**
   * Executes the KPU in sync, sending the response when the KPU execution is done.
   * The KPU beta is currently available for selected users. Submit your request to
   * be granted access: https://maisa.ai
   */
  run(params: KpuRunParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    const { explain_steps, retries, ...body } = params;
    return this._client.post(
      '/v1/kpu/run',
      Core.multipartFormRequestOptions({ query: { explain_steps, retries }, body, ...options }),
    );
  }
}

export type KpuRunResponse = unknown;

export interface KpuRunParams {
  /**
   * Body param: User text with the query or request to be commanded to the KPU.
   */
  query: string;

  /**
   * Query param: If true, the KPU will explain in natural language the steps of each
   * step of each intent. Enabling this feature can slow down the KPU execution, and
   * increase the usage metric.
   */
  explain_steps?: boolean;

  /**
   * Query param: Number of retries in case of failure. Retries are sequential, and
   * each failed intent yields a learning for the next intent. This feature is
   * experimental.
   */
  retries?: number;

  /**
   * Body param: Files to be used in the KPU execution. Files can be of any type.
   */
  file?: Array<Core.Uploadable>;

  /**
   * Body param:
   */
  reasoner_model?:
    | 'gpt-4-turbo'
    | 'mistral-large'
    | 'gpt-3.5-turbo'
    | 'claude-3-sonnet'
    | 'claude-3-opus'
    | 'gemini-pro'
    | 'azure/gpt-4-turbo'
    | 'openai/gpt-4-turbo'
    | null;

  /**
   * Body param:
   */
  reasoner_prompt?: string | null;
}

export declare namespace Kpu {
  export { type KpuRunResponse as KpuRunResponse, type KpuRunParams as KpuRunParams };
}
