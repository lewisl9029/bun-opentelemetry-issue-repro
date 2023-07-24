import "./tracing.mjs";
import * as http from "node:http";

import opentelemetry from "@opentelemetry/api";

const tracer = opentelemetry.trace.getTracer("my-service-tracer");

http
  .createServer((request, response) => {
    tracer.startActiveSpan("request", (span) => {
      response.statusCode = 200;
      response.end(span.spanContext().traceId);
    });
  })
  .listen(58050);
