/**
 * ---
 * {
 *  "visualizers": [
 *      {
 *          "path": "./src/visualizers/run-json-tests.ts",
 *          "includeStyles": true
 *      }
 *  ]
 * }
 * ---
 *
 * # Testing JSON Parser
 *
 * To manually test the parser enter or paste some JSON to the text box below.
 * Try also add comments anywhere inside JSON.
 *
 * <<v:json-parser>>
 *
 * Manually entering test data becomes boring soon, so we'll again use
 * **fast-check** to automate test case generation. In this case we can use the
 * built-in combinator that generates arbitrary JSON data. So, our job is made
 * easy for us.
 */
import { parseJson } from "./jsonparser";
import { assert, property, json } from "fast-check";

/**
 * We should get interesting test data. You can check the test cases below.
 *
 * <<v:run-json-tests JSON tests>>
 *
 * Using `JSON.parse` as the baseline for our parser, we can check that it and
 * our parsing functions produce identical JavaScript objects. We use the
 * `deepEqual` assertion to check that.
 */

function test(name: string, fn: (t: any) => void) {
  console.log(name);
  fn({});
}

test("Test arbitrary JSON data", async (t: any) =>
  assert(
    property(json(), (str: string) => {
      let obj1 = JSON.parse(str);
      let obj2 = parseJson(str);
      t.deepEqual(
        obj2,
        obj1,
        JSON.stringify(obj2) +
          " should be deep equal to " +
          JSON.stringify(obj1)
      );
    })
  ));
