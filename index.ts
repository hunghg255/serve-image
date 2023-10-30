import { listen } from "listhen";
import { createApp, toNodeListener } from "h3";
import {
  createIPX,
  ipxFSStorage,
  ipxHttpStorage,
  createIPXH3Handler,
} from "ipx";

const ipx = createIPX({
  storage: ipxFSStorage({ dir: "./public" }),
  httpStorage: ipxHttpStorage({ domains: ["images.unsplash.com"] }),
});

const app = createApp().use("/", createIPXH3Handler(ipx));

listen(toNodeListener(app));
