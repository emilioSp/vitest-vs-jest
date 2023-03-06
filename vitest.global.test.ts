import { readFileSync } from 'node:fs';
import { describe, test, expect } from "vitest";

describe('test vitest global', () => {
  test('t', () => {
    try {
      readFileSync('non-existing-file')
    } catch (e) {
      expect(e instanceof Error).toBeTruthy();
    }
  })
})
