import * as Error from "./error";
import * as SwitchProtocol from "./switch-protocol";
import { Message } from "../../..";

export enum Tokens {
  Error = "error",
  SwitchProtocol = "switchProtocol"
}

export import ErrorResponse = Error.Response;
export import ErrorPayload = Error.Payload;

export import SwitchProtocolResponse = SwitchProtocol.Response;
export import SwitchProtocolPayload = SwitchProtocol.Payload;

/**
 * Return an instance of Message for `type` with `payload` prefilled.
 */
export function messageFactory(
  type: Tokens.Error,
  payload: ErrorPayload,
  requestId: number
): ErrorResponse;

export function messageFactory(
  type: Tokens.SwitchProtocol,
  payload: SwitchProtocolPayload
): SwitchProtocolResponse;

export function messageFactory(type: string, payload: any, requestId?: number) {
  const result: Message = Object.create(null);
  result.type = type;
  result.payload = payload;
  result.requestId = requestId ? requestId : 0;
  return result;
}
