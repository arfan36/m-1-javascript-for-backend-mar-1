/* Creating a promise that will resolve after 1 second. */
const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("success!");
	}, 1000);
});

async function getData() {
	// const res= []
	const res = await promise;
	console.log("🚀 ~ res:", res);
}

getData();

fetch("")
	.then((res) => res.json())
	.then((data) => console.log(data))
	.catch((err) => console.log(err));

async function getUser() {
	const res = await fetch("");
	const user = await res.json();

	const res2 = await fetch(`https://www.example.com/${user.id}`);
	const products = res2.json();

	console.log(products);
}
