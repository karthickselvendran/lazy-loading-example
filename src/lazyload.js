// for now not working - exclude this logic

import { lazy } from "react";

export function lazyload(path, namedExport) {
  debugger;
  return lazy(() => {
    const promise = import(path);
    if (namedExport == null) {
      return promise;
    } else {
      return promise.then((module) => ({ default: module[namedExport] }));
    }
  });
}

// example lazyload("./about", "About")
