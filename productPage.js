var mockDatabase = {
	product_1: {
		product_name : '<h1>Microfiber Towels (12 pack)</h1>',
		product_price : '<h3>$6.00</h3>',
		product_image : '<img class = "adjustimg" src = "Microfiber_Towels.jpg"></img>',
		product_description : "<ul class='description_list'><li>Super-soft microfiber cloths, best for cleaning & dusting the kitchen, home, car, bath, glasses and more.</li><li>Lint-free, streak-free cleaning & polishing; with a non-abrasive design that won't scratch surfaces, paints, stainless steel or clear coats.</li><li>Can be washed (cold water & tumble dry low) and reused hundreds of times, allowing you to save money on paper towels and costly cleaners.</li></ul>"
	},
	product_2: {
		product_name : 'Carnauba Wax',
		product_price : '$20.00',
		product_image : 'url',
		product_description : "<ul class='description_list'><li>Apply more than one coat for added protection.</li><li>Non-abrasive pure Carnauba wax safe to use over and over.</li><li>Contains heat resistant carnauba wax for a long-lasting shine.</li><li>Regular use provides a long lasting benefit to your vehicle.</li></ul>"
	},
	product_3: {
		product_name : 'Invisible Glass (19oz)',
		product_price : '$3.00',
		product_image : 'url',
		product_description : "<ul class='description_list'><li>NO-DRIP FINE MIST SPRAY: This auto glass cleaner is applied to windows in a no-drip, fine mist spray that sticks to glass and does not run, waste product, or end up on your dashboard.</li><li>AMMONIA-FREE AND TINT SAFE: Stoner Invisible Glass Cleaner is an ammonia-free automotive glass cleaner.</li><li>It is safe to apply to tinted windows while removing debris that leaves glass clean and clear with no haze or streaks.</li><li>SUPERIOR CLEANING FOR MULTIPLE GLASS PRODUCTS: This auto window cleaner is great for cleaning several types of glass, including windows and car mirrors, and windshields.</li><li>FOAMING ACTION: This product comes in a 19-ounce aerosol can that easily remove bug splats, smoke haze, bird droppings, salt spray, and road grime thanks to the deep penetrating ClearDry foaming action formula.</li><li>It’s safe for both indoors and out.</li></ul>"
	},
	product_4: {
		product_name : 'Ultimate Wash & Wax',
		product_price : '$10.00',
		product_image : 'url',
		product_description : "<ul class='description_list'><li>CLEAR COAT SAFE: Carnauba wax and synthetic polymer technology gently cleans the paint while leaving behind additional wax protection.</li><li>DEEP SHINE: Leaves a deep, glossy, just-waxed shine and gently cleans in one easy step.</li><li>AMAZING SUDS: Incredible sudsing action safely lifts dirt and grime to minimize swirling.</li><li>PAINT MAINTENANCE: The perfect way to clean and shine your car’s paint, as well as boost its protection and glossiness, in between regular waxings.</li></ul>"
	},
	product_5: {
		product_name : 'Vacuum',
		product_price : '$25.00',
		product_image : 'url',
		product_description : "<ul class='description_list'><li>POWERFUL SUCTION & LOW NOISE: Hikeren car vacuum has CE, ROHS Certification. 12volt, 106w, 4300-4500PA suction. 75db low noise.</li><li>Can effectively clean the dust inside the car.</li></ul>"
	},
	product_6: {
		product_name : 'Wash Mitt',
		product_price : '$4.00',
		product_image : 'url',
		product_description : "<ul class='description_list'><li>Scratch-free, lint-free and swirl-free.</li><li>Extra plush microfiber.</li><li>Delivers premium wash. Increased absorbency.</li></ul>"
	},
	product_7: {
		product_name : 'Upholstery Cleaner',
		product_price : '$75.00',
		product_image : 'url',
		product_description : "<ul class='description_list'><li>Lightweight and Portable - Reaches and removes stains virtually anywhere from carpet and upholstery to stairs and more.</li><li>The only spot cleaner with a self-cleaning hose that flushes the hose clean after each use to help remove dirt and bacteria for a spotless clean inside and out.</li><li>Multi-purpose tool with antibacterial protection to prevent bacteria, mold and mildew build up.</li><li>Convenient Deep Clean - Sprays, scrubs, and removes everyday stains and spills. Motor Volts : 120 Volts. Motor Watts : 420 Watts.</li><li>Dual Tank Technology separates clean and dirty water so you can easily fill, empty, and rinse. Motor Amps 3.5 Amps.</li></ul>"
	},
	product_8: {
		product_name : 'Pressure Washer',
		product_price : '$100.00',
		product_image : 'url',
		product_description : "<ul class='description_list'><li>Three Quick-Connect Nozzles for Cleaning a Variety of Surfaces.</li><li>Compact and Lightweight Design Makes it Easy to Transport.</li><li>Turbo nozzle for 50% faster cleaning.</li><li>Spray wand with quick connect nozzle coupler.</li></ul>"
	},
	product_9: {
		product_name : 'Fabric Cleaner',
		product_price : '$12.00',
		product_image : 'url',
		product_description : "<ul class='description_list'><li>Fabric Cleaner Fabric cleaner: cleans cloth, carpet, upholstery, and more.</li><li>Stain Remover breaks down set-in stains.</li><li>High-sudsing foaming action lifts dirt & stains.</li><li>Removes foul odors and helps prevent new ones over time.</li><li>Restores a like-new look and feel to fabrics and interior cloth surfaces.</li></ul>"
	}
};

let title = mockDatabase.product_1['product_name'];
document.getElementById("title").innerHTML = title;

let price = mockDatabase.product_1['product_price'];
document.getElementById("price").innerHTML = price;


let description = mockDatabase.product_1['product_description'];
document.getElementById("description").innerHTML = description;

let image = mockDatabase.product_1['product_image'];
document.getElementById("image").innerHTML = image;
