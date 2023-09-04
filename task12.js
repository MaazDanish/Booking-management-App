// let button = document.querySelector('.btn');
window.addEventListener("DOMContentLoaded", async () => {
	try {
		let res = await axios.get('http://localhost:4000/add-user');
		// console.log(res.data);
		for (var i = 0; i < res.data.length; i++) {
			showToDisplay(res.data[i]);
		}
	} catch (error) {
		console.log(error);
	}
})
async function saveData(event) {
	event.preventDefault();
	const name = event.target.name.value;
	const email = event.target.email.value;
	let userData = {
		name,
		email
	};

	// if (button.id) {
	// 	axios.put('https://crudcrud.com/api/ac801d1c09bc4310afdc7cc7ec6f7520/adduser/' + button.id, userData)
	// 		.then((res) => {
	// 			userData._id = button.id;
	// 			showToDisplay(userData)
	// 		})
	// 		.catch((err) => console.log(err));
	// 	button.id = '';
	// }
	// else {
	try {
		let res = await axios.post('http://localhost:4000/add-user', userData);
		showToDisplay(res.data)

	} catch (err) {
		console.log(err);
	}
	// }
	event.target.name.value = '';
	event.target.email.value = '';
}

async function showToDisplay(userData) {
	console.log('showtodispaly working--------',userData.name);
	// let { name, email } = userData;
	// console.log(name,email);
	

	if (userData.name === '' || userData.email === '') {
		alert('Please enter all fields');
		// var msg = document.querySelector('.msg');
		// msg.classList.add('error');
		// msg.innerHTML = 'Please enter all fields';

		// Remove error after 3 seconds
		// setTimeout(() => msg.remove(), 3000);
	} else {
		const userlist = document.querySelector('#users');
		const li = document.createElement('li');
		li.textContent = userData.name - userData.email;
		userlist.appendChild(li);
	}
}



/*
const deleteButton = document.createElement('input');
		deleteButton.type = 'button';
		deleteButton.value = 'Delete';
		deleteButton.className = 'btn-danger delete';

		const updateButton = document.createElement('input');
		updateButton.type = 'button';
		updateButton.className = 'btn-update';
		updateButton.value = 'Edit';

		let id = userData._id;
		deleteButton.onclick = () => {
			axios.delete('https://crudcrud.com/api/ac801d1c09bc4310afdc7cc7ec6f7520/adduser/' + id)
				.then((res) => console.log(res))
				.catch((err) => console.log(err));
			userlist.removeChild(li);
		};

		updateButton.onclick = () => {
			button.id = id;
			userlist.removeChild(li);
			document.querySelector('#name').value = name;
			document.querySelector('#email').value = email;
		};

		// li.appendChild(deleteButton);
		// li.appendChild(updateButton);
*/
