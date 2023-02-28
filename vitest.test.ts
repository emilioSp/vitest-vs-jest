import * as moment from "moment";
import { describe, test } from "vitest";

const now = moment();

console.log(now.toISOString());

describe('test', () => {
  test('t', () => {
    expect(now).toBeDefined();
  })
})
