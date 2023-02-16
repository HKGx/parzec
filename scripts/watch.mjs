import { context } from "esbuild";
import serve from "@es-exec/esbuild-plugin-serve";
import BASE_CONFIG from "./base.mjs";

let ctx = await context({
  ...BASE_CONFIG,
  plugins: [
    serve({
      main: "lib/index.js",
    }),
  ],
});

await ctx.watch();
