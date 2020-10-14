import { useInstance } from "./useInstance";
import { InstanceResult } from "sideswipeloi";

export function useInstances<T = unknown>(instances: InstanceResult<T>[]) {
  return Object.keys(instances).reduce(
    (acc: object, key: string) => ({
      ...acc,
      [key]: useInstance(instances[key as any])
    }),
    {}
  );
}
