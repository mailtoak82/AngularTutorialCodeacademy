(function () {
var app = angular.module('store',[]);

app.controller ('StoreController',function(){
this.products = gems;

});

var gems = [ 

{
	name: 'Dodecahedron',
	price: 2.95,
	description: 'This is a super gem!',
	canPurchase: true,
	soldOut: false
},

{
	name: 'Pentagonal Gem',
	price: 5.95,
	description: 'This is a super duper gem!',
	canPurchase: false,
	soldOut: false
}
];

}) ();