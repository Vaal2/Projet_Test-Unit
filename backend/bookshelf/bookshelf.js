import knex from 'knex'
import Bookshelf from 'bookshelf'

export const Knex = knex({
    client: 'mysql',
    connection: {
      host     : 'bdd',
      user     : 'root',
      password : 'cours',
      database : 'test_unit',
      charset  : 'utf8'
    }
  })
export default Bookshelf(Knex)