import * as Client from "./index";
import { Message } from "../../../types/protocol";

export type Payload = {
  versions: string[];
};

export interface Request extends Message<Client.Tokens.Connect, Payload> {}
