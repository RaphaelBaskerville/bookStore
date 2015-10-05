//////////////////////////helper funcctions
//takes in a string, a list and a searchtype, goes through the list, 
//checks the string against the book by searchtype, returns first book obj to match.
var checkTitle = function(string, list, searchType) {
	// console.dir('searching ' + list + 'for ' + string + ' by ' + searchType)
	 var book = list.find(function(book){
		return book[searchType] === string;
	}); 
	return book
};
// takes in a book object, if user wants to add it, add it, else alert that no book has been added.
var confirmAddToCart = function (book, user) {
	if (confirm("We found your book " + book.title + " by " + book.author + ", it costs $" + book.price.toFixed(2) + ".\n\nWould you like to add it to your cart?")){
			console.log(this)
			this.cart.push(book);
			console.log(this.cart)
		}
	else alert("OK, book was not added")
};

//takes in a book object, if user wants to delete it, delete it, else alert that no book has been added.
var confirmDeleteFromCart = function (book) {
	if (confirm("We found your book " + book.title + " by " + book.author + ", it costs $" + book.price.toFixed(2) + ".\n\nWould you like to remove it to your cart?"))
			this.cart = this.cart.filter(function(cartBook) {
				return cartBook !== book
			});
	else alert("OK, book was not removed")
};
//alert with contents of the users cart.
var inspectCart = function () {
	if (this.cart.length === 0) {
		alert("Your cart is now empty")
	} else alert("Your cart has " + this.cart.length + " books it.\n" + buildList(this.cart))
}
//takes in an array of books, returns a list formatted for output
var buildList = function(books){
	var	total = 0;
	return	books.map(function(book) {
		total+= book.price
		return "\n" + book.title + " by " + book.author + " Cost: ($" + book.price.toFixed(2) + ")"
	}) + "\n\nTotal Cost: $" + total.toFixed(2)
}

var getBookObj = function (string) {
	return bookStore.find(function (book) {
		// console.log("\ntype: " , type, '\nbook type: ' , book[type] , "\nString: " , string)
	return (book.title ===	string);
	})
}
