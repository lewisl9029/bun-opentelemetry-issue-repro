import { type Serve } from "bun";

export default {
  fetch(request: Request) {
    console.log(request);
    return new Response("");
  },
  port: 58051,
  hostname: "::",
} satisfies Serve;
