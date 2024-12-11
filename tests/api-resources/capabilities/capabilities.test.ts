// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Maisa from 'maisa';
import { Response } from 'node-fetch';

const client = new Maisa({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource capabilities', () => {
  test('compare: only required params', async () => {
    const responsePromise = client.capabilities.compare({
      text1: 'Lorem Ipsum dolor sit amet',
      text2: 'Sed ut perspiciatis unde omnis',
      variables: { name: { description: 'The name of the person.', type: 'string' } },
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
    const response = await client.capabilities.compare({
      text1: 'Lorem Ipsum dolor sit amet',
      text2: 'Sed ut perspiciatis unde omnis',
      variables: { name: { description: 'The name of the person.', type: 'string' } },
      lang: 'en',
      prompt: 'Compare the value for end customer.',
    });
  });

  test('extract: only required params', async () => {
    const responsePromise = client.capabilities.extract({
      text: 'Example long text...',
      variables: { name: { description: 'The name of the person.', type: 'string' } },
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
    const response = await client.capabilities.extract({
      text: 'Example long text...',
      variables: { name: { description: 'The name of the person.', type: 'string' } },
      lang: 'en',
    });
  });

  test('summarize: only required params', async () => {
    const responsePromise = client.capabilities.summarize({ text: 'Example long text...' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('summarize: required and optional params', async () => {
    const response = await client.capabilities.summarize({
      text: 'Example long text...',
      format: 'paragraph',
      lang: 'en',
      length: 'short',
      summary_hint: 'Example summary of the text...',
    });
  });
});
