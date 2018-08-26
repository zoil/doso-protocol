import * as Client from "./index";
import { Message } from "../../../types/protocol";

// WatchRequest
export type RequestPayload = {
  id: string;
  name: string;
  params?: any;
};

export interface Request extends Message<Client.Tokens.Watch, RequestPayload> {}
