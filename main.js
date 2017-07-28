var phonePrice = 900;
var accessoryPrice = 50; 
var accessoryThreshold = 1000;
const taxRate = .095;

function totalPhoneCost() {
	var cost = phonePrice * (1 + taxRate);
	return cost;
}

function totalAccCost() {
	var cost = accessoryPrice * (1 + taxRate);
	return cost;
}

function howManyPhones(bankBalance) {
	for (i = 0; bankBalance > totalPhoneCost(); i++) {
		
		if (bankBalance > accessoryThreshold) {
			var spend = totalPhoneCost() + totalAccCost()
		} else {
			var spend = totalPhoneCost()
		}
		bankBalance -= spend
	}
	return i;	
}

function userPhoneCount() {
	var inputText = "how much money you got?"
	var userBalance = prompt(inputText);

	alert("You can afford " + howManyPhones(userBalance) + " phones");

}
	
userPhoneCount();