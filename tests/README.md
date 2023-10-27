To setup Jest with TS:

https://jestjs.io/docs/getting-started#using-babel

- Install: https://www.npmjs.com/package/ts-node#installation
- Install prerequisites
  from https://www.jetbrains.com/help/webstorm/running-unit-tests-on-jest.html#ws_jest_running_tests

create `jest.config.ts`

```
import type { Config } from "@jest/types";
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
export default config;
```