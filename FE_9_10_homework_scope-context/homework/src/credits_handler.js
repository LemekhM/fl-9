const card3 = userCard(); 

function userCard(index) {
	let _this = this;
	_this.key = index;
	_this.balance = 100;
	_this.transactionLimit = 100;
	_this.historyLogs = [];

	return {
		getCardOptions: function() {
			// returns an object with card info properties
			return {
				balance: _this.balance, // (default value should be 100) 
				transactionLimit: _this.transactionLimit, //(default value should be 100. It is a limit of credits you can take from this card)
				historyLogs: _this.historyLogs, //(array of objects which contains information about card`s operations and transactions)
				key: _this.key//(number in range {1; 3} depends on index you passed to userCard function. Each card should have unique key)
			}
		},
		putCredits: function(credits) {
			// This function receives amount of credits and fills up balance of card
		},
		takeCredits: function(credits) {
			// Take credits. This function receives amount of credits and reduces these credits from balance of card (opposite Put credits method):
			// You can take credits from the card if transaction limit and remaining balance are greater than credits you want to take. If not, you should log appropriate message in the console.
		},
		setTransactionLimit: function(limit) {
			// Set transaction limit. This function receives amount of credits and set them as transaction limit of your card.
		}
	}
}