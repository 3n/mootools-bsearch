Array.implement({
	bsearch: function(target, fun){
		var low = 0
		var high = this.length
		var fun = fun || function(a,b){return a < b ? -1 : a > b ? 1 : 0}
		
		while (low < high) {
			var mid = ((low + high)/2).floor();
			(fun(this[mid],target) == -1) ? low = mid + 1 : high = mid;
		}
		
		if ((low < this.length) && (fun(this[low],target) == 0))
			return this[low]
		else
			return null
	}
})