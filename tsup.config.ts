import { defineConfig } from "tsup";

export default defineConfig(options => ({
    entry: ["./src/index.ts"],
    format: ['cjs', 'esm'],
    splitting: true,
    sourcemap: true,
    treeshake: true,
    external: ["react", "react-dom"],
    clean: true,
    minify: !options.watch,
    dts: true,
    outExtension({format}) {
        return {
            js: format === 'cjs' ? '.cjs': '.mjs',
        }
    },
}))