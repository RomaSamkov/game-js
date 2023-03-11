window.addEventListener("load",(function(){const i=this.document.getElementById("canvas1"),s=i.getContext("2d");i.width=1280,i.height=720,s.fillStyle="white",s.lineWidth=3,s.strokeStyle="white";class t{draw(i){i.drawImage(this.image,this.frameX*this.spriteWidth,this.frameY*this.spriteHeight,this.spriteWidth,this.spriteHeight,this.spriteX,this.spriteY,this.width,this.height),this.game.debug&&(i.beginPath(),i.arc(this.collisionX,this.collisionY,this.collisionRadius,0,2*Math.PI),i.save(),i.globalAlpha=.5,i.fill(),i.restore(),i.stroke(),i.beginPath(),i.moveTo(this.collisionX,this.collisionY),i.lineTo(this.game.mouse.x,this.game.mouse.y),i.stroke())}update(){this.dx=this.game.mouse.x-this.collisionX,this.dy=this.game.mouse.y-this.collisionY;const i=Math.atan2(this.dy,this.dx);i<-2.74||i>2.74?this.frameY=6:i<-1.96?this.frameY=7:i<-1.17?this.frameY=0:i<-.39?this.frameY=1:i<.39?this.frameY=2:i<1.17?this.frameY=3:i<1.96?this.frameY=4:i<2.74&&(this.frameY=5);const s=Math.hypot(this.dy,this.dx);s>this.speedModifier?(this.speedX=this.dx/s||0,this.speedY=this.dy/s||0):(this.speedX=0,this.speedY=0),this.collisionX+=this.speedX*this.speedModifier,this.collisionY+=this.speedY*this.speedModifier,this.spriteX=this.collisionX-.5*this.width,this.spriteY=this.collisionY-.5*this.height-100,this.collisionX<this.collisionRadius?this.collisionX=this.collisionRadius:this.collisionX>this.game.width-this.collisionRadius&&(this.collisionX=this.game.width-this.collisionRadius),this.collisionY<this.game.topMargin+this.collisionRadius?this.collisionY=this.game.topMargin+this.collisionRadius:this.collisionY>this.game.height-this.collisionRadius&&(this.collisionY=this.game.height-this.collisionRadius),this.game.obstacles.forEach((i=>{let[s,t,h,e,o]=this.game.checkCollision(this,i);if(s){const s=e/t,l=o/t;this.collisionX=i.collisionX+(h+1)*s,this.collisionY=i.collisionY+(h+1)*l}}))}constructor(i){this.game=i,this.collisionX=.5*this.game.width,this.collisionY=.5*this.game.height,this.collisionRadius=30,this.speedX=0,this.speedY=0,this.dx=0,this.dy=0,this.speedModifier=5,this.spriteWidth=255,this.spriteHeight=255,this.width=this.spriteWidth,this.height=this.spriteHeight,this.spriteX,this.spriteY,this.frameX=0,this.frameY=0,this.image=document.getElementById("bull")}}class h{draw(i){i.drawImage(this.image,this.frameX*this.spriteWidth,this.frameY*this.spriteHeight,this.spriteWidth,this.spriteHeight,this.spriteX,this.spriteY,this.width,this.height),this.game.debug&&(i.beginPath(),i.arc(this.collisionX,this.collisionY,this.collisionRadius,0,2*Math.PI),i.save(),i.globalAlpha=.5,i.fill(),i.restore(),i.stroke())}constructor(i){this.game=i,this.collisionX=Math.random()*this.game.width,this.collisionY=Math.random()*this.game.height,this.collisionRadius=40,this.image=document.getElementById("obstacles"),this.spriteWidth=250,this.spriteHeight=250,this.width=this.spriteWidth,this.height=this.spriteHeight,this.spriteX=this.collisionX-.5*this.width,this.spriteY=this.collisionY-.5*this.height-70,this.frameX=Math.floor(4*Math.random()),this.frameY=Math.floor(3*Math.random())}}const e=new class{render(i){this.obstacles.forEach((s=>s.draw(i))),this.player.draw(i),this.player.update()}checkCollision(i,s){const t=i.collisionX-s.collisionX,h=i.collisionY-s.collisionY,e=Math.hypot(h,t),o=i.collisionRadius+s.collisionRadius;return[e<o,e,o,t,h]}init(){let i=0;for(;this.obstacles.length<this.numberOfObstacles&&i<500;){let s=new h(this),t=!1;this.obstacles.forEach((i=>{const h=s.collisionX-i.collisionX,e=s.collisionY-i.collisionY;Math.hypot(e,h)<s.collisionRadius+i.collisionRadius+150&&(t=!0)}));const e=3*s.collisionRadius;!t&&s.spriteX>0&&s.spriteX<this.width-s.width&&s.collisionY>this.topMargin+e&&s.collisionY<this.height-e&&this.obstacles.push(s),i++}}constructor(i){this.canvas=i,this.width=this.canvas.width,this.height=this.canvas.height,this.topMargin=260,this.debug=!0,this.player=new t(this),this.numberOfObstacles=8,this.obstacles=[],this.mouse={x:.5*this.width,y:.5*this.height,pressed:!1},i.addEventListener("mousedown",(i=>{this.mouse.x=i.offsetX,this.mouse.y=i.offsetY,this.mouse.pressed=!0})),i.addEventListener("mouseup",(i=>{this.mouse.x=i.offsetX,this.mouse.y=i.offsetY,this.mouse.pressed=!1})),i.addEventListener("mousemove",(i=>{this.mouse.pressed&&(this.mouse.x=i.offsetX,this.mouse.y=i.offsetY)})),window.addEventListener("keydown",(i=>{"d"==i.key&&(this.debug=!this.debug),console.log(this.debug)}))}}(i);e.init(),console.log(e),function t(){s.clearRect(0,0,i.width,i.height),e.render(s),requestAnimationFrame(t)}()}));
//# sourceMappingURL=index.d374c7ab.js.map
