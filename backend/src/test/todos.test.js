import todos from './todos.fixtures.js';
import { isValidTodo, isUniqueUser } from '../utils/checkToDo';

import { fetchAll, create } from '../Controllers/Todo.js';

create(todos).then(() => {
  fetchAll().then(res => {
    const todos = res;
    console.log(todos);
    describe('Check todo', () => {
      test('is valid', () => {
        expect(isValidTodo(todos[0])).toBe(true);
      });

      test('no name', () => {
        expect(isValidTodo(todos[1])).toBe(false);
      });

      test('name too long', () => {
        expect(isValidTodo(todos[2])).toBe(false);
      });

      test('cannot have more than 10 items', () => {
        expect(isValidTodo(todos[3])).toBe(false);
      });

      
      test('an user cannot create more than one todo list', () => {
        expect(isUniqueUser(todos,todos[4])).toBe(false);
      });

      test('adding item within 30 mins is not possible', () => {
        
      });
    });
  })
})