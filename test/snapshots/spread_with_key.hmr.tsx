import {
__FastRefreshRuntime as FastRefresh
} from "http://localhost:8080/bun:wrap";
import {
__HMRClient as Bun
} from "http://localhost:8080/bun:wrap";
Bun.activate(false);
import {
__require as require
} from "http://localhost:8080/bun:wrap";
import {
__FastRefreshModule as FastHMR
} from "http://localhost:8080/bun:wrap";
import * as $2f488e5b from "http://localhost:8080/node_modules/react/jsx-dev-runtime.js";
var JSX = require($2f488e5b);
import * as $bbcd215f from "http://localhost:8080/node_modules/react/index.js";
var JSXClassic = require($bbcd215f);
var jsx = require(JSX).jsxDEV, jsxEl = require(JSXClassic).createElement;
var { default: React} = require($bbcd215f);
var hmr = new FastHMR(2717584935, "spread_with_key.tsx", FastRefresh), exports = hmr.exports;
(hmr._load = function() {
  function SpreadWithTheKey({ className }) {
    const rest = {};
    return jsxEl("div", {
      className,
      ...rest,
      onClick: () => console.log("click"),
      key: "spread-with-the-key"
    }, "Rendered component containing warning");
  }
  function test() {
    console.assert(React.isValidElement(jsx(SpreadWithTheKey, {
      className: "foo"
    }, undefined, false, undefined, this)));
    return testDone(import.meta.url);
  }
  hmr.exportAll({
    SpreadWithTheKey: () => SpreadWithTheKey,
    test: () => test
  });
})();
var $$hmr_SpreadWithTheKey = hmr.exports.SpreadWithTheKey, $$hmr_test = hmr.exports.test;
hmr._update = function(exports) {
  $$hmr_SpreadWithTheKey = exports.SpreadWithTheKey;
  $$hmr_test = exports.test;
};

export {
  $$hmr_SpreadWithTheKey as SpreadWithTheKey,
  $$hmr_test as test
};

//# sourceMappingURL=http://localhost:8080/spread_with_key.tsx.map
