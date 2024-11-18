// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Maisa, { toFile } from 'maisa';
import { Response } from 'node-fetch';

const client = new Maisa({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource kpu', () => {
  test('run: only required params', async () => {
    const responsePromise = client.kpu.run({ query: 'query' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('run: required and optional params', async () => {
    const response = await client.kpu.run({
      query: 'query',
      explain_steps: true,
      retries: 1,
      file: [await toFile(Buffer.from('# my file contents'), 'README.md')],
      reasoner_model: 'gpt-4-turbo',
      reasoner_prompt: 'reasoner_prompt',
    });
  });
});
