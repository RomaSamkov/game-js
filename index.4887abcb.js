window.addEventListener("load",(function(){const i=this.document.getElementById("canvas1"),s=i.getContext("2d");i.width=1280,i.height=720,s.fillStyle="white",s.lineWidth=3,s.strokeStyle="black",s.font="40px Bangers",s.textAlign="center";class t{restart(){this.collisionX=.5*this.game.width,this.collisionY=.5*this.game.height,this.spriteX=this.collisionX-.5*this.width,this.spriteY=this.collisionY-.5*this.height-100}draw(i){i.drawImage(this.image,this.frameX*this.spriteWidth,this.frameY*this.spriteHeight,this.spriteWidth,this.spriteHeight,this.spriteX,this.spriteY,this.width,this.height),this.game.debug&&(i.beginPath(),i.arc(this.collisionX,this.collisionY,this.collisionRadius,0,2*Math.PI),i.save(),i.globalAlpha=.5,i.fill(),i.restore(),i.stroke(),i.beginPath(),i.moveTo(this.collisionX,this.collisionY),i.lineTo(this.game.mouse.x,this.game.mouse.y),i.stroke())}update(){this.dx=this.game.mouse.x-this.collisionX,this.dy=this.game.mouse.y-this.collisionY;const i=Math.atan2(this.dy,this.dx);i<-2.74||i>2.74?this.frameY=6:i<-1.96?this.frameY=7:i<-1.17?this.frameY=0:i<-.39?this.frameY=1:i<.39?this.frameY=2:i<1.17?this.frameY=3:i<1.96?this.frameY=4:i<2.74&&(this.frameY=5);const s=Math.hypot(this.dy,this.dx);s>this.speedModifier?(this.speedX=this.dx/s||0,this.speedY=this.dy/s||0):(this.speedX=0,this.speedY=0),this.collisionX+=this.speedX*this.speedModifier,this.collisionY+=this.speedY*this.speedModifier,this.spriteX=this.collisionX-.5*this.width,this.spriteY=this.collisionY-.5*this.height-100,this.collisionX<this.collisionRadius?this.collisionX=this.collisionRadius:this.collisionX>this.game.width-this.collisionRadius&&(this.collisionX=this.game.width-this.collisionRadius),this.collisionY<this.game.topMargin+this.collisionRadius?this.collisionY=this.game.topMargin+this.collisionRadius:this.collisionY>this.game.height-this.collisionRadius&&(this.collisionY=this.game.height-this.collisionRadius),this.game.obstacles.forEach((i=>{let[s,t,h,e,o]=this.game.checkCollision(this,i);if(s){const s=e/t,l=o/t;this.collisionX=i.collisionX+(h+1)*s,this.collisionY=i.collisionY+(h+1)*l}}))}constructor(i){this.game=i,this.collisionX=.5*this.game.width,this.collisionY=.5*this.game.height,this.collisionRadius=30,this.speedX=0,this.speedY=0,this.dx=0,this.dy=0,this.speedModifier=5,this.spriteWidth=255,this.spriteHeight=256,this.width=this.spriteWidth,this.height=this.spriteHeight,this.spriteX,this.spriteY,this.frameX=0,this.frameY=0,this.image=document.getElementById("bull")}}class h{draw(i){i.drawImage(this.image,this.frameX*this.spriteWidth,this.frameY*this.spriteHeight,this.spriteWidth,this.spriteHeight,this.spriteX,this.spriteY,this.width,this.height),this.game.debug&&(i.beginPath(),i.arc(this.collisionX,this.collisionY,this.collisionRadius,0,2*Math.PI),i.save(),i.globalAlpha=.5,i.fill(),i.restore(),i.stroke())}update(){}constructor(i){this.game=i,this.collisionX=Math.random()*this.game.width,this.collisionY=Math.random()*this.game.height,this.collisionRadius=40,this.image=document.getElementById("obstacles"),this.spriteWidth=250,this.spriteHeight=250,this.width=this.spriteWidth,this.height=this.spriteHeight,this.spriteX=this.collisionX-.5*this.width,this.spriteY=this.collisionY-.5*this.height-70,this.frameX=Math.floor(4*Math.random()),this.frameY=Math.floor(3*Math.random())}}class e{draw(i){i.drawImage(this.image,this.spriteX,this.spriteY),this.game.debug&&(i.beginPath(),i.arc(this.collisionX,this.collisionY,this.collisionRadius,0,2*Math.PI),i.save(),i.globalAlpha=.5,i.fill(),i.restore(),i.stroke(),this.displayTimer=(.001*this.hatchTimer).toFixed(0),i.fillText(this.displayTimer,this.collisionX,this.collisionY-2.5*this.collisionRadius))}update(i){this.spriteX=this.collisionX-.5*this.width,this.spriteY=this.collisionY-.5*this.height-30,[this.game.player,...this.game.obstacles,...this.game.enemies].forEach((i=>{let[s,t,h,e,o]=this.game.checkCollision(this,i);if(s){const s=e/t,l=o/t;this.collisionX=i.collisionX+(h+1)*s,this.collisionY=i.collisionY+(h+1)*l}})),this.hatchTimer>this.hatchInterval||this.collisionY<this.game.topMargin?(this.game.hatchlings.push(new o(this.game,this.collisionX,this.collisionY)),this.markedForDeletion=!0,this.game.removeGameObjects()):this.hatchTimer+=i}constructor(i){this.game=i,this.collisionRadius=40,this.margin=2*this.collisionRadius,this.collisionX=this.margin+Math.random()*(this.game.width-2*this.margin),this.collisionY=this.game.topMargin+Math.random()*(this.game.height-this.game.topMargin-this.margin),this.collisionRadius=40,this.image=document.getElementById("egg"),this.spriteWidth=110,this.spriteHeight=135,this.width=this.spriteWidth,this.height=this.spriteHeight,this.spriteX,this.spriteY,this.hatchTimer=0,this.hatchInterval=3e3,this.markedForDeletion=!1}}class o{draw(i){i.drawImage(this.image,this.frameX*this.spriteWidth,this.frameY*this.spriteHeight,this.spriteWidth,this.spriteHeight,this.spriteX,this.spriteY,this.width,this.height),this.game.debug&&(i.beginPath(),i.arc(this.collisionX,this.collisionY,this.collisionRadius,0,2*Math.PI),i.save(),i.globalAlpha=.5,i.fill(),i.restore(),i.stroke())}update(){if(this.collisionY-=this.speedY,this.spriteX=this.collisionX-.5*this.width,this.spriteY=this.collisionY-.5*this.height-40,this.collisionY<this.game.topMargin){this.markedForDeletion=!0,this.game.removeGameObjects(),this.game.gameOver||this.game.score++;for(let i=0;i<3;i++)this.game.particles.push(new r(this.game,this.collisionX,this.collisionY,"yellow"))}[this.game.player,...this.game.obstacles,this.game.eggs].forEach((i=>{let[s,t,h,e,o]=this.game.checkCollision(this,i);if(s){const s=e/t,l=o/t;this.collisionX=i.collisionX+(h+1)*s,this.collisionY=i.collisionY+(h+1)*l}})),this.game.enemies.forEach((i=>{if(this.game.checkCollision(this,i)[0]&&!this.game.gameOver){this.markedForDeletion=!0,this.game.removeGameObjects(),this.game.lostHatchlings++;for(let i=0;i<3;i++)this.game.particles.push(new n(this.game,this.collisionX,this.collisionY,"lightgreen"))}}))}constructor(i,s,t){this.game=i,this.collisionX=s,this.collisionY=t,this.collisionRadius=30,this.image=document.getElementById("larva"),this.spriteWidth=150,this.spriteHeight=150,this.width=this.spriteWidth,this.height=this.spriteHeight,this.spriteX,this.spriteY,this.speedY=1+Math.random(),this.frameX=0,this.frameY=Math.floor(2*Math.random())}}class l{draw(i){i.drawImage(this.image,this.frameX*this.spriteWidth,this.frameY*this.spriteHeight,this.spriteWidth,this.spriteHeight,this.spriteX,this.spriteY,this.width,this.height),this.game.debug&&(i.beginPath(),i.arc(this.collisionX,this.collisionY,this.collisionRadius,0,2*Math.PI),i.save(),i.globalAlpha=.5,i.fill(),i.restore(),i.stroke())}update(){this.spriteX=this.collisionX-.5*this.width,this.spriteY=this.collisionY-this.height+40,this.collisionX-=this.speedX,this.spriteX+this.width<0&&!this.game.gameOver&&(this.collisionX=this.game.width+this.width+Math.random()*this.game.width*.5,this.collisionY=this.game.topMargin+Math.random()*(this.game.height-this.game.topMargin),this.frameY=Math.floor(4*Math.random())),[this.game.player,...this.game.obstacles].forEach((i=>{let[s,t,h,e,o]=this.game.checkCollision(this,i);if(s){const s=e/t,l=o/t;this.collisionX=i.collisionX+(h+1)*s,this.collisionY=i.collisionY+(h+1)*l}}))}constructor(i){this.game=i,this.collisionRadius=30,this.speedX=3*Math.random()+.5,this.image=document.getElementById("toads"),this.spriteWidth=140,this.spriteHeight=260,this.width=this.spriteWidth,this.height=this.spriteHeight,this.collisionX=this.game.width+this.width+Math.random()*this.game.width*.5,this.collisionY=this.game.topMargin+Math.random()*(this.game.height-this.game.topMargin),this.spriteX,this.spriteY,this.frameX=0,this.frameY=Math.floor(4*Math.random())}}class a{draw(i){i.save(),i.fillStyle=this.color,i.beginPath(),i.arc(this.collisionX,this.collisionY,this.radius,0,2*Math.PI),i.fill(),i.stroke(),i.restore()}constructor(i,s,t,h){this.game=i,this.collisionX=s,this.collisionY=t,this.color=h,this.radius=Math.floor(10*Math.random()+5),this.speedX=6*Math.random()-3,this.speedY=2*Math.random()+.5,this.angle=0,this.va=.1*Math.random()+.01,this.markedForDeletion=!1}}class r extends a{update(){this.angle+=this.va,this.collisionX+=Math.cos(this.angle)*this.speedX,this.collisionY-=this.speedY,this.collisionY<0-this.radius&&(this.markedForDeletion=!0,this.game.removeGameObjects())}}class n extends a{update(){this.angle+=.5*this.va,this.collisionX-=Math.sin(this.angle)*this.speedX,this.collisionY-=Math.cos(this.angle)*this.speedY,this.radius>.1&&(this.radius-=.05),this.radius<.2&&(this.markedForDeletion=!0,this.game.removeGameObjects())}}const c=new class{render(i,s){if(this.timer>this.interval&&(i.clearRect(0,0,this.width,this.height),this.gameObjects=[this.player,...this.eggs,...this.obstacles,...this.enemies,...this.hatchlings,...this.particles],this.gameObjects.sort(((i,s)=>i.collisionY-s.collisionY)),this.gameObjects.forEach((t=>{t.draw(i),t.update(s)})),this.timer=0),this.timer+=s,this.eggTimer>this.eggInterval&&this.eggs.length<this.maxEggs&&!this.gameOver?(this.addEgg(),this.eggTimer=0):this.eggTimer+=s,i.save(),i.textAlign="left",i.fillText("Score : "+this.score,25,85),this.debug&&i.fillText("Lost : "+this.lostHatchlings,25,130),i.restore(),this.score>=this.winningScore){let s,t;this.gameOver=!0,i.save(),i.fillStyle="rgba(0,0,0,0.5)",i.fillRect(0,0,this.width,this.height),i.fillStyle="white",i.textAlign="center",i.shadowOffsetX=4,i.shadowOffsetY=4,i.shadowColor="black",this.lostHatchlings<=5?(s="Yo-yo You win!!!",t="You are the best player!!!"):(s="Sory you lose !!!",t="You lost "+this.lostHatchlings),i.font="130px Bangers",i.fillText(s,.5*this.width,.5*this.height-20),i.font="40px Bangers",i.fillText(t,.5*this.width,.5*this.height+30),i.fillText("Final Score  - "+this.score+' If you want to try again please press "R"',.5*this.width,.5*this.height+80),i.restore()}}checkCollision(i,s){const t=i.collisionX-s.collisionX,h=i.collisionY-s.collisionY,e=Math.hypot(h,t),o=i.collisionRadius+s.collisionRadius;return[e<o,e,o,t,h]}addEgg(){this.eggs.push(new e(this))}addEnemy(){this.enemies.push(new l(this))}removeGameObjects(){this.eggs=this.eggs.filter((i=>!i.markedForDeletion)),this.hatchlings=this.hatchlings.filter((i=>!i.markedForDeletion)),this.particles=this.particles.filter((i=>!i.markedForDeletion))}restart(){this.player.restart(),this.obstacles=[],this.eggs=[],this.enemies=[],this.hatchlings=[],this.particles=[],this.mouse={x:.5*this.width,y:.5*this.height,pressed:!1},this.score=0,this.lostHatchlings=0,this.gameOver=!1,this.init()}init(){for(let i=0;i<5;i++)this.addEnemy();let i=0;for(;this.obstacles.length<this.numberOfObstacles&&i<500;){let s=new h(this),t=!1;this.obstacles.forEach((i=>{const h=s.collisionX-i.collisionX,e=s.collisionY-i.collisionY;Math.hypot(e,h)<s.collisionRadius+i.collisionRadius+150&&(t=!0)}));const e=3*s.collisionRadius;!t&&s.spriteX>0&&s.spriteX<this.width-s.width&&s.collisionY>this.topMargin+e&&s.collisionY<this.height-e&&this.obstacles.push(s),i++}}constructor(i){this.canvas=i,this.width=this.canvas.width,this.height=this.canvas.height,this.topMargin=260,this.debug=!0,this.player=new t(this),this.fps=70,this.timer=0,this.interval=1e3/this.fps,this.eggTimer=0,this.eggInterval=1e3,this.numberOfObstacles=8,this.maxEggs=10,this.obstacles=[],this.eggs=[],this.enemies=[],this.hatchlings=[],this.particles=[],this.gameObjects=[],this.score=0,this.winningScore=10,this.gameOver=!1,this.lostHatchlings=0,this.mouse={x:.5*this.width,y:.5*this.height,pressed:!1},i.addEventListener("mousedown",(i=>{this.mouse.x=i.offsetX,this.mouse.y=i.offsetY,this.mouse.pressed=!0})),i.addEventListener("mouseup",(i=>{this.mouse.x=i.offsetX,this.mouse.y=i.offsetY,this.mouse.pressed=!1})),i.addEventListener("mousemove",(i=>{this.mouse.pressed&&(this.mouse.x=i.offsetX,this.mouse.y=i.offsetY)})),window.addEventListener("keydown",(i=>{"d"==i.key?this.debug=!this.debug:"r"==i.key&&this.restart()}))}}(i);c.init(),console.log(c);let g=0;!function i(t){const h=t-g;g=t,c.render(s,h),requestAnimationFrame(i)}(0)}));
//# sourceMappingURL=index.4887abcb.js.map
