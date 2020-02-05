function debounce(func, wait) {
	var timeout;
	return function() {
        debugger;
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
		};
		var callNow = !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) {func.apply(context, args);}
	};
}

var myEfficientFn = debounce(function() {
	console.log('hi');
}, 250);

for (let i in [...Array(10000)]) {
    myEfficientFn();
}
debugger;
