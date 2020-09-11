window.alert("js is here");
function tabClickHandler(event){
	if (!(event.currentTarget.classList.contains("active")))
	{
		tabDeactivator();
		event.currentTarget.classList.add("active");
	}

}

function tabDeactivator(){
	let tabSet = document.querySelectorAll(".nav .nav-item");
	for (const tab of tabSet){
		tab.classList.remove("active");
	}
}

let tabSet = document.querySelectorAll(".nav .nav-item");
for (const tab of tabSet){
	tab.addEventListener("click", tabClickHandler);
}

