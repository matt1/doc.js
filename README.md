doc.js
======

Yet another micro-weight javascript library for DOM manipulation

About
-----
doc.js is yet another tiny javascript framework, but I'm thumbing my nose at backwards compatibility and embracing what modern browses have to offer to provide functionality that we all use pretty much everyday without having to use a framework that brings its kitchen sink to the table.

* Selecting elements by the CSS selector?  No problem - we've got document.querySelector and document.querySelectorAll for that!
* Knowning when the document is ready? There is the *DOMContentLoaded* event for that.
* Adding and removing styles?  Easy - just use *element*.style or if you want to add classes just use *element*.classList!
* Setting up events on objects? A doddle; this is what *element*.addEventListener is for!
* What about proxying calls to use a specific this? That is why modern ECMA standards provide the *function*.call method!

Selecting Elements
------------------

Suppose you had the following HTML:

    <body>
	    <div id="content">
		    <h1 class="heading">Hello World</h1>
			<p>I am free of gorilla-sized javascript frameworks!</p>
		</div>
	</body>
	
If you want to select an element to manipulate it its super-easy - just use the CSS selectors.  For example to select the heading we'd do this:

    var heading = doc(".heading");

Easy.  Because its just using pure CSS selectors you could have done this a couple of other ways too:

	var heading = doc("h1.heading");
	
Or

	var heading = doc("#content h1");
	
Or 

	var heading = doc("h1");
	
We've got the [pure power of the browser's DOM support via querySelectorAll](http://www.w3.org/TR/css3-selectors/) to basically pick objects however we want.
		
Knowing when the document is ready
----------------------------------

We've got a super simple way of doing that - just add an event listener and you're done:

    document.addEventListener("DOMContentLoaded", function() {	
	   alert("The document is ready!"); 
	});
		
Manipulating CSS
----------------

Lets imagine we want to change the font and the color of the document.  Thats easy too:

    doc("body").style.fontFamily = "sans-serif";
	doc("body").style.color = "#ff0000";
	
You've basically got the [entire range of CSS options](http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-htmlelementcss) right at your fingertips here.  Of course, manually setting styles on elements is a bit tiresome.  Lets use a pre-defined CSS style instead:

	doc("body").classList.add("bodyClass");
	
We can also remove and toggle CSS classes on and off again in a similar way:

    doc("body").classList.remove("oldClass");
	doc("body").classList.toggle("invisibilityCloak");
	
Setting up Events
-----------------

If we want to add or remove an event - say the click event - to an object its [pretty easy](http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-Registration-interfaces):

	doc("#content p").addEventListener("click", function(e) {
	    alert("Thanks for clicking!);
	});	



 