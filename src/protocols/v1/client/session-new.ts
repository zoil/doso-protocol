import * as Client from "./index";
import { Message } from "../../../types/protocol";

export type RequestPayload = {};

export interface Request
  extends Message<Client.Tokens.SessionNew, RequestPayload> {}
