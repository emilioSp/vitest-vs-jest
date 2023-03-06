import { readFileSync } from 'node:fs';

describe('test jest global', () => {
  test('t', () => {
    try {
      readFileSync('non-existing-file')
    } catch (e) {
      expect(e instanceof Error).toBeTruthy();
    }
  })
})
