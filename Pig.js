class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visiblitiy=255
  }
  display(){
    console.log(this.body.speed);
    if(this.body.speed < 3){
      super.display();
    }else{
      World.remove(world,this.body);
      push();
      this.visiblitiy=this.visiblitiy-5;
      tint(255,this.visiblitiy)
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
    }
  }

};