import { Message } from "../../../types/protocol";
import * as Error from "./error";
import * as SessionNew from "./session-new";
import * as SessionReuse from "./session-reuse";
import * as Watch from "./watch";
import * as WatchData from "./watch-data";
import * as WatchChanges from "./watch-changes";
import * as Unwatch from "./unwatch";
import * as Exec from "./exec";

export enum Tokens {
  Error = "error",
  SessionNew = "sessN",
  SessionReuse = "sessR",
  Exec = "exec",
  Watch = "watch",
  Unwatch = "unwatch",
  WatchData = "data",
  WatchChanges = "changes"
}

export import ErrorResponse = Error.Response;
export import ErrorPayload = Error.Payload;

export import SessionNewResponse = SessionNew.Response;
export import SessionNewPayload = SessionNew.Payload;

export import SessionReuseResponse = SessionReuse.Response;
export import SessionReusePayload = SessionReuse.Payload;

export import WatchResponse = Watch.Response;
export import WatchPayload = Watch.Payload;

export import WatchDataEvent = WatchData.Event;
export import WatchDataPayload = WatchData.Payload;

export import WatchChangesEvent = WatchChanges.Event;
export import WatchChangesPayload = WatchChanges.Payload;

export import UnwatchResponse = Unwatch.Response;
export import UnwatchPayload = Unwatch.Payload;

export import ExecResponse = Exec.Response;
export import ExecPayload = Exec.Payload;

export function messageFactory(
  type: Tokens.Error,
  payload: ErrorPayload,
  requestId: number
): ErrorResponse;
export function messageFactory(
  type: Tokens.SessionNew,
  payload: SessionNewPayload,
  requestId?: number
): SessionNewResponse;
export function messageFactory(
  type: Tokens.SessionReuse,
  payload: SessionReusePayload,
  requestId?: number
): SessionReuseResponse;
export function messageFactory(
  type: Tokens.Watch,
  payload: WatchPayload,
  requestId: number
): WatchResponse;
export function messageFactory(
  type: Tokens.WatchData,
  payload: WatchDataPayload,
  requestId?: number
): WatchDataEvent;
export function messageFactory(
  type: Tokens.WatchChanges,
  payload: WatchChangesPayload,
  requestId: number
): WatchChangesEvent;
export function messageFactory(
  type: Tokens.Unwatch,
  payload: UnwatchPayload,
  requestId: number
): UnwatchResponse;
export function messageFactory(
  type: Tokens.Exec,
  payload: ExecPayload,
  requestId: number
): ExecResponse;
export function messageFactory(type: string, payload: any, requestId: number) {
  const result: Message = Object.create(null);
  result.type = type;
  result.payload = payload;
  if (requestId) {
    result.requestId = requestId;
  }
  return result;
}
