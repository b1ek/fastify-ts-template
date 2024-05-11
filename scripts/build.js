import esbuild from 'esbuild';
import fs from 'node:fs';

const entryPoints = fs
    .readdirSync('src', { recursive: true })
    .filter((x) => x.endsWith('.ts'))
    .map((x) => 'src/' + x);

if (fs.existsSync('dist')) fs.rmSync('dist', { recursive: true, force: true });

try {
    fs.mkdirSync('dist');
} catch (_) {}

await esbuild.build({
    entryPoints,
    outdir: 'dist',
});
