window.alert("js is here");

class ListLS{
	constructor(root){
		this.root = root;
		this.setEventListeners();
	}
	
	myFunc(event){
		window.alert("Stop clicking me");
	}
	
	setEventListeners(){
		 const listItems = this.root.querySelectorAll("li");
		for (let item of listItems){
			item.addEventListener("click", this.myFunc);
		}
	}
	
}

const productList = new ListLS(document.querySelector("#product-list"));