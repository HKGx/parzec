/**
 * @type {import('esbuild').BuildOptions}
 */
const BASE_CONFIG = {
  bundle: true,
  entryPoints: ["src/index.ts"],
  outdir: "lib",
  sourcemap: true,
  format: "esm",
};

export default BASE_CONFIG;
