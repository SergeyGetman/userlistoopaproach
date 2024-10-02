import User from '../users';

export async function getUsersList() {
	const response = fetch('https://jsonplaceholder.typicode.com/users');
	const data = await response.json();
	return (this.users = data.map(
		(user) =>
			new User(
				user.id,
				user.name,
				user.username,
				user.email,
				user.address,
				user.phone,
				user.website,
				user.company
			)
	));
}
