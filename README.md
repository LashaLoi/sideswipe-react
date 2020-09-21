## React adapter for sideswipe-react state-manager

### Usage

```jsx
import React, { useEffect } from "react";

import { useInstance } from "sideswipeloi-react";

import { iloading, icount, increment, decrement, countAsync } from "./store";

const App = () => {
  const count = useInstance(icount);
  const loading = useInstance(iloading);

  useEffect(() => {
    countAsync();
  }, []);

  return (
    <>
      <button onClick={increment}>+</button>
      <p>{count}</p>
      <button onClick={decrement}>-</button>
      {loading && <div>Loading...</div>}
    </>
  );
};
```
