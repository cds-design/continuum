export default {
    /** Globs to analyze */
    globs: ['src/components/**/index.ts'],
    /** Globs to exclude */
    // exclude: ['src/foo.js'],
    /** Directory to output CEM to */
    outdir: 'md',
    /** Run in dev mode, provides extra logging */
    // dev: true,
    /** Run in watch mode, runs on file changes */
    // watch: true,
    /** Include third party custom elements manifests */
    dependencies: true,
    /** Output CEM path to `package.json`, defaults to true */
    // packagejson: false,
    /** Enable special handling for litelement */
    litelement: true,
}