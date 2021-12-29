import Todo from "../../bookshelf/models/Todo.js";
import { Knex } from "../../bookshelf/bookshelf.js";

export const fetchAll = () => {
	return new Promise((resolve, fail) => {
		new Todo().fetchAll().then(res => {
			resolve(res.toJSON())
		}).catch(err => {
			console.log('fetch all', err);
		})
	})
}

export const create = (todoArray) => {
	return new Promise((resolve, fail) => {
		todoArray.map((item) => {
			Todo.forge(item).save().then(res => {
				console.log('créé');
			}).catch(err => {
				console.log(err);
			})
		})
		resolve()
	})
}

export const destroyAll = (todo) => {
	Knex.raw(
		'DELETE FROM todo'
	).then(res => {
		console.log('deleted');
	}).catch(err => {
		console.log(err);
	})
}