import { createIPX, createIPXMiddleware } from "ipx";
import { listen } from "listhen";
import { createApp, fromNodeMiddleware, toNodeListener } from "h3";

const ipx = createIPX({
  dir: "./public",
});
const ipxMiddleware = createIPXMiddleware(ipx);

const app = createApp().use("/", fromNodeMiddleware(ipxMiddleware));

listen(toNodeListener(app));
