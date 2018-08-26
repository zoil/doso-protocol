import * as Server from "./";
import { Message } from "../../../types/protocol";

export interface Payload {
  handle: string;
}

export interface Response extends Message<Server.Tokens.Unwatch, Payload> {}
