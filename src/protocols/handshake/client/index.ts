import { Message } from "../../..";
import * as Connect from "./connect";

export enum Tokens {
  Connect = "connect"
}

export import ConnectRequest = Connect.Request;
export import ConnectRequestPayload = Connect.Payload;

/**
 * Return an instance of Message for `type` with `payload` prefilled.
 */
export function messageFactory(
  type: Tokens.Connect,
  payload: ConnectRequestPayload
): ConnectRequest;

export function messageFactory(type: string, payload: any) {
  const result: Message = Object.create(null);
  result.type = type;
  result.payload = payload;
  return result;
}
