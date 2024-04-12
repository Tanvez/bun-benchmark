import { resolve } from 'node:path';
import * as path from "https://deno.land/std@0.222.1/path/mod.ts";

import { fileURLToPath } from "https://deno.land/std@0.83.0/node/url.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = resolve(__dirname, 'resources', 'data.json');

async function denoReadAndWrite() {
    const data = await Deno.readTextFile(filePath)
    // const dataStringified = JSON.stringify(data);
    const encoder = new TextEncoder();
    await Deno.writeFile(filePath, encoder.encode(data));
}

denoReadAndWrite();
