(function (window){
    var Game ={
        init: function(){
            this.c=document.getElementById("game");
            this.ctx=this.c.getContext("2d");
            this.width=this.c.width;
            this.height=this.c.height;
            this.number=6;
        },
    }
    Game.init();
    console.log(Game.number);
}(window))