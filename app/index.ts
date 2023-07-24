import "./tracing.ts";
import { type Serve } from "bun";

import opentelemetry from "@opentelemetry/api";

const tracer = opentelemetry.trace.getTracer("my-service-tracer");

export default {
  fetch(request: Request) {
    return tracer.startActiveSpan("request", (span) => {
      return new Response(`${span.spanContext().traceId}`);
    });
  },
  port: 58050,
  hostname: "::",
} satisfies Serve;
