import { useInstance } from "./useInstance";

export const useInstances = instances =>
  Object.keys(instances).reduce(
    (acc, key) => ({
      ...acc,
      [key]: useInstance(instances[key])
    }),
    {}
  );
