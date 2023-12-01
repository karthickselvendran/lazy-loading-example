import React, { lazy, useState, useTransition } from "react";
import { wait } from "../App";

const Products = lazy(() => wait(1000).then(() => import("./products")));

const Store = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPending, startTransition] = useTransition();

  return (
    <div>
      <h1>Store</h1>
      <button
        onClick={() => {
          startTransition(() => setIsAdmin((prevStatus) => !prevStatus));
        }}
      >
        Toogle Admin
      </button>
      {isPending && <h3>Loading...</h3>}
      {isAdmin ? <Products /> : <h3>You are not Admin</h3>}
    </div>
  );
};

export default Store;
