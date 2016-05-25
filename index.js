window.onload = function () {
	
var hnote = document.getElementById("lunbo-hnote");
var lunbobox = document.getElementById("lunbobox");

var aimg = lunbobox.getElementsByTagName("img")[0];
var ali = lunbobox.getElementsByTagName("li");
var arrtext = ["It's about time:", "Forget inbox zero:", "'Real-time' isn't for real:"]
var arrimg = ["img/slide-1.png", "img/slide-2.png", "img/slide-3.png", "img/slide-4.png"]
var num = 0;
var time = null;
var num1 = 0;
var last = null;

function text(){
		num ++;
		if(num == arrtext.length){
			num = 0;
		}
		hnote.innerHTML = arrtext[num];
}
setInterval(text,2000)



function tupian(){
	num1 ++;
	last = num1 - 1;
	if (num1 == arrimg.length) {
		num1 = 0;
	}
	// alert(num1 + "," +last)
	aimg.src = arrimg[num1];
	ali[last].className = "noxuan";
	ali[num1].className = "xuanzhong";

}
setInterval(tupian,2000)







}