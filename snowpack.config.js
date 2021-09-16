// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
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
    "hello-world-element": "./components/hello-world-element.js",
    "helloWorldConsole": "./hello-world.js",
  },
};
