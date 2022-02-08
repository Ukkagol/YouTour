$(function(){
   //2. Получить элемент, к которому необходимо добавить маску
   $("#tel").mask("+7(9?99)999-99-99");
 });



	$(function() {

		$("#from").mask("9?9.99.9999");
		$("#to").mask("9?9.99.9999");

	});
	var droplist = document.getElementById("direction");
	
	droplist.onchange = function (){
		console.log(droplist);
	// var n = droplist.options.selectedIndex;
		console.log(droplist.value);
	if (droplist.value!='empty') {
		droplist.classList.add('selected');
	} else{
		droplist.classList.remove('selected');
	}
};
 
var clearButton = document.querySelector('button[type="reset"]');
clearButton.addEventListener("click", function(){
	droplist.classList.remove('selected');
});


