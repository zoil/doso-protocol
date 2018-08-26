import * as Server from "./";
import { Message } from "../../../types/protocol";

// ConnectResponse
export interface Payload {
  error: number;
}

export interface Response extends Message<Server.Tokens.Error, Payload> {}
