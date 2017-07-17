var list = document.getElementById('list');
var add = document.getElementById('addElem');
var listNumber = document.getElementsByTagName('li')
	
	console.log(list);
	console.log(listNumber.length);

add.addEventListener('click', function() {
	var element = document.createElement('li');
	element.innerHTML = 'item ' + listNumber.length;
	list.appendChild(element);

});