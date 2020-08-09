// JavaScript source code
var cats=[
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
var Cat= function(data){
	this.likes=ko.observable(data.likes);
	this.name=ko.observable(data.name);
	this.imgSRC=ko.observable(data.imgSRC);
	this.imgAttrib=ko.observable(data.imgAttrib);
	this.description=ko.observable(data.description);
	this.commentUser = ko.observableArray(data.commentUser);
	this.acceptVal=ko.observable();
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
    this.catList = ko.observableArray([]);
	this.isAdmin=ko.observable(false);


	this.adminIsEnable=ko.computed(function(){
		var self=this;
		adminIsEnable= this.isAdmin();
		return adminIsEnable ;
	},this);
	this.admin=function(){
		this.isAdmin(true);
	}
	this.cancel=function(){
		this.isAdmin(false);
	}
	this.userComment= function(){
		if(this.acceptVal()!='')this.commentUser.push(this.acceptVal());
		this.acceptVal('');
	}
    cats.forEach(function(catItem) {
        self.catList.push( new Cat(catItem) );
    });
	this.currentCat = ko.observable( this.catList()[0] );
	self.removeComment=function(vari){
		self.currentCat().commentUser.remove(vari);
	}
	this.incrementCounter = function() {
        this.likes(this.likes() +1);
    };
	
    this.setCat = function(clickedCat) {
        self.currentCat(clickedCat)
    };
	
    this.nextCat = function() {
		var id=this.catList.indexOf(this.currentCat());
		self.currentCat(this.catList()[(id+1)%10] )
    };
	this.afterCat = function() {
		var id=this.catList.indexOf(this.currentCat());
		self.currentCat(this.catList()[(id-1)%10] )
    };

};

ko.applyBindings(new ViewModel());