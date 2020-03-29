/*let links = document.querySelectorAll(".a");

lnks.forEach(function (lnks) {
	
})*/

/*let celdas = document.querySelectorAll(".td")

celdas.forEach(function(td){
	td.addEventListener('click',function(){
		console.log(this);
	})
})*/

let links=document.querySelectorAll('.close');
links.forEach(function(link) {
	link.addEventListener("click",function (ev) {
		ev.preventDefault();
		let content=document.querySelectorAll('.content');

		content.classList.remove('flipInX');
		content.classList.remove('animated');

		content.classList.add('fadeOutUp');
		content.classList.add('animated');

		setTimeout(function () {
			location.href="/boletines";
		},600);


		return false;
	})

})

