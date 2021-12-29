// import Users from '../../backend/bookshelf/models/Users.js';

import {users} from './users.fixtures.js';
import isValidUsers from './../utils/checkUser.js';
import regeneratorRuntime from 'regenerator-runtime/runtime';

import { fetchAll, create, destroyAll } from '../Controllers/Users.js';

describe('Tests Users', () => {
  let users_test;

  test('Create all users', async () => {
    const response = await create(users);

    expect(response).toBe('good')
  })

  test('Fetch all users', async () => {
    users_test = await fetchAll();

    expect(users_test.length).toBeGreaterThan(0);
  })

  test('Good user', () => {
    expect(isValidUsers(users[0])).toBeTruthy();
  });

  test('Has no firstname', () => {
    expect(isValidUsers(users[1])).toBe(false);
  });

  test('Has invalid firstname', () => {
    expect(isValidUsers(users[2])).toBe(false);
  });

  test('Has no lastname', () => {
    expect(isValidUsers(users[3])).toBe(false);
  });

  test('Has invalid lastname', () => {
    expect(isValidUsers(users[4])).toBe(false);
  });

  test('Has no mail', () => {
    expect(isValidUsers(users[5])).toBe(false);
  });
  
  test('Has no exemple in exemple@server.domain in mail', () => {
    expect(isValidUsers(users[6])).toBe(false);
  });
  
  test('Has no @ in exemple@server.domain in mail', () => {
    expect(isValidUsers(users[7])).toBe(false);
  });
  
  test('Has no server in exemple@server.domain in mail', () => {
    expect(isValidUsers(users[8])).toBe(false);
  });
  
  test('Has no . in exemple@server.domain in mail', () => {
    expect(isValidUsers(users[9])).toBe(false);
  });
  
  test('Has no domain in exemple@server.domain in mail', () => {
    expect(isValidUsers(users[10])).toBe(false);
  });

  test('Has invalid password with less than 8 chars', () => {
    expect(isValidUsers(users[11])).toBe(false);
  });

  test('Has invalid password with more than 40 chars', () => {
    expect(isValidUsers(users[12])).toBe(false);
  });

  test('Has no password', () => {
    expect(isValidUsers(users[13])).toBe(false);
  });

  test('Is too young', () => {
    expect(isValidUsers(users[14])).toBe(false);
  });

  test('Invalid birthDate', () => {
    expect(isValidUsers(users[15])).toBe(false);
  });

  test('Has only one todolist', () => {

  });

  test('Destroy all users', async () => {
    const response = await destroyAll(users);

    expect(response).toBe('good')
  })
})
