import * as Server from "./";
import { Message } from "../../../types/protocol";

export interface Payload {
  ok: true;
  result: any;
}

export interface Response extends Message<Server.Tokens.Exec, Payload> {}
