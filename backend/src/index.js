import Users from './../bookshelf/models/Users.js';

const fetchAll = () => {
	new Users().where({firstname: "fred"}).fetch().then(res => {
		console.log(res.get('firstname'));
	}).catch(err => {
		console.log('fetch all', err);
	})
}

const create = () => {
	const user = {
		firstname: "fred",
		lastname: "jhgcuey",
		mail: "gcye@herg.ieurh",
		password: "ejhrg"
	}

	Users.forge(user).save().then(res => {
		console.log('créé');
		fetchAll()
	}).catch(err => {
		console.log(err);
	})
}

fetchAll()