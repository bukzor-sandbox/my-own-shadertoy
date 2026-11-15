import { requireWebGPU } from "../../lib/device-and-adapter";
import { assert, showUncaughtErrors } from "../../lib/errors";
import { listObject } from "../../lib/html-gen";

showUncaughtErrors();

async function main(): Promise<void> {
  const gpu = requireWebGPU();
  const adapter = await gpu.requestAdapter();
  assert(adapter !== null, "failed getting adapter");

  document.body.append(
    ...listObject("adapter.info", adapter.info),
    ...listObject(
      "adapter.features",
      adapter.features,
      [...adapter.features].toSorted(),
    ),
    ...listObject("adapter.limits", adapter.limits),
  );
}

void main();
