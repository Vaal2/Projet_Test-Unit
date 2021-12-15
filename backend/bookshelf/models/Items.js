import bookshelf from '../bookshelf.js'

const Items = bookshelf.Model.extend({
    tableName: 'items'
})

export default Items;