import { useState, useEffect } from "react";
import { InstanceResult } from "sideswipeloi";

export function useInstance<T = unknown>(instance: InstanceResult<T>) {
  const [state, setState] = useState<T>(instance.getState);

  useEffect(() => {
    const unsubscribe = instance.subscribe(() => setState(instance.getState));

    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);

  return state;
}
