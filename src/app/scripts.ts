/// <reference types="bun-types" />

import path from "path";
import index from "./index.html";
import { rmSync } from "fs";

const outdir = `./dist`;

if (!process.argv.includes(`--build`)) {
  const { url } = Bun.serve({
    routes: {
      "/": index,
      "/*": new Response(`Not found!`),
    },
    development: { hmr: true },
  });

  console.log(`> Server running at ${url}`);
} else {
  // Build

  // Cleaning prev
  rmSync(outdir, {
    recursive: true,
    force: true,
  });

  // Build project
  await Bun.build({
    entrypoints: [`./src/app/index.html`],
    outdir,
    minify: true,
    target: `browser`,
    define: {
      "process.env.NODE_ENV": `"production"`,
    },
  });

  // Minify & adjust html for each entry
  const htmlFile = Bun.file(path.join(outdir, `index.html`));
  const html = minifyHtml(await htmlFile.text());

  await htmlFile.write(html);
}

function minifyHtml(text: string) {
  return text
    .replaceAll(`\n`, ` `)
    .replaceAll(/\s{2,}/g, ` `)
    .replaceAll(/ > | >|> /g, `>`)
    .replaceAll(/ < | <|< /g, `<`)
    .replaceAll(/ ; | ;|; /g, `;`)
    .replaceAll(/ { | {|{ /g, `{`)
    .replaceAll(/ } | }|} /g, `}`)
    .replaceAll(/ " | "|" /g, `"`)
    .replaceAll(/ , | ,|, /g, `,`);
}
