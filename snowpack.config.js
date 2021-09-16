// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    app: '/',
  },
  plugins: [
    /* ... */
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  exclude: [
    '**/.idea/**',
    '**/package-lock.json',
    '**/package.json',
    '**/node_modules/**',
  ],
  alias: {
    "hello-world-element": "./app/components/hello-world-element",
    "helloWorldConsole": "./app/modules/hello-world",
    "helloFromTypescript": "./app/modules/hello-from-typescript",
  },
};
