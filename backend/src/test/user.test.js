// import Users from '../../backend/bookshelf/models/Users.js';
import users from './users.fixtures.js';
import isValid from '../../index.js';

import { fetchAll, create } from '../Controllers/Users.js';

create(users).then(() => {
  fetchAll().then(res => {
    const users = res
    console.log(users);

    describe('Check user', () => {
      test('Good user', () => {
        expect(isValid(users[0])).toBeTruthy();
      });
    
      test('Has no firstname', () => {
        expect(isValid(users[1])).toBe(false);
      });
    
      test('Has invalid firstname', () => {
        expect(isValid(users[2])).toBe(false);
      });
    
      test('Has no lastname', () => {
        expect(isValid(users[3])).toBe(false);
      });
    
      test('Has invalid lastname', () => {
        expect(isValid(users[4])).toBe(false);
      });
    
      test('Has no mail', () => {
        expect(isValid(users[5])).toBe(false);
      });
      
      test('Has no exemple in exemple@server.domain in mail', () => {
        expect(isValid(users[6])).toBe(false);
      });
      
      test('Has no @ in exemple@server.domain in mail', () => {
        expect(isValid(users[7])).toBe(false);
      });
      
      test('Has no server in exemple@server.domain in mail', () => {
        expect(isValid(users[8])).toBe(false);
      });
      
      test('Has no . in exemple@server.domain in mail', () => {
        expect(isValid(users[9])).toBe(false);
      });
      
      test('Has no domain in exemple@server.domain in mail', () => {
        expect(isValid(users[10])).toBe(false);
      });
    
      test('Has invalid password with less than 8 chars', () => {
        expect(isValid(users[11])).toBe(false);
      });
    
      test('Has invalid password with more than 40 chars', () => {
        expect(isValid(users[12])).toBe(false);
      });
    
      test('Has no password', () => {
        expect(isValid(users[13])).toBe(false);
      });
    
      test('Is too young', () => {
        expect(isValid(users[14])).toBe(false);
      });
    
      test('Invalid birthDate', () => {
        expect(isValid(users[15])).toBe(false);
      });
    
      test('Has only one todolist', () => {
    
      });
    
    });
  })
})