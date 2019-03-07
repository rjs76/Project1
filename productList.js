"use strict";
var orderMenu = document.getElementById("orderMenu")
  orderMenu.addEventListener("change", filter)
                          
var pointerPrice = document.getElementById("Price")
var pointerCategory = document.getElementById("Category")
var pointerName = document.getElementById("Name")
var pointerTools = document.getElementById("Tools")

  
function filter(){
  if (orderMenu.value == "")
    {pointerTitle.style.display = "none"; pointerPrice.style.display = "none"; pointerCategory.style.display = "none" }
  if (orderMenu.value =="Price") 
    {pointerPrice.style.display = "block"; pointerCategory.style.display = "none"; pointerTitle.style.display = "none"}
  if (orderMenu.value == "Trans") 
    {pointerCategory.style.display = "block"; pointerPrice.style.display = "none"; pointerTitle.style.display = "none"}

}
 
	var products = [
        {
                product_name : 'Microfiber Towels (12 pack)',
                product_price : '$6.00',
                product_image : "path to the image",
                product_description : "Microfiber Towels (12 pack) Plush, super-soft microfiber cloths, best for cleaning & dusting the kitchen, home, car, bath, glasses and more. Lint-free, streak-free cleaning & polishing; with a non-abrasive design that won't scratch surfaces, paints, stainless steel or clear coats. Can be washed (cold water & tumble dry low) and reused hundreds of times, allowing you to save money on paper towels and costly cleaners"
        },
        {
                product_name : 'Carnauba Wax',
                product_price : '$20.00',
                product_image : "path to the image",
                product_description : "Carnauba Wax Apply more than one coat for added protection. Non-abrasive pure Carnauba wax safe to use over and over. Contains heat resistant carnauba wax for a long-lasting shine. Regular use provides a long lasting benefit to your vehicle."
        },
        {
                product_name : 'Invisible Glass (19oz)',
                product_price : '$3.00',
                product_image :
                product_description : "Invisible Glass (19oz) NO-DRIP FINE MIST SPRAY: This auto glass cleaner is applied to windows in a no-drip, fine mist spray that sticks to glass and does not run, waste product, or end up on your dashboard. AMMONIA-FREE AND TINT SAFE: Stoner Invisible Glass Cleaner is an ammonia-free automotive glass cleaner. It is safe to apply to tinted windows while removing debris that leaves glass clean and clear with no haze or streaks. SUPERIOR CLEANING FOR MULTIPLE GLASS PRODUCTS: This auto window cleaner is great for cleaning several types of glass, including windows and car mirrors, and windshields. FOAMING ACTION: This product comes in a 19-ounce aerosol can that easily remove bug splats, smoke haze, bird droppings, salt spray, and road grime thanks to the deep penetrating ClearDry foaming action formula. It’s safe for both indoors and out."
        },
        {
                product_name : 'Ultimate Wash & Wax',
                product_price : '$10.00',
                product_image :
                product_description : "Ultimate Wash & Wax CLEAR COAT SAFE: Carnauba wax and synthetic polymer technology gently cleans the paint while leaving behind additional wax protection. DEEP SHINE: Leaves a deep, glossy, just-waxed shine and gently cleans in one easy step. AMAZING SUDS: Incredible sudsing action safely lifts dirt and grime to minimize swirling. PAINT MAINTENANCE: The perfect way to clean and shine your car’s paint, as well as boost its protection and glossiness, in between regular waxings."
        },
        {
                product_name : 'Vacuum',
                product_price : '$25.00',
                product_image :
                product_description : "Vacuum POWERFUL SUCTION & LOW NOISE: Hikeren car vacuum has CE, ROHS Certification. 12volt, 106w, 4300-4500PA suction. 75db low noise. Can effectively clean the dust inside the car."
        },
        {
                product_name : 'Wash Mitt',
                product_price : '$4.00',
                product_image :
                product_description : "Wash Mitt Scratch-free, lint-free and swirl-free. Extra plush microfiber. Delivers premium wash. Increased absorbency"
        },
        {
                product_name : 'Upholstery Cleaner',
                product_price : '$75.00',
                product_image :
                product_description : "Upholstery Cleaner Lightweight and Portable - Reaches and removes stains virtually anywhere from carpet and upholstery to stairs and more. The only spot cleaner with a self-cleaning hose that flushes the hose clean after each use to help remove dirt and bacteria for a spotless clean inside and out. Multi-purpose tool with antibacterial protection to prevent bacteria, mold and mildew build up. Convenient Deep Clean - Sprays, scrubs, and removes everyday stains and spills. Motor Volts : 120 Volts. Motor Watts : 420 Watts. Dual Tank Technology separates clean and dirty water so you can easily fill, empty, and rinse. Motor Amps 3.5 Amps"
        },
        {
                product_name : 'Pressure Washer',
                product_price : '$100.00',
                product_image :
                product_description : "Three Quick-Connect Nozzles for Cleaning a Variety of Surfaces. Compact and Lightweight Design Makes it Easy to Transport. Turbo nozzle for 50% faster cleaning. Spray wand with quick connect nozzle coupler."
        },
        {
                product_name : 'Fabric Cleaner',
                product_price : '$12.00',
                product_image :
                product_description : "Fabric Cleaner Fabric cleaner: cleans cloth, carpet, upholstery, and more. Stain Remover breaks down set-in stains. High-sudsing foaming action lifts dirt & stains. Removes foul odors and helps prevent new ones over time. Restores a like-new look and feel to fabrics and interior cloth surfaces"
        }
	];
 
