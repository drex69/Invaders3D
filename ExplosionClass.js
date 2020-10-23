class explosionclass
{
  constructor(x,y,r,g,b)
  {
    this.x = x;
    this.y = y;
    this.radius = 50;
    this.degrees = 0;
    this.r=r;
    this.g=g;    
    this.b=b;    
    
  }

  display()
  {
    for (this.degrees=0; this.degrees < 360; this.degrees=this.degrees+10)
    {
    stroke (this.r,this.g,this.b);  
    fill (this.r,this.g,this.b);
    rect(cos(this.degrees)*this.radius+this.x,sin(this.degrees)*this.radius+this.y,3,3);
    noStroke();
    }
  }
  
  move()
  {
    this.radius=this.radius+10;
  }
  
  reached_max_radius()
  {
    if (this.radius > 500)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

}
