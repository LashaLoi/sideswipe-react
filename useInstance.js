import { useState, useEffect } from "react";

export const useInstance = instance => {
  const [state, setState] = useState(instance.getState);

  useEffect(() => {
    const unsubscribe = instance.subscribe(() => setState(instance.getState));

    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);

  return state;
};
