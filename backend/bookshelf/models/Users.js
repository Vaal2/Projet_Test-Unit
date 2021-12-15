import bookshelf from '../bookshelf.js'

const Users = bookshelf.Model.extend({
    tableName: 'users'
})

export default Users;