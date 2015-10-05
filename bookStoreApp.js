// In Javascript, the leading __ in a variable name signifies that this is a variable you probably shouldn't be messing with. 
// NOTE: the leading underscore IN the variable name is different than the underscorejs.org library, 
// which uses underscore as an object and INVOKES METHODS on that object, "_.each()" for example. 
function __dontWorryAboutThis(){
	var __books = "Lucky Jim by Kingsley Amis, Money by Martin Amis, The Information by Martin Amis, The Bottle Factory Outing by Beryl Bainbridge, According to Queeney by Beryl Bainbridge, Flaubert's Parrot by Julian Barnes, A History of the World in 10 1/2 Chapters by Julian Barnes, Augustus Carp Esq. by Himself: Being the Autobiography of a Really Good Man by Henry Howarth Bashford, Molloy by Samuel Beckett, Zuleika Dobson by Max Beerbohm, The Adventures of Augie March by Saul Bellow, The Uncommon Reader by Alan Bennett, Queen Lucia by EF Benson, The Ascent of Rum Doodle by WE Bowman, A Good Man in Africa by William Boyd, The History Man by Malcolm Bradbury, No Bed for Bacon by Caryl Brahms and SJ Simon, Illywhacker by Peter Carey, A Season in Sinji by JL Carr, The Harpole Report by JL Carr, The Hearing Trumpet by Leonora Carrington, Mister Johnson by Joyce Cary, The Horse's Mouth by Joyce Cary, Don Quixote by Miguel de Cervantes, The Case of the Gilded Fly by Edmund Crispin, Just William by Richmal Crompton, The Provincial Lady by EM Delafield, Slouching Towards Kalamazoo by Peter De Vries, The Pickwick Papers by Charles Dickens, Martin Chuzzlewit by Charles Dickens, Jacques the Fatalist and his Master by Denis Diderot, A Fairy Tale of New York by JP Donleavy, The Commitments by Roddy Doyle, Ennui by Maria Edgeworth, Cheese by Willem Elsschot, Bridget Jones's Diary by Helen Fielding, Joseph Andrews by Henry Fielding, Tom Jones by Henry Fielding, Caprice by Ronald Firbank, Bouvard et Pécuchet by Gustave Flaubert, Towards the End of the Morning by Michael Frayn, The Polygots by William Gerhardie, Cold Comfort Farm by Stella Gibbons, Dead Souls by Nikolai Gogol, Oblomov by Ivan Goncharov, The Wind in the Willows by Kenneth Grahame, Brewster's Millions by Richard Greaves (George Barr McCutcheon), Squire Haggard's Journal by Michael Green, Our Man in Havana by Graham Greene, Travels with My Aunt by Graham Greene, Diary of a Nobody by George Grossmith, The Little World of Don Camillo by Giovanni Guareschi, The Curious Incident of the Dog in the Night-time by Mark Haddon, Catch-22 by Joseph Heller, Mr Blandings Builds His Dream House by Eric Hodgkins, High Fidelity by Nick Hornby, I Served the King of England by Bohumil Hrabal, The Lecturer's Tale by James Hynes, Mr Norris Changes Trains by Christopher Isherwood, The Mighty Walzer Howard by Jacobson, Pictures from an Institution by Randall Jarrell, Three Men in a Boat by Jerome K Jerome, Finnegans Wake by James Joyce, The Castle by Franz Kafka, Lake Wobegon Days by Garrison Keillor, Death and the Penguin by Andrey Kurkov, The Debt to Pleasure by John Lanchester, L'Histoire de Gil Blas de Santillane (Gil Blas) by Alain-René Lesage, Changing Places by David Lodge, Nice Work by David Lodge, The Towers of Trebizond by Rose Macaulay, England Their England by AG Macdonell, Whisky Galore by Compton Mackenzie, Memoirs of a Gnostic Dwarf by David Madsen, Cakes and Ale - Or the Skeleton in the Cupboard by W Somerset Maugham, Tales of the City by Armistead Maupin, Bright Lights Big City by Jay McInerney, Puckoon by Spike Milligan, The Restraint of Beasts by Magnus Mills, Charade by John Mortimer, Titmuss Regained by John Mortimer, Under the Net by Iris Murdoch, Pnin by Vladimir Nabokov, Pale Fire by Vladimir Nabokov, Fireflies by Shiva Naipaul, The Sacred Book of the Werewolf by Victor Pelevin, La Disparition by Georges Perec, Les Revenentes by Georges Perec, La Vie Mode d'Emploi by Georges Perec, My Search for Warren Harding by Robert Plunkett, A Dance to the Music of Time by Anthony Powell, A Time to be Born by Dawn Powell, Excellent Women by Barbara Pym, Less Than Angels by Barbara Pym, Zazie in the Metro by Raymond Queneau, Solomon Gursky Was Here by Mordecai Richler, Alms for Oblivion by Simon Raven, Portnoy's Complaint by Philip Roth, The Westminster Alice by Saki, The Unbearable Bassington by Saki , Hurrah for St Trinian's by Ronald Searle, Great Apes by Will Self, Porterhouse Blue by Tom Sharpe, Blott on the Landscape by Tom Sharpe, Office Politics by Wilfrid Sheed, Belles Lettres Papers: A Novel by Charles Simmons, Moo by Jane Smiley, Topper Takes a Trip by Thorne Smith, The Adventures of Ferdinand Count Fathom by Tobias Smollett, The Adventures of Roderick Random by Tobias Smollett, The Adventures of Peregrine Pickle by Tobias Smollett, The Expedition of Humphry Clinker by Tobias Smollett, The Prime of Miss Jean Brodie by Muriel Spark, The Girls of Slender Means by Muriel Spark, The Driver's Seat by Muriel Spark, Loitering with Intent by Muriel Spark, A Far Cry from Kensington by Muriel Spark, The Life and Opinions by Tristram Shandy, Gentleman by Laurence Sterne, White Man Falling by Mike Stocks, Handley Cross by RS Surtees, A Tale of a Tub by Jonathan Swift, Penrod by Booth Tarkington, The Luck of Barry Lyndon by William Makepeace Thackeray, Before Lunch by Angela Thirkell, Tropic of Ruislip by Leslie Thomas, A Confederacy of Dunces by John Kennedy Toole, Barchester Towers by Anthony Trollope, Venus on the Half-Shell by Kilgore Trout, The Mysterious Stranger by Mark Twain, The Witches of Eastwick by John Updike, Breakfast of Champions by Kurt Vonnegut, Infinite Jest by David Foster Wallace, Decline and Fall by Evelyn Waugh, Vile Bodies by Evelyn Waugh, Black Mischief by Evelyn Waugh, Scoop by Evelyn Waugh, The Loved One by Evelyn Waugh, A Handful of Dust by Evelyn Waugh , The Life and Loves of a She-Devil by Fay Weldon, Tono Bungay by HG Wells, Molesworth by Geoffrey Willans and Ronald Searle, The Wimbledon Poisoner by Nigel Williams, Anglo-Saxon Attitudes by Angus Wilson, Something Fresh by PG Wodehouse, Piccadilly Jim by PG Wodehouse, Thank You Jeeves by PG Wodehouse, Heavy Weather by PG Wodehouse, The Code of the Woosters by PG Wodehouse, Joy in the Morning by PG Wodehouse";
	var __bookStore = [];
	var __booksArray = __books.split(',');
	var __categories = ['classic', 'horror', 'romantic comedy', 'self help', 'historical']

	function __createBook(bookName){
		var price = Math.random() * 20;
		price = parseFloat(price.toString().slice(0, 4), 10);
		var category = (__categories[Math.floor(Math.random() * 5)])
	
		return {
			title: bookName.split('by')[0].trim(),
			author: bookName.split('by')[1].trim(),
			price: price,
			category: category
		}
	}

	function __createBookStore(arr) {
		for (var i = 0; i < arr.length; i++) {
			__bookStore.push(__createBook(arr[i]));
		}

		return __bookStore
	}

	return __createBookStore(__booksArray);

} //Don't pay any attention to the man behind the curtain in lines 1-30. Remember, the leading underscores in the variable names mean you shouldn't be messing with these variables. 
var deleteBook = function (input) {
// 	(ii) If the book is in the cart, ask the user if they're sure they want to delete it using confirm().
	if (Number.isInteger(input)) {
		
		expensiveBooks = this.cart.filter(function (book) {
			return (book.price >= input)
		})
		console.log(expensiveBooks);
		bookToDeleteString = prompt("There are " + expensiveBooks.length + " book(s) over the price of $" + input.toFixed(2) + ".\n" + buildList(expensiveBooks) + "\nWhich title would you like to delete?")
		this.confirmDeleteFromCart(getBookObj(bookToDeleteString));
		this.inspectCart();
	} else if (checkTitle(input, susan.cart, 'title')) {
// 	(iii) If they do want to delete, take the book out of the cart.
		this.confirmDeleteFromCart(getBookObj(input));
// 	(iv) Inspect the cart to make sure the book was deleted.
		this.inspectCart();
	} else { alert('We were unable to find your book.')}
} 	
	
// 3. Create a method, clearCart, and put it on your testUser object (Susan).
var clearCart = function ()	{
// 	(i) clearCart prompts the user as to whether they're SURE they want to clear their cart.
// 	(ii) If they confirm yes, delete everything in their cart.
if(confirm("Are you SURE you want to clear your cart")) this.savedCart = this.cart.splice(0);
// 	(iii) Inspect the cart to make sure it's empty.
	this.inspectCart();	
}
// 4. Create a method, checkOut, and put it on your testUser object (Susan).
var checkOut = function (){
// 	(i) checkOut adds up the total price of the books in the user's cart and compares it to their balance.
	var total = this.cart.reduce(function(acc,book,key) {
		return acc + book.price;
	}, this.cart[0].price)
// 	(ii) If their balance is higher than the the total of the combined books, let them check out.
	if (this.balance >= total) {
		this.balance -= total;
		var lastPurchace = this.cart.splice(0);
		console.log(this.name + " purchased \n" + lastPurchace.length + " book(s) for a total of: $"+total.toFixed(2)+" \nRemaining balance: "+this.balance.toFixed(2))
// 	checkout() ---> 'YOUVE SUCCESSFULLY CHECKED OUT!'
		alert("You've successfully checked out!")
// 	(iii) If their balance is lower than the total of the combined books, tell them to get their money up and try again later (jk be nice about it).
	} else alert("You don't have enough money :(")
}	
var userName = prompt("What's your name?")
alert("Hello, " + userName + "!\nWelcome to Rain Forest")
function testUser(){
	var balance = Math.random() * 100 + 130;
		balance = parseFloat(balance.toString().slice(0, 4), 10);
	return {
		name: userName,
		balance: balance,
		cart: [],
		deleteBook: deleteBook,
		checkOut: checkOut,
		clearCart: clearCart,
		confirmAddToCart: confirmAddToCart,
		confirmDeleteFromCart: confirmDeleteFromCart,
		inspectCart: inspectCart,
		checkStore: checkStore
	}
}

// 2. Create a method, deleteBook, and put it on your testUser object (Susan).
// 	(i) deleteBook takes a string parameter, and checks it against the books in the user's cart.






var bookStore = __dontWorryAboutThis();

/////////////////////////My Code///////////
// 1. Create a function, checkStore, that takes a string as a parameter.
var checkStore = function (string) {
// 	(i) checkStore goes through our bookStore and checks each book title.
// 	(ii) If the title matches the input string, we ask the user whether he or she wants to add it to their cart. Think about what you should do based on the user's response. 
	if (getBookObj(string)) {
		this.confirmAddToCart(getBookObj(string));
// 	(iii) If the title isn't found, alert the user that it wasn't found.
	} else {
			
			matches = bookStore.filter(function (book, key, list){
				return book.category === string || book.author === string
			})
			bookToAddString = prompt("We found " + matches.length + " matches!\n" + buildList(matches));
	 
			this.confirmAddToCart(getBookObj(bookToAddString));
	}
}

var user = testUser();
var tbook = "Money"

// 6. Susan is balling on a budget! Let's allow our user to delete multiple books by their price.
	
// 	(i) If the user passes a number as an argument to our deleteBook function, return all the books
// 	that are equal to and larger than that price point.
	
// 	(ii) Much like on #5, let the user know which books fit their parameters.
// 	```
// 	deleteBook(20) --->
// 		These are the books equal to and above 20$:
		
// 		A Clock Work Orange by Anthony Burgess (27$)
// 		Enders Game by Orson Scott Card (35$)
		
// 		Which one would you like to take out of your cart?
// 	```
	
// 	(iii) If the value of their input is equal to the book title, delete the book.

// - MORE COMPLEX FUNCTIONALITY: CREDIT CARD INFORMATION PROCESSINGo (ASK ALBREY ABOUT THIS).
// >>>>>>> 8f34a31a1e2c5e489f3c9c74b21d1bf724a3d50f



// console.log(getBookObj("Money","title"))


// checkStore("classic");
// checkStore("Martin Amis");
// confirmAddToCart(bookStore[0]);
// confirmAddToCart(bookStore[1]);
// susan.clearCart();
// confirmAddToCart(bookStore[0]);
// confirmAddToCart(bookStore[1]);
// confirmAddToCart(bookStore[2]);
// confirmAddToCart(bookStore[3]);
// susan.deleteBook(1);
// console.log(checkTitle('Money',bookStore, 'title'));
// checkStore(tbook);
// susan.deleteBook(tbook);
// susan.balance = 0;
// susan.checkOut();
// susan.balance = 100000;
// susan.checkOut();