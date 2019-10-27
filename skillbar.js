$.fn.createBar = function(Totalbars, Colour , ColouredBars, Colour2  ) {
	
	this.css("border", "solid 1px black")
	this.height("20px")
	var length = 2;
	
	for (var i = 0 ; i < ColouredBars ; i ++ ) {
	
		var marked = document.createElement("canvas")
		marked.style.width = "5px"
		marked.style.height = "14px"
		marked.style.margin = "2px";
		marked.style.border = "solid 1px black"
		var ctx = marked.getContext("2d");
		ctx.fillStyle = Colour2;
		ctx.fillRect(0,0,300,200);
		this.append(marked)
		length = length + 11

	}
	
	var remaining = Totalbars - ColouredBars

	for (var i = 0 ; i < remaining ; i ++ ) {
	
		var unmarked = document.createElement("canvas")
		unmarked.style.width = "5px"
		unmarked.style.height = "14px"
		unmarked.style.margin = "2px";
		unmarked.style.border = "solid 1px black"
		var ctx = unmarked.getContext("2d");
		ctx.fillStyle = Colour;
		ctx.fillRect(0,0,300,200);
		this.append(unmarked)
		length = length + 11

	}
	
	this.width(length + "px")

	
}; 
