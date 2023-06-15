/**
 * Swagger PetstoreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface MApiResponse {
  code?: number;
  type?: string;
  message?: string;
}

export const mApiResponseSchema: Schema<MApiResponse> = object({
  code: ['code', optional(number())],
  type: ['type', optional(string())],
  message: ['message', optional(string())],
});
