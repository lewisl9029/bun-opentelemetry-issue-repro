import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-proto";
import sdkNode from "@opentelemetry/sdk-node";
import { getNodeAutoInstrumentations } from "@opentelemetry/auto-instrumentations-node";
const { NodeSDK } = sdkNode;

const traceExporter = new OTLPTraceExporter();

const sdk = new NodeSDK({
  traceExporter,
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();
