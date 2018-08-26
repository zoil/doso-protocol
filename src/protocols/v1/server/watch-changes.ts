import * as Server from "./";
import { Message } from "../../../types/protocol";

export interface Payload {
  id: string;
  delta: {};
}
export interface Event extends Message<Server.Tokens.WatchChanges, Payload> {}
