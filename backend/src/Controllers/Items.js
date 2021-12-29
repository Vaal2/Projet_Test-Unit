import Items from "../../bookshelf/models/Items.js";
import { Knex } from "../../bookshelf/bookshelf.js";

export const fetchAll = () => {
	return new Promise((resolve, fail) => {
		new Items().fetchAll().then(res => {
			resolve(res.toJSON())
		}).catch(err => {
			console.log('fetch all', err);
		})
	})
}

export const create = (itemsArray) => {
	return new Promise((resolve, fail) => {
		itemsArray.map((item) => {
			Items.forge(item).save().then(res => {
				console.log('créé');
			}).catch(err => {
				console.log(err);
			})
		})
		resolve()
	})
}

export const destroyAll = (items) => {
	Knex.raw(
		'DELETE FROM items'
	).then(res => {
		console.log('deleted');
	}).catch(err => {
		console.log(err);
	})
}