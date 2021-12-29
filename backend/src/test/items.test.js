import items from './items.fixtures.js';
import { isValidItem, isUniqueName } from '../utils/checkItems.js';

import { fetchAll, create } from '../Controllers/Items.js';

create(items).then(() => {
  fetchAll().then(res => {
    const items = res;
    console.log(items);

    describe('Check item', () => {
      test('Has name', () => {
        expect(isValidItem(items[0])).toBe(true);
      });

      test('Has no name', () => {
        expect(isValidItem(items[1])).toBe(false);
      });

      test('has no content', () => {
        expect(isValidItem(items[2])).toBe(false);
      });

      test('has content with more 1000 chars', () => {
        expect(isValidItem(items[3])).toBe(false);
      });

      test('has no creation date', () => {
        expect(isValidItem(items[4])).toBe(false);
      });

      test('without unique name', () => {
        expect(isUniqueName(items[9])).toBe(false);
      });
    });
  })
})
