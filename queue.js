var queue = function(){
	if(arguments.length == 0)
		return;
	var i = 0,
		maxlimit = 1000,
		limit = maxlimit,
		args = arguments;
	var x = setInterval(function(){
		if(args[i]())
		{
			limit = maxlimit;
			i++;
			if(i >= args.length)
				clearInterval(x);
		}
		if(limit < 0) clearInterval(x);
		limit--;
	}, 50);
};

// Optional
queue.exists = function(key, obj){
	var props = key.split('.'),
		item = obj;
	if(typeof obj == 'undefined' || typeof obj !== 'object')
		item = window;
	for (var i = 0; i < props.length; i++) {
		if(props[i] in item)
			item = item[props[i]];
		else
			return false;
	}
	return true;
};
