import { Tag } from './../../src/domain/tag';

describe('Tag', () => {
  test('should create a Tag', () => {
    const tag = new Tag("XS",'Food')
    expect(tag.name).toBe('Food')
  })
})