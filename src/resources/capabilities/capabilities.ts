// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as MediaAPI from './media';
import { Media, MediaCompareParams, MediaExtractParams, MediaSummarizeParams } from './media';

export class Capabilities extends APIResource {
  media: MediaAPI.Media = new MediaAPI.Media(this._client);

  /**
   * Compare extracts of text based on a specific data.
   */
  compare(
    body: CapabilityCompareParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.TextComparator> {
    return this._client.post('/v1/capabilities/compare', { body, ...options });
  }

  /**
   * Extracts structured data from text. The text is analyzed and the variables are
   * extracted.
   */
  extract(
    body: CapabilityExtractParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.TextExtractor> {
    return this._client.post('/v1/capabilities/extract', { body, ...options });
  }

  /**
   * Summarizes a text. The summary is returned in the format and length specified.
   */
  summarize(
    body: CapabilitySummarizeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.TextSummary> {
    return this._client.post('/v1/capabilities/summarize', { body, ...options });
  }
}

export interface CapabilityCompareParams {
  /**
   * The text to be compared.
   */
  text1: string;

  /**
   * The text to be compared with.
   */
  text2: string;

  /**
   * The variables to be compared.
   */
  variables: Record<string, CapabilityCompareParams.Variables>;

  /**
   * The language of the output. If not provided, the language used will be the same
   * as the language of the text provided.
   */
  lang?: 'en' | 'es' | 'pt' | 'fr' | 'de' | 'it' | 'nl' | 'sv' | 'pl' | 'ro';

  /**
   * The prompt to be used as criteria to compare the texts.
   */
  prompt?: string;
}

export namespace CapabilityCompareParams {
  /**
   * Text Extraction Request Variable.
   */
  export interface Variables {
    description: string;

    /**
     * Text Extraction Request Variable Type.
     */
    type: 'string' | 'number' | 'date' | 'boolean';
  }
}

export interface CapabilityExtractParams {
  /**
   * The text to be extracted from.
   */
  text: string;

  /**
   * The variables to be extracted from the text.
   */
  variables: Record<string, CapabilityExtractParams.Variables>;

  /**
   * The language of the output. If not provided, the language used will be the same
   * as the language of the text provided.
   */
  lang?: 'en' | 'es' | 'pt' | 'fr' | 'de' | 'it' | 'nl' | 'sv' | 'pl' | 'ro';
}

export namespace CapabilityExtractParams {
  /**
   * Text Extraction Request Variable.
   */
  export interface Variables {
    /**
     * The description of the variable.
     */
    description: string;

    /**
     * Text Extraction Request Variable Type.
     */
    type: 'string' | 'number' | 'date' | 'boolean';
  }
}

export interface CapabilitySummarizeParams {
  /**
   * The text to be summarized.
   */
  text: string;

  /**
   * Text Summary Request Format.
   */
  format?: 'paragraph' | 'bullet';

  /**
   * The language of the output. If not provided, the language used will be the same
   * as the language of the text provided.
   */
  lang?: 'en' | 'es' | 'pt' | 'fr' | 'de' | 'it' | 'nl' | 'sv' | 'pl' | 'ro';

  /**
   * Text Summary Request Length.
   */
  length?: 'short' | 'medium' | 'long';

  /**
   * A hint to the summarization. This can be used to provide a specific summary if
   * the user has a specific summary in mind.
   */
  summary_hint?: string;
}

Capabilities.Media = Media;

export declare namespace Capabilities {
  export {
    type CapabilityCompareParams as CapabilityCompareParams,
    type CapabilityExtractParams as CapabilityExtractParams,
    type CapabilitySummarizeParams as CapabilitySummarizeParams,
  };

  export {
    Media as Media,
    type MediaCompareParams as MediaCompareParams,
    type MediaExtractParams as MediaExtractParams,
    type MediaSummarizeParams as MediaSummarizeParams,
  };
}
