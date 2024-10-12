import { Hono } from "@hono/hono";
import { serveStatic } from "@hono/hono/deno";
import Menu from "./components/menu.ts";

const app = new Hono();

app.use("/static/*", serveStatic({ root: "./" }));

app.get("/", serveStatic({ root: "./static" }));

app.get("/menu", (c) => {
  return c.html(Menu);
});

Deno.serve(app.fetch);
