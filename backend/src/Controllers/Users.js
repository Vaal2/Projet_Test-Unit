import Users from "../../bookshelf/models/Users.js";
import { Knex } from "../../bookshelf/bookshelf.js";

export const fetchAll = () => {
	return new Promise((resolve, fail) => {
		new Users().fetchAll().then(res => {
			resolve(res.toJSON())
		}).catch(err => {
		})
	})
}

export const create = (usersArray) => {
	return new Promise((resolve, fail) => {
		let count = 0;
		usersArray.map((item) => {
			let loaded = false;

			while (!loaded) {
				Users.forge(item).save().then(res => {
					count++;
	
					if(count === usersArray.length) {
						resolve('good')
						loaded = true
					}
				})
			}
		});
	})
}

export const destroyAll = (users) => {
	return new Promise((resolve, fail) => {
		Knex.raw(
			'DELETE FROM users'
		).then(res => {
			resolve('good')
		}).catch(err => {
			fail('error')
		})
	})
}