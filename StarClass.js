class starclass

{
  
  constructor(x)
  {
    this.x=x;
    this.y=random(1,windowHeight);//(1,700);
    this.speed=random(1,5);
  }
  
  display()
  {
    stroke (this.speed*50,this.speed*50,this.speed*50);
    rect (this.x,this.y,2,2);
    noStroke();
  }
  
  move()
  {
    if (this.y > windowHeight) //700)
    {
      this.y=0;
      this.speed=random(1,5);
    }
    else
    {
      this.y=this.y+this.speed;
    }
    
  }
  
  
}
