"use strict";
var m = "Microfiber towel";
var c = "Carnabuba Wax";
var ig = "Invisible Glass";
var uww = "Ultimate Wash and Wax";
var v = "Vacuum";
var wm = "Wash Mit";
var uc = "Upholstery Cleaner";
var pw = "Pressure Washer";
var fc = "Fabric Cleaner";

var mockNDatabase = {
	product_1: {
			product_name : 'Microfiber Towels (12 pack)'
	},
	product_2: {
			product_name : 'Carnauba Wax'
			},
	product_3: {
			product_name : 'Invisible Glass (19oz)'
	},
	product_4: {
			product_name : 'Ultimate Wash & Wax'
	},
	product_5: {
			product_name : 'Vacuum'
	},
	product_6: {
			product_name : 'Wash Mitt'
	},
	product_7: {
			product_name : 'Upholstery Cleaner'
	},
	product_8: {
			product_name : 'Pressure Washer'
	},
	product_9: {
			product_name : 'Fabric Cleaner'
	}
};

var mockpDatabase = {
	product_1: {
			product_price : '$6.00'
	},
	product_2: {
			product_price : '20.00'
			},
	product_3: {
			product_price : '$3.00'
	},
	product_4: {
			product_price : '$10.00'
	},
	product_5: {
			product_price : '$25.00'
	},
	product_6: {
			product_price : '$.00'
	},
	product_7: {
			product_price : '$75.00'
	},
	product_8: {
			product_price : '$100.00'
	},
	product_9: {
			product_price : '$12.00'
	}
};

var nameMenu = document.getElementById("nameMenu")
  nameMenu.addEventListener("change", abc)
  
var priceMenu = document.getElementById("priceMenu")
	priceMenu.addEventListener("change", money)

var catMenu = document.getElementById("catMenu")
	catMenu.addEventListener{"change",group)

var toolMenu = document.getElementById("toolMenu")
	toolMenu.addEventListener("change", util)
	
var name = mockNDatabase.sort();
                          
function abc(){//function made to check array in abc order and desc way
	if (nameMenu.value == "A-Z")
		mocknDatabase.sort(function(a,b))
	if (nameMenu.value == "Z-A")
		mocknDatabase.reverse();
}
 
 
function money(){//creating price range for all applicable items
	if (priceMenu.value == "$0-$5")
		ig.style.display = "block";
		wm.style.display = "block";
		m.style.display = "none";
		c.style.display = "none";
		ig.style.display = "none";
		uww.style.display = "none";
		fc.style.display = "none";
		pw.style.display = "none";
		v.style.display = "none";
	if (priceMenu.value == "$6-$10")
		m.style.display = "block";
		uww.style.display = "block";
		ig.style.display = "none";
		wm.style.display = "none";
		c.style.display = "none";
		pw.style.display = "none";
		v.style.display = "none";
		fc.style.display = "none";
		uc.style.display = "none";
	if (priceMenu.value == "$11-$25")
		c.style.display = "block";
		v.style.display = "block";
		fc.style.display = "none";
		pw.style.display = "none";
		uc.style.display = "none";
		wm.style.display = "none";
		uww.style.display = "none";
		ig.style.display = "none";
		marginBottom.style.display = "none";
	if (priceMenu.value == "25+")
		v.style.display = "block";
		uc.style.display = "block";
		pw.style.display = "block";
		m.style.display = "none";
		c.style.display = "none";
		ig.style.display = "none";
		uww.style.display = "none";
		fc.style.display = "none";
		wm.style.display = "none";
}

function group(){ //categorizing by group, if it fits specific field, it will populate
	if (catMenu.value == "Cleaner")
		c.style.display="block";
		v.style.display = "none";
		uc.style.display = "block";
		pw.style.display = "block";
		m.style.display = "block";
		ig.style.display = "none";
		uww.style.display = "none";
		fc.style.display = "block";
		wm.style.display = "block";
	if (catMenu.value == "Vacuum")
		c.style.display="none";
		v.style.display = "block";
		uc.style.display = "none";
		pw.style.display = "none";
		m.style.display = "none";
		ig.style.display = "none";
		uww.style.display = "none";
		fc.style.display = "none";
		wm.style.display = "none";
	if (catMenu.value == "Wax")
		c.style.display="block";
		v.style.display = "none";
		uc.style.display = "none";
		pw.style.display = "none";
		m.style.display = "none";
		ig.style.display = "none";
		uww.style.display = "block";
		fc.style.display = "none";
		wm.style.display = "none";
}
 
function util(){
	if (toolMenu.value == "Mit")
		c.style.display="none";
		v.style.display = "none";
		uc.style.display = "none";
		pw.style.display = "none";
		m.style.display = "block";
		ig.style.display = "none";
		uww.style.display = "none";
		fc.style.display = "none";
		wm.style.display = "none";
	if (toolMenu.value == "Wax")
		c.style.display="block";
		v.style.display = "none";
		uc.style.display = "none";
		pw.style.display = "none";
		m.style.display = "none";
		ig.style.display = "none";
		uww.style.display = "block";
		fc.style.display = "none";
		wm.style.display = "none";
	if (toolMenu.value == "Upholstery Cleaner")
		c.style.display="none";
		v.style.display = "none";
		uc.style.display = "block";
		pw.style.display = "none";
		m.style.display = "none";
		ig.style.display = "none";
		uww.style.display = "none";
		fc.style.display = "none";
		wm.style.display = "none";		
}