This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

You will note that package.json lists…

- use-animation-frame": "0.1.0"
- use-animation-frame-pr": "https://github.com/EricWVGG/use-animation-frame"

To test…

- run `yarn` to install dependencies.
- run `yarn dev`. This will spawn a local dev webserver.
- on `localhost:3000`, you will see that the SSR build has failed because node has no notion of "window" or the "performance" API
- halt the dev webserver.
- edit `/pages/index.js`. comment line 3, and uncomment line 4.
- run `yarn dev`
- everything should work fine.