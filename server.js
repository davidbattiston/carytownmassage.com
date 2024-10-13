import { Hono } from "@hono/hono";
import { serveStatic } from "@hono/hono/deno";
import { cache } from "@hono/hono/cache";
import Menu from "./components/menu.js";

const app = new Hono();

app.use("/*", serveStatic({ root: "./static" }));
app.use("/*", serveStatic({ root: "./txt" }));

app.get(
  "/",
  serveStatic({ root: "./" }),
  cache({
    cacheControl: "max-age=31536000",
    wait: true,
  }),
);

app.get("/menu", (c) => {
  return c.html(Menu);
});

Deno.serve(app.fetch);
