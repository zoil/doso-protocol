import * as Client from "./index";
import { Message } from "../../../types/protocol";

export type RequestPayload = {
  id: string;
};

export interface Request
  extends Message<Client.Tokens.Unwatch, RequestPayload> {}
