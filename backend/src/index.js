import Users from './../bookshelf/models/Users.js';
import { destroyAll, fetchAll, create } from './Controllers/Users.js';
import {users} from './test/users.fixtures.js'


fetchAll()