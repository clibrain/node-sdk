// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as FromAudioAPI from './from-audio';
import { FromAudio, FromAudioCreateParams, FromAudioCreateResponse } from './from-audio';
import * as FromDocxAPI from './from-docx';
import { FromDocx, FromDocxCreateParams, FromDocxCreateResponse } from './from-docx';
import * as FromHTMLAPI from './from-html';
import { FromHTML, FromHTMLCreateParams, FromHTMLCreateResponse } from './from-html';
import * as FromImageAPI from './from-image';
import { FromImage, FromImageCreateParams, FromImageCreateResponse } from './from-image';
import * as FromPdfAPI from './from-pdf';
import { FromPdf, FromPdfCreateParams, FromPdfCreateResponse } from './from-pdf';
import * as FromPdfScannedAPI from './from-pdf-scanned';
import { FromPdfScanned } from './from-pdf-scanned';

export class FileInterpreter extends APIResource {
  fromPdf: FromPdfAPI.FromPdf = new FromPdfAPI.FromPdf(this._client);
  fromPdfScanned: FromPdfScannedAPI.FromPdfScanned = new FromPdfScannedAPI.FromPdfScanned(this._client);
  fromDocx: FromDocxAPI.FromDocx = new FromDocxAPI.FromDocx(this._client);
  fromHTML: FromHTMLAPI.FromHTML = new FromHTMLAPI.FromHTML(this._client);
  fromImage: FromImageAPI.FromImage = new FromImageAPI.FromImage(this._client);
  fromAudio: FromAudioAPI.FromAudio = new FromAudioAPI.FromAudio(this._client);
}

FileInterpreter.FromPdf = FromPdf;
FileInterpreter.FromPdfScanned = FromPdfScanned;
FileInterpreter.FromDocx = FromDocx;
FileInterpreter.FromHTML = FromHTML;
FileInterpreter.FromImage = FromImage;
FileInterpreter.FromAudio = FromAudio;

export declare namespace FileInterpreter {
  export {
    FromPdf as FromPdf,
    type FromPdfCreateResponse as FromPdfCreateResponse,
    type FromPdfCreateParams as FromPdfCreateParams,
  };

  export { FromPdfScanned as FromPdfScanned };

  export {
    FromDocx as FromDocx,
    type FromDocxCreateResponse as FromDocxCreateResponse,
    type FromDocxCreateParams as FromDocxCreateParams,
  };

  export {
    FromHTML as FromHTML,
    type FromHTMLCreateResponse as FromHTMLCreateResponse,
    type FromHTMLCreateParams as FromHTMLCreateParams,
  };

  export {
    FromImage as FromImage,
    type FromImageCreateResponse as FromImageCreateResponse,
    type FromImageCreateParams as FromImageCreateParams,
  };

  export {
    FromAudio as FromAudio,
    type FromAudioCreateResponse as FromAudioCreateResponse,
    type FromAudioCreateParams as FromAudioCreateParams,
  };
}
