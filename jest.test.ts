import * as moment from "moment";

const now = moment();

console.log(now.toISOString());

describe('test', () => {
  test('t', () => {
    expect(now).toBeDefined();
  })
})
