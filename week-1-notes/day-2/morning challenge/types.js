getFunction = () => {
	let func = () => {}
	return func;
}
getObject = () => {
	let obj = {};
	return obj;
}
module.exports = {
	getBoolean: () => true,
	getFunction,
	getNull: () => null,
	getNumber: () => 10,
	getObject,
	getString: () => ''
};