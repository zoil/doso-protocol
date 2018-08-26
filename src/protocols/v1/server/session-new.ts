import * as Server from "./";
import { Message } from "../../../types/protocol";

// ConnectResponse
export type Payload = {
  version: string;
  session: string;
  secret: string;
};

export interface Response extends Message<Server.Tokens.SessionNew, Payload> {}
