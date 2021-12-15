import bookshelf from '../bookshelf.js'

const Todo = bookshelf.Model.extend({
    tableName: 'todolist'
})

export default Todo;