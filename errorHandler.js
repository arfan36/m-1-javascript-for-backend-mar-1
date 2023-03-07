// console.log("module :>> ", module);

export function errorHandler(error) {
	const { name, message, stack } = error;
	console.log("name, message :>> ", name, message);

	// console.log(name, message);

	// logger.error({
	// 	name,
	// 	message,
	// 	stack,
	// });

	// console.log("Internal server error!");
}

// module.exports = errorHandler;

// const obj={};
// obj.property1="";
// obj.property2="";

function two() {
	console.log("two");
}

// module.exports.errorHandler = errorHandler;
// module.exports.two = two;

// module.exports = {
// 	errorHandler,
// 	two,
// };

// console.log("module 2nd :>> ", module);

export default two;
