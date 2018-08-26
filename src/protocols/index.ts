import * as HandshakeClient from "./handshake/client";
import * as HandshakeServer from "./handshake/server";

import * as V1Client from "./v1/client";
import * as V1Server from "./v1/server";

export namespace Protocols {
  export namespace Handshake {
    export const ID = "H";

    export import Client = HandshakeClient;
    export import Server = HandshakeServer;
  }
  export namespace V1 {
    export const ID = "V1";

    export import Client = V1Client;
    export import Server = V1Server;
  }
}
