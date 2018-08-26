import * as Server from "./";
import { Message } from "../../../types/protocol";

// ConnectResponse
export interface Payload {
  version: string;
}

export interface Response
  extends Message<Server.Tokens.SwitchProtocol, Payload> {}
