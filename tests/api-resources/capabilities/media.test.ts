// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Maisa, { toFile } from 'maisa';
import { Response } from 'node-fetch';

const client = new Maisa({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource media', () => {
  test('compare: only required params', async () => {
    const responsePromise = client.capabilities.media.compare({
      file1: await toFile(Buffer.from('# my file contents'), 'README.md'),
      file2: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('compare: required and optional params', async () => {
    const response = await client.capabilities.media.compare({
      file1: await toFile(Buffer.from('# my file contents'), 'README.md'),
      file2: await toFile(Buffer.from('# my file contents'), 'README.md'),
      lang: 'en',
      prompt: 'Compare the value for end customer.',
      variable1_description: 'The name of the person.',
      variable1_name: 'Name',
      variable1_type: 'string',
      variable2_description: 'The name of the person.',
      variable2_name: 'Name',
      variable2_type: 'string',
      variable3_description: 'The name of the person.',
      variable3_name: 'Name',
      variable3_type: 'string',
      variable4_description: 'The name of the person.',
      variable4_name: 'Name',
      variable4_type: 'string',
    });
  });

  test('extract: only required params', async () => {
    const responsePromise = client.capabilities.media.extract({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('extract: required and optional params', async () => {
    const response = await client.capabilities.media.extract({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      lang: 'en',
      variable1_description: 'The name of the person.',
      variable1_name: 'Name',
      variable1_type: 'string',
      variable2_description: 'The name of the person.',
      variable2_name: 'Name',
      variable2_type: 'string',
      variable3_description: 'The name of the person.',
      variable3_name: 'Name',
      variable3_type: 'string',
      variable4_description: 'The name of the person.',
      variable4_name: 'Name',
      variable4_type: 'string',
    });
  });

  test('summarize: only required params', async () => {
    const responsePromise = client.capabilities.media.summarize({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('summarize: required and optional params', async () => {
    const response = await client.capabilities.media.summarize({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      format: 'paragraph',
      lang: 'en',
      length: 'short',
      summary_hint: 'Example summary of the text...',
    });
  });
});
