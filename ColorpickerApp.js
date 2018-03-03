var numSqure=6;
var colort=getrandomcolor(numSqure);
var colorhead=document.querySelector("#colorh1");
var shapes=document.querySelectorAll(".square");
var colorpick=document.querySelector("#head1");
var messago=document.querySelector("#messaged");
var borest=document.querySelector("#Breset");
var bohard=document.querySelector("#hardbtn");
var boeasy=document.querySelector("#easybtn");
var pickedcolor= pickcolor();


bohard.addEventListener("click",function(){
	bohard.classList.add("selected");
	boeasy.classList.remove("selected");
	numSqure=6;
	colort=getrandomcolor(numSqure);
	pickedcolor=pickcolor();
	for(var i=0;i<shapes.length;i++){
		shapes[i].style.backgroundColor=colort[i];
		shapes[i].style.display="block";
	}
});
boeasy.addEventListener("click",function(){
	boeasy.classList.add("selected");
	bohard.classList.remove("selected");
	numSqure=3;
	colort=getrandomcolor(numSqure);
	pickedcolor=pickcolor();
	colorpick.textContent=pickedcolor;
	for(var i=0;i<shapes.length;i++){
		if(colort[i]){
		shapes[i].style.backgroundColor=colort[i];
	}else{
		shapes[i].style.display="none";

	}
	}

});

borest.addEventListener("click", function(){
	colort=getrandomcolor(numSqure);
	pickedcolor= pickcolor();
	colorpick.textContent=pickedcolor;
	this.textContent="NEW GAME";
	messago.textContent="";
	for(var i=0;i<shapes.length;i++){
		shapes[i].style.backgroundColor=colort[i];
	}
	colorhead.style.backgroundColor="steelblue";



});
colorpick.textContent=pickedcolor;
for(var i=0; i<shapes.length; i++){
	shapes[i].style.backgroundColor=colort[i];
	shapes[i].addEventListener("click",function(){

	   var ran= this.style.backgroundColor;
	   
	   if(ran===pickedcolor){
	   	messago.textContent="Correct!!"
	   	borest.textContent="PLAY AGAIN";
	   	colorChange(pickedcolor);
	   	colorhead.style.backgroundColor=pickedcolor;


	   }else{
	   	this.style.backgroundColor="#232323";
	   	messago.textContent="try again!!";

	   }
	   	
	});
}

function colorChange(coloree){
	for(i=0;i<shapes.length;i++){
		shapes[i].style.backgroundColor=coloree;
	}

}
function pickcolor(){
	//take random number
	//return that number 
	var indoor=Math.floor(Math.random() * colort.length);
	return colort[indoor];
}
function getrandomcolor(num){
	var arr=[];
	//get values into arr
	for(var i=0;i<num;i++){
		arr.push(randomcolor());
	}
	//arr
	return arr;
}
function randomcolor(){
	//variable for red
	var r=Math.floor(Math.random() * 256);
	//variable for green
	var g = Math.floor(Math.random() * 256);
	var b= Math.floor(Math.random() * 256);
	return "rgb("+ r + ", "+ g +", "+g +")";

}

