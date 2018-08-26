import * as Client from "./index";
import { Message } from "../../../types/protocol";

export type RequestPayload = {
  session: string;
  signature: string;
  timestamp: number;
};

export interface Request
  extends Message<Client.Tokens.SessionReuse, RequestPayload> {}
