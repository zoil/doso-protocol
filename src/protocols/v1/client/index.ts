import { Message } from "../../..";
import * as SessionNew from "./session-new";
import * as SessionReuse from "./session-reuse";
import * as Watch from "./watch";
import * as Unwatch from "./unwatch";
import * as Exec from "./exec";

export enum Tokens {
  SessionNew = "sessN",
  SessionReuse = "sessR",
  Exec = "exec",
  Watch = "watch",
  Unwatch = "unwatch"
}

export import SessionNewRequest = SessionNew.Request;
export import SessionNewRequestPayload = SessionNew.RequestPayload;

export import SessionReuseRequest = SessionReuse.Request;
export import SessionReuseRequestPayload = SessionReuse.RequestPayload;

export import WatchRequest = Watch.Request;
export import WatchRequestPayload = Watch.RequestPayload;

export import UnwatchRequest = Unwatch.Request;
export import UnwatchRequestPayload = Unwatch.RequestPayload;

export import ExecRequest = Exec.Request;
export import ExecRequestPayload = Exec.RequestPayload;

/**
 * Return an instance of Message for `type` with `payload` prefilled.
 */

export function messageFactory(
  type: Tokens.SessionNew,
  payload: SessionNewRequestPayload
): SessionNewRequest;

export function messageFactory(
  type: Tokens.SessionReuse,
  payload: SessionReuseRequestPayload
): SessionReuseRequest;

export function messageFactory(
  type: Tokens.Watch,
  payload: WatchRequestPayload
): WatchRequest;

export function messageFactory(
  type: Tokens.Unwatch,
  payload: UnwatchRequestPayload
): UnwatchRequest;

export function messageFactory(
  type: Tokens.Exec,
  payload: ExecRequestPayload
): ExecRequest;

export function messageFactory(type: string, payload: any) {
  const result: Message = Object.create(null);
  result.type = type;
  result.payload = payload;
  return result;
}
