import * as Server from "./";
import { Message } from "../../../types/protocol";

export type Payload = {
  session: string;
};

export interface Response
  extends Message<Server.Tokens.SessionReuse, Payload> {}
