// JavaScript source code
var pets=[
	{
		likes: 0,
		name: "Athur",
		imgSRC:"img/arthur.jpg",
		imgAttrib:"Udacy",
		description:"I am so cutte",
		commentUser: ['hi'],
		userLiked: false
	},
	{
		likes: 0,
		name: "Sak",
		imgSRC:"img/Sak.jpg",
		imgAttrib:"Udacy",
		description:"I am so cutte",
		commentUser: ["hi", "losdsdas", "www"],
		userLiked: false
	},
	{
		likes: 0,
		name: "Tobias",
		imgSRC:"img/Tobias.jpg",
		imgAttrib:"Udacy",
		description:"I am so cutte",
		commentUser: ["hi", "mi"],
		userLiked: false
	},
	{
		likes: 0,
		name: "Tommy",
		imgSRC:"img/Tommy.jpg",
		imgAttrib:"Udacy",
		description:"I am so cutte",
		commentUser: ["hi", "losdsdas", "www"],
		userLiked: false
	},
	{
		likes: 0,
		name: "Krhis",
		imgSRC:"img/Krhis.jpg",
		imgAttrib:"DamianORG",
		description:"I am so cutte",
		commentUser: ["hi", "losdsdas", "www"],
		userLiked: false
	},
	{
		likes: 0,
		name: "Rex",
		imgSRC:"img/Rex.jpg",
		imgAttrib:"Udacy",
		description:"I am so cutte",
		commentUser: ["hi", "losdsdas", "www"],
		userLiked: false
	},
	{
		likes: 0,
		name: "Zlatan",
		imgSRC:"img/Zlatan.jpg",
		imgAttrib:"Udacy",
		description:"I am so cutte",
		commentUser: ["hi", "losdsdas", "www"],
		userLiked: false
	},
	{
		likes: 0,
		name: "fufi",
		imgSRC:"img/fufi.jpg",
		imgAttrib:"Udacy",
		description:"I am so cutte",
		commentUser: ["hi", "losdsdas", "www"],
		userLiked: false
	},
	{
		likes: 0,
		name: "Mishi",
		imgSRC:"img/Mishi.jpg",
		imgAttrib:"Udacy",
		description:"I am so cutte",
		commentUser: ["hi", "losdsdas", "www"],
		userLiked: false
	},
	{
		likes: 0,
		name: "Zeus",
		imgSRC:"img/Zeus.jpg",
		imgAttrib:"Udacy",
		description:"I am so cutte",
		commentUser: ["hi", "losdsdas", "www"],
		userLiked: false
	}
];
var Pet = function (data) {
	this.likes = ko.observable(data.likes);
	this.name = ko.observable(data.name);
	this.imgSRC = ko.observable(data.imgSRC);
	this.imgAttrib = ko.observable(data.imgAttrib);
	this.description = ko.observable(data.description);
	this.commentUser = ko.observableArray(data.commentUser);
	this.userLiked = ko.observable(data.userLiked);
	this.title = ko.computed(function() {
        var self = this;
        var clicks = self.likes();
		
        if(clicks < 10) {
            title = self.name();
        } else if (clicks < 20) {
            title = self.name()+" Adopt me!!";
        } else if (clicks < 30) {
            title = self.name()+"Give me Love !";
        } else {
            title = self.name()+"All Love me!";
        }
        return title;
	}, this);
	
	
}
var ViewModel = function () {
    var self = this;
	this.petList = ko.observableArray([]);
	this.inputs = ko.observable(false);

	this.setName = ko.observable();
	this.setDir = ko.observable();
	this.setLikes = ko.observable();
	this.acceptVal = ko.observable();
	this.isComment = ko.observable(false);

	this.editorIsEnable = ko.observable(false);
	this.adderIsEnable = ko.observable(false);

	this.setPet = function (clickedPet) { self.currentPet(clickedPet) };
	pets.forEach(function (petItem) {
		self.petList.push(new Pet(petItem));
	});
	this.currentPet = ko.observable(this.petList()[0]);

	// This is a View model Admin
	this.isAdmin = ko.observable(false);
	this.setAdmin = function () {
		self.isAdmin() ? self.isAdmin(false) : self.isAdmin(true);
	}

	// This is a View model likes
	this.incrementCounter = function () {
		if ((self.isAdmin() == false) && self.currentPet().userLiked() == false) { self.currentPet().userLiked(true); self.currentPet().likes(self.currentPet().likes() + 1);  }
		if (self.isAdmin()) self.currentPet().likes(self.currentPet().likes() +1);
	};

	// This is a View model from add /edit  Pet
	this.enableEditor = function () {
		self.inputs(true);
		self.editorIsEnable(true);
		self.adderIsEnable(false);
		this.setName(this.currentPet().name());
		this.setDir(this.currentPet().imgSRC());
		this.setLikes(this.currentPet().likes());
	}
	this.enableAdder = function () {
		self.inputs(true);
		self.adderIsEnable(true);
		self.editorIsEnable(false);
		this.setName('');
		this.setDir('');
		this.setLikes(0);
	}
	this.cancelEditor = function () { self.editorIsEnable(false); self.inputs(false); }
	this.cancelAdder = function () { self.adderIsEnable(false); self.inputs(false);}


	this.createNewPet = function () {
		addNewPet(self,this.petList);
		this.setName('');
		this.setDir('');
		this.setLikes(0);
	};
	this.editPet = function () {
		editActualPet(this.currentPet(),this.setName(), this.setDir(), this.setLikes());
	}
	this.elimPet = function () {
		removePet(self.currentPet(), self.petList);
		self.nextPet();
	}

	//navigaton pet
    this.nextPet = function() {
		var id=this.petList.indexOf(this.currentPet());
		self.currentPet(this.petList()[(id+1)%pets.length] )
    };
	this.afterPet = function() {
		var id=this.petList.indexOf(this.currentPet());
		if (id==0)id=pets.length;
		self.currentPet(this.petList()[(id-1)%pets.length] )
    };

	// This is a View model add comments from User's
	this.enableComment = function () {
		if (self.isComment()) self.isComment(false);
		else self.isComment(true);
	}
	this.userComment= function(){
		addNewComent(this.acceptVal(),this.currentPet().commentUser);
		this.acceptVal('');
	}
	this.removeComment = function (vari) {
		removeComment(vari, self.currentPet().commentUser);
	}

};
function removeComment(text, petCommentList) {
	var id = petCommentList.indexOf(text);
	petCommentList.splice(id, 1);
}
function addNewPet(vm,petList) {
	pets.push({
		likes: parseInt(vm.setLikes()),
		name: vm.setName(),
		imgSRC: vm.setDir(),
		imgAttrib: "",
		description: "",
		commentUser: []
	});
	petList.push(new Pet(pets[pets.length - 1]));
}
function removePet(pet, petList) {
	var id = petList.indexOf(pet);
	pets.splice(id, 1);
	petList.splice(id,1);
}
function editActualPet(pet,newName, newDirection, newLikes) {
	pet.name(newName);
	pet.imgSRC(newDirection);
	pet.likes(parseInt(newLikes));
}
function addNewComent(text, petComentList) {
	if (text != '') petComentList.push(text);
}
ko.applyBindings(new ViewModel());