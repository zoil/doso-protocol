import * as Client from "./index";
import { Message } from "../../../types/protocol";

export type RequestPayload = {
  name: string;
  params?: any;
};

export interface Request extends Message<Client.Tokens.Exec, RequestPayload> {}
