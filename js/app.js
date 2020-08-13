// JavaScript source code
var pets=[
	{
		likes: 0,
		name: "Athur",
		imgSRC:"img/arthur.jpg",
		imgAttrib:"Udacy",
		description:"I am so cutte",
		commentUser:['hi']
	},
	{
		likes: 0,
		name: "Sak",
		imgSRC:"img/Sak.jpg",
		imgAttrib:"Udacy",
		description:"I am so cutte",
		commentUser:["hi","losdsdas","www"]
	},
	{
		likes: 0,
		name: "Tobias",
		imgSRC:"img/Tobias.jpg",
		imgAttrib:"Udacy",
		description:"I am so cutte",
		commentUser:["hi","mi"]
	},
	{
		likes: 0,
		name: "Tommy",
		imgSRC:"img/Tommy.jpg",
		imgAttrib:"Udacy",
		description:"I am so cutte",
		commentUser:["hi","losdsdas","www"]
	},
	{
		likes: 0,
		name: "Krhis",
		imgSRC:"img/Krhis.jpg",
		imgAttrib:"DamianORG",
		description:"I am so cutte",
		commentUser:["hi","losdsdas","www"]
	},
	{
		likes: 0,
		name: "Rex",
		imgSRC:"img/Rex.jpg",
		imgAttrib:"Udacy",
		description:"I am so cutte",
		commentUser:["hi","losdsdas","www"]
	},
	{
		likes: 0,
		name: "Zlatan",
		imgSRC:"img/Zlatan.jpg",
		imgAttrib:"Udacy",
		description:"I am so cutte",
		commentUser:["hi","losdsdas","www"]
	},
	{
		likes: 0,
		name: "fufi",
		imgSRC:"img/fufi.jpg",
		imgAttrib:"Udacy",
		description:"I am so cutte",
		commentUser:["hi","losdsdas","www"]
	},
	{
		likes: 0,
		name: "Mishi",
		imgSRC:"img/Mishi.jpg",
		imgAttrib:"Udacy",
		description:"I am so cutte",
		commentUser:["hi","losdsdas","www"]
	},
	{
		likes: 0,
		name: "Zeus",
		imgSRC:"img/Zeus.jpg",
		imgAttrib:"Udacy",
		description:"I am so cutte",
		commentUser:["hi","losdsdas","www"]
	}
];
var Pet= function(data){
	this.likes=ko.observable(data.likes);
	this.name=ko.observable(data.name);
	this.imgSRC=ko.observable(data.imgSRC);
	this.imgAttrib=ko.observable(data.imgAttrib);
	this.description=ko.observable(data.description);
	this.commentUser = ko.observableArray(data.commentUser);
	
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
	var cont =1;
	this.petList = ko.observableArray([]);
	// This is a View model Admin
	this.isAdmin = ko.observable(false);

	this.adminIsEnable = ko.computed(function () {
		adminIsEnable = this.isAdmin();
		return adminIsEnable;
	}, this);

	this.admin = function () {
		this.isAdmin(true);
	}

	this.cancel = function () {
		this.isAdmin(false);
	}

	// This is a View model Pet
	this.setPet = function(clickedPet) {self.currentPet(clickedPet)};
	
	pets.forEach(function(petItem) {
        self.petList.push( new Pet(petItem) );
    });
	
	self.removeComment=function(vari){
		self.currentPet().commentUser.remove(vari);
	}
	
	this.incrementCounter = function () {
		this.likes(this.likes() +1);
	};

	
	// This is a View model from add Pet
	this.currentPet = ko.observable(this.petList()[0]);

	this.setName = ko.observable();
	this.setDir = ko.observable();
	this.setLikes = ko.observable();
	this.acceptVal = ko.observable();


	this.editorIsEnable = ko.observable(false);
	this.adderIsEnable = ko.observable(false);

	this.enableEditor = function () { self.editorIsEnable(true); this.setEditPet(); self.adderIsEnable(false); }
	this.enableAdder = function () {
		self.adderIsEnable(true);
		self.editorIsEnable(false);
		this.setName('');
		this.setDir('');
		this.setLikes(0);
	}

	this.cancelEditor = function () { self.editorIsEnable(false); }
	this.cancelAdder = function () { self.adderIsEnable(false); }

	this.setEditPet = function () {
		this.setName(this.currentPet().name());
		this.setDir(this.currentPet().imgSRC());
		this.setLikes(this.currentPet().likes());
	}
	this.editPet = function () {
		this.currentPet().name(this.setName());
		this.currentPet().imgSRC(this.setDir());
		this.currentPet().likes(parseInt(this.setLikes()));
	}
	this.addPet = function () {

		pets.push({
			likes: parseInt(this.setLikes()),
			name: this.setName(),
			imgSRC: this.setDir(),
			imgAttrib: "",
			description: "",
			commentUser: []
		});
		this.petList.push(new Pet(pets[pets.length - 1]));
		this.setName('');
		this.setDir('');
		this.setLikes(0);
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
	this.isComment = ko.observable(false);
	this.enableComment = function () {
		if (self.isComment()) self.isComment(false);
		else self.isComment(true);
	}
	this.commentIsEnable = ko.computed(function () {
		commentIsEnable = this.isComment();
		return commentIsEnable;
	}, this);

	// This is a View model comments from User's
	this.userComment= function(){
		if(this.acceptVal()!='')self.currentPet().commentUser.push(this.acceptVal());
		this.acceptVal('');
	}

};

ko.applyBindings(new ViewModel());