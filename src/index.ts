// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { Kpu, KpuRunParams, KpuRunResponse } from './resources/kpu';
import {
  Capabilities,
  CapabilityCompareParams,
  CapabilityExtractParams,
  CapabilitySummarizeParams,
} from './resources/capabilities/capabilities';
import { FileInterpreter } from './resources/file-interpreter/file-interpreter';
import { Mainet } from './resources/mainet/mainet';
import { Models } from './resources/models/models';

export interface ClientOptions {
  /**
   * Defaults to process.env['MAISA_API_KEY'].
   */
  apiKey?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['MAISA_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Maisa API.
 */
export class Maisa extends Core.APIClient {
  apiKey: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Maisa API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['MAISA_API_KEY'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['MAISA_BASE_URL'] ?? https://api.maisa.ai] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('MAISA_BASE_URL'),
    apiKey = Core.readEnv('MAISA_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.MaisaError(
        "The MAISA_API_KEY environment variable is missing or empty; either provide it, or instantiate the Maisa client with an apiKey option, like new Maisa({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL: baseURL || `https://api.maisa.ai`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiKey = apiKey;
  }

  capabilities: API.Capabilities = new API.Capabilities(this);
  models: API.Models = new API.Models(this);
  kpu: API.Kpu = new API.Kpu(this);
  fileInterpreter: API.FileInterpreter = new API.FileInterpreter(this);
  mainet: API.Mainet = new API.Mainet(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { 'X-API-Key': this.apiKey };
  }

  static Maisa = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static MaisaError = Errors.MaisaError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

Maisa.Capabilities = Capabilities;
Maisa.Models = Models;
Maisa.Kpu = Kpu;
Maisa.FileInterpreter = FileInterpreter;
Maisa.Mainet = Mainet;
export declare namespace Maisa {
  export type RequestOptions = Core.RequestOptions;

  export {
    Capabilities as Capabilities,
    type CapabilityCompareParams as CapabilityCompareParams,
    type CapabilityExtractParams as CapabilityExtractParams,
    type CapabilitySummarizeParams as CapabilitySummarizeParams,
  };

  export { Models as Models };

  export { Kpu as Kpu, type KpuRunResponse as KpuRunResponse, type KpuRunParams as KpuRunParams };

  export { FileInterpreter as FileInterpreter };

  export { Mainet as Mainet };

  export type TextComparator = API.TextComparator;
  export type TextExtractor = API.TextExtractor;
  export type TextSummary = API.TextSummary;
}

export { toFile, fileFromPath } from 'maisa/uploads';
export {
  MaisaError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from 'maisa/error';

export default Maisa;
