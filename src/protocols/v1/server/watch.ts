import * as Server from "./";
import { Message } from "../../../types/protocol";

export interface Payload {
  id: string;
}

export interface Response extends Message<Server.Tokens.Watch, Payload> {}
