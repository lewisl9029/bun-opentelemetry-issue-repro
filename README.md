# bun-opentelemetry-issue-repro

To repro:

1. Run `bun run test-server`
2. Run `bun run bun` in a separate terminal
3. Go to http://localhost:58050 in a browser

Expected:

- Request to /v1/traces shows up in test-server terminal

Actual:

- Nothing shows up

Also provided a node server to demonstrate expected behavior, just run `npm run node` in step 2.

If I had to guess, the fact that bun lacks support for --experimental-loader=@opentelemetry/instrumentation/hook.mjs or the --require=./app/tracing.cjs equivalent for CJS might be part of the problem?
