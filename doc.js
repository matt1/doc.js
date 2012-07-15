// doc.js - copyright 2012 https://github.com/matt1
;function doc(e) {
	// If we only got one result, return that.  
	// Otherwise step over each NodeList item, add to an array and return
	var result = document.querySelectorAll(e);
	if (result.length == 1) {
		return result.item(0);
	} else {
		var results = [];
		doc.each(result, function(e) {
			results.push(e);
		});
		return results;
	}
}

// Convenience function to wrap sneaky and easily-forgotten call() approach
doc.each = function(e, callback) {[].forEach.call(e, callback);}

// Convenience wrapper for ready
doc.ready = function(callback) {document.addEventListener("DOMContentLoaded", callback);}

// Convenience function for parent to match pattern for next() & previous() functions
Object.prototype.parent = function() {return this.parentNode;}

// Add next() prototype to get next node, not whitespace
Object.prototype.next = function() {
	var next = this.nextSibling;
	while (next && next.nodeType != 1) {
		next = next.nextSibling;
	}
	return next;
}

// Add previous() prototype to get previous node, not whitespace
Object.prototype.previous = function() {
	var previous = this.previousSibling;
	while (previous && previous.nodeType != 1) {
		previous = previous.previousSibling;
	}
	return previous;
}

