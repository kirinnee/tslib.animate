import {Core, Kore} from "@kirinnee/core"; 
import {Shape} from "./classLibrary/Shape";
import {Rectangle} from "./classLibrary/Rectangle";
import {Square} from "./classLibrary/Square";

let core:Core = new Kore();
core.ExtendPrimitives();


if(document.querySelectorAll("button")[0]!=null){
	document.querySelectorAll("button")[0].onclick = function(){
		document.getElementById("target")!.innerText = (document.getElementById("input") as HTMLInputElement).value.split('').reverse().join('');
	};
}



export {
	Shape, Rectangle, Square
}
