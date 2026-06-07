# ufc-api

![CI](https://github.com/LeSingh1/ufc-api/actions/workflows/test.yml/badge.svg) ![license](https://img.shields.io/badge/license-MIT-blue.svg) ![node](https://img.shields.io/badge/node-%E2%89%A518-brightgreen.svg) ![dependencies](https://img.shields.io/badge/dependencies-0-success.svg)

Unofficial Node client for ESPN's UFC data. ESPN serves UFC under
`mma/ufc`, and this wraps those endpoints with retry/timeout
transport and parsers that return clean data.

Part of the [espn-api](https://github.com/LeSingh1/espn-api) family. The parent
is one client for every sport. This one is just UFC, in the style of
swar/nba_api.

## Run it

No dependencies. Node 18+ (built-in fetch).

```
git clone https://github.com/LeSingh1/ufc-api
cd ufc-api
node examples/scoreboard.js   # UFC events
npm test
```

## Use it

```js
import { scoreboardClean, gamelogClean } from "./src/api.js";

await scoreboardClean({ dates: "20260906" });   // tidy array of games
await gamelogClean("ATHLETE_ID");               // [{ date, opponent, atVs, stats }]
```

UFC is an individual sport, so `teams`, `roster` and `standings` mostly do not apply. Use `scoreboard`, `athlete`, `gamelog`, `splits`, `news`, `summary`, `odds`, and the parsed `scoreboardClean` / `gamelogClean`.

## Transport

12 second timeout, up to 3 retries on 429 and 5xx with backoff and Retry-After.
Real failures throw with the status and url.

## Honest notes

- Unofficial. ESPN does not document or support these endpoints, so they can
  change or break without warning. Cache responses and do not hammer it.
- Endpoint map credit: [this community gist](https://gist.github.com/nntrn/ee26cb2a0716de0947a0a4e9a157bc1c).

## License

MIT.
