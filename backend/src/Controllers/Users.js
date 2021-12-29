import Users from "../../bookshelf/models/Users.js";
import { Knex } from "../../bookshelf/bookshelf.js";

export const fetchAll = () => {
	return new Promise((resolve, fail) => {
		new Users().fetchAll().then(res => {
			resolve(res.toJSON())
		}).catch(err => {
			console.log('fetch all', err);
		})
	})
}

export const create = (usersArray) => {
	return new Promise((resolve, fail) => {
		usersArray.map((item) => {
			Users.forge(item).save().then(res => {
				console.log('créé');
			}).catch(err => {
				console.log(err);
			})
		})
		resolve()
	})
}

export const destroyAll = (users) => {
	Knex.raw(
		'DELETE FROM users'
	).then(res => {
		console.log('deleted');
	}).catch(err => {
		console.log(err);
	})
}