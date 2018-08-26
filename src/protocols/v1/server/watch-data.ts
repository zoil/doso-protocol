import * as Server from "./";
import { Message } from "../../../types/protocol";

export interface Payload {
  id: string;
  part: number;
  total: number;
  stream: string;
}

export interface Event extends Message<Server.Tokens.WatchData, Payload> {}
