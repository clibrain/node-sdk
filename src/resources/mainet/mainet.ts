// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as SearchAPI from './search';
import { Search } from './search';

export class Mainet extends APIResource {
  search: SearchAPI.Search = new SearchAPI.Search(this._client);
}

Mainet.Search = Search;

export declare namespace Mainet {
  export { Search as Search };
}
