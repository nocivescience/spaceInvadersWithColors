(function(window){
    var Game = {
        init: function(){
            this.c = document.getElementById('game');
            this.c.height = this.c.height;
            this.c.width = this.c.width;
            this.ctx = this.c.getContext('2d');
            this.color = 'rgba(20, 20, 20, .7)';
            this.bullets = [];
            this.enemies = [];
            this.particles = [];
            this.bulletIndex = 0;
            this.enemyIndex = 0;
            this.enemyBulletIndex = 0;
            this.maxParticles= 10;
            this.maxEnemies = 10;
            this.enemiesAlive = 0;
            this.currentFrame = 0;
            this.maxLives = 3;
            this.life=0;
            this.binding();
            // this.player = new Player();
            this.score = 0;
            this.paused = false;
            this.shoting = false;
            this.oneShot=false;
            this.isGameOver = false;
            this.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
            for (var i = 0; i < this.maxEnemies; i++) {
                new Enemy();
            }
            this.invincibleMode(2000);
            this.loop();
        },
        binding: function(){
            window.addEventListener('keydown', this.buttonDown)},
        buttonDown: function(e){
            if(e.key==='p'){
                Game.shooting=true;
            }
            if(e.key==='a'){
                Game.player.movingLeft=true;
            }
            if(e.key==='d'){
                Game.player.movingRight=true;
            }
        },
        random: function(min, max){
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        loop: function(){
            requestAnimationFrame.call(window, Game.loop);
        },
    };
    var Enemy=function(){
        this.width=60;
        this.height=20;
        this.x=Game.random(0,Game.c.width-this.width);
        this.y=Game.random(10,40);
        this.vy=Game.random(1,3)*.1;
        this.index=Game.enemyIndex;
        Game.enemies[Game.enemyIndex]=this;
        Game.enemyIndex++;
        this.speed=Game.random(2,3);
        this.shootingSpeed=Game.random(30,80);
        this.movingLeft=Math.random()>.5?true:false;
        this.color='lsh('+Game.random(0,360)+',60%,50%)';
    };
    Game.init();
}(window))