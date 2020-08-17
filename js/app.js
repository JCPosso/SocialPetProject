// JavaScript source code
var pets=[
	{
		likes: 0,
		name: "Athur",
		imgSRC:"img/arthur.jpg",
		imgAttrib:"Udacy",
		description:"I am so cutte",
		commentUser: ['hi'],
		userLiked: false,
		isAdopted: false
	},
	{
		likes: 0,
		name: "Sak",
		imgSRC:"img/Sak.jpg",
		imgAttrib:"Udacy",
		description:"I am so cutte",
		commentUser: ["hi", "losdsdas", "www"],
		userLiked: false,
		isAdopted: false
	},
	{
		likes: 0,
		name: "Tobias",
		imgSRC:"img/Tobias.jpg",
		imgAttrib:"Udacy",
		description:"I am so cutte",
		commentUser: ["hi", "mi"],
		userLiked: false,
		isAdopted: false
	},
	{
		likes: 0,
		name: "Tommy",
		imgSRC:"img/Tommy.jpg",
		imgAttrib:"Udacy",
		description:"I am so cutte",
		commentUser: ["hi", "losdsdas", "www"],
		userLiked: false,
		isAdopted: false
	},
	{
		likes: 0,
		name: "Krhis",
		imgSRC:"img/Krhis.jpg",
		imgAttrib:"DamianORG",
		description:"I am so cutte",
		commentUser: ["hi", "losdsdas", "www"],
		userLiked: false,
		isAdopted: false
	},
	{
		likes: 0,
		name: "Rex",
		imgSRC:"img/Rex.jpg",
		imgAttrib:"Udacy",
		description:"I am so cutte",
		commentUser: ["hi", "losdsdas", "www"],
		userLiked: false,
		isAdopted: false
	},
	{
		likes: 0,
		name: "Zlatan",
		imgSRC:"img/Zlatan.jpg",
		imgAttrib:"Udacy",
		description:"I am so cutte",
		commentUser: ["hi", "losdsdas", "www"],
		userLiked: false,
		isAdopted: false
	},
	{
		likes: 0,
		name: "fufi",
		imgSRC:"img/fufi.jpg",
		imgAttrib:"Udacy",
		description:"I am so cutte",
		commentUser: ["hi", "losdsdas", "www"],
		userLiked: false,
		isAdopted: false
	},
	{
		likes: 0,
		name: "Mishi",
		imgSRC:"img/Mishi.jpg",
		imgAttrib:"Udacy",
		description:"I am so cutte",
		commentUser: ["hi", "losdsdas", "www"],
		userLiked: false,
		isAdopted: false
	},
	{
		likes: 0,
		name: "Zeus",
		imgSRC:"img/Zeus.jpg",
		imgAttrib:"Udacy",
		description:"I am so cutte",
		commentUser: ["hi", "losdsdas", "www"],
		userLiked: false,
		isAdopted: false
	}
];
var Pet = function (data) {
	var self = this;
	this.likes = ko.observable(data.likes);
	this.name = ko.observable(data.name);
	this.imgSRC = ko.observable(data.imgSRC);
	this.imgAttrib = ko.observable(data.imgAttrib);
	this.description = ko.observable(data.description);
	this.commentUser = ko.observableArray(data.commentUser);
	this.userLiked = ko.observable(data.userLiked);
	this.isAdop = ko.observable(data.isAdopted);
	this.title = ko.computed(function () {
        var clicks = self.likes();
		
        if(clicks < 10) {
            title = self.name();
        } else if (clicks < 20) {
            title = "Im "+self.name()+" ,the best!!";
        } else if (clicks < 30) {
            title ="Im "+self.name()+ " Give me Love !";
        } else {
			title = "Im " +self.name()+ " and all Love me!";
        }
        return title;
	}, this);
	this.lks = ko.computed(function () {
		var clicks = self.likes();
		lks = clicks + " Likes";
		return lks;
	}, this);
	this.isAdopted =function () {
		if (this.isAdop()) {
			document.getElementById("imagen").style.filter = "grayscale(100%)";
		}else document.getElementById("imagen").style.filter = "grayscale(0%)";
	};
	
}
var ViewModel = function () {
	var self = this;
	this.petList = ko.observableArray([]);

	this.setPet = function (clickedPet) { self.currentPet(clickedPet); self.currentPet().isAdopted() };
	pets.forEach(function (petItem) {
		self.petList.push(new Pet(petItem));
	});
	this.currentPet = ko.observable(this.petList()[0]);
	// 
	this.incrementCounter = function () {
		if ((self.isAdmin() == false) && self.currentPet().userLiked() == false) { self.currentPet().userLiked(true); self.currentPet().likes(self.currentPet().likes() + 1); }
		if (self.isAdmin()) self.currentPet().likes(self.currentPet().likes() + 1);
	};
	// observers for each pet data
	this.setName = ko.observable();
	this.setDir = ko.observable();
	this.setLikes = ko.observable();
	this.acceptVal = ko.observable();
	this.isComment = ko.observable(false);
	// enable or disable Admin mode
	this.isAdmin = ko.observable(false);
	this.setAdmin = function () {
		self.isAdmin() ? self.isAdmin(false) : self.isAdmin(true);
	}
	//observers for pet editor
	this.inputs = ko.observable(false);
	this.editorIsEnable = ko.observable(false);
	this.adderIsEnable = ko.observable(false);
	// edit Pet 
	this.enableEditor = function () {
		self.inputs(true);
		self.editorIsEnable(true);
		self.adderIsEnable(false);
		this.setName(this.currentPet().name());
		this.setDir(this.currentPet().imgSRC());
		this.setLikes(this.currentPet().likes());
	}
	this.editPet = function () {
		editActualPet(this.currentPet(), this.setName(), this.setDir(), this.setLikes());
	}
	this.cancelEditor = function () { self.editorIsEnable(false); self.inputs(false); }
	// add Pet
	this.enableAdder = function () {
		self.inputs(true);
		self.adderIsEnable(true);
		self.editorIsEnable(false);
		this.setName('');
		this.setDir('');
		this.setLikes(0);
	}
	this.createNewPet = function () {
		addNewPet(self,this.petList);
		this.setName('');
		this.setDir('');
		this.setLikes(0);
	};
	this.cancelAdder = function () { self.adderIsEnable(false); self.inputs(false); }
	//remove Pet
	this.elimPet = function () {
		removePet(self.currentPet(), self.petList);
		self.nextPet();
	}
	//navigaton pet
    this.nextPet = function() {
		var id=this.petList.indexOf(this.currentPet());
		self.currentPet(this.petList()[(id + 1) % pets.length] );
		self.currentPet().isAdopted();
    };
	this.afterPet = function() {
		var id=this.petList.indexOf(this.currentPet());
		if (id==0)id=pets.length;
		self.currentPet(this.petList()[(id - 1) % pets.length]);
		self.currentPet().isAdopted();
    };
	// This is a View model comments from User's
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
	//Enable or disable adopted tag
	this.adopted = function () {
		self.currentPet().isAdop() ? self.currentPet().isAdop(false) : self.currentPet().isAdop(true);
		self.currentPet().isAdopted();
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
		commentUser: [],
		userLiked: false
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
// jQuery from navigation bar 
$(document).ready(function () {
	$('#side li a ').first().addClass("active");
	$('#side li a').click(function () { 
		$('#side li a ').removeClass("active");
		$(this ).toggleClass("active");
	});
	$('.right').click(function () {
		if ($('.active').parent().next().length == 0) {
			$('#side li a ').first().addClass("active");
			$('.active').last().removeClass('active');
		}
		else {
			$('.active').parent().next().children().toggleClass('active');
			$('.active').first().removeClass('active');
		}
	});
	$('.left').click(function () {
		if ($('.active').parent().prev().length == 0) {
			$('#side li a ').last().addClass("active");
			$('.active').first().removeClass('active');
		} else {
			$('.active').parent().prev().children().toggleClass('active');
			$('.active').last().removeClass('active');
		}
	});
}); 