

//BUDGET Control
var budgetController = (function(){
	//some super coder
	
})();


//UI Control
var UIController = (function(){
	
	var DOMstrings = {
		type : '.add__type',
		description : '.add__description',
		value : '.add__value',
		inputBtn : '.add__btn',
	}

	return{
	    getInput : () => {
			return {
				type : document.querySelector(DOMstrings.type).value,
				description : document.querySelector(DOMstrings.description).value,
				value : document.querySelector(DOMstrings.value).value
			};
		},
		getDOMstrings : () => {return DOMstrings}
	};

})();



//GLOBal APP CONTROLLER
var controller = (function( budgetCtrl, UICtrl ){
	var DOM = UICtrl.getDOMstrings();
	var ctrlAddItem = function () {
		//1. Get the field input
		var input = UICtrl.getInput();;
		console.log(input);
		//2. Add the item to the budget controller

		//3. adding item to the UI

		//4. calculate the budget

		//5. Display the budget on the UI

	};

	document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);

	document.addEventListener('keypress', event => {

		if (event.keyCode === 13 || event.which ===13 ){

			ctrlAddItem();
		}
	});

})( budgetController, UIController );
