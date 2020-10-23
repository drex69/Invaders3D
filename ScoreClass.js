class scoreclass

{
  
  constructor(x,y,amount,r,g,b)
  {
    this.x=x;
    this.y=y;
    this.scale=10.0;
    this.amount=amount;
    this.r=r;
    this.g=g;
    this.b=b;
    this.temp_r=this.r/50;
    this.temp_g=this.g/50;
    this.temp_b=this.b/50;
    
  }
  
  display()
  {
    textAlign(CENTER);   
    fill(this.r=this.r-this.temp_r,this.g=this.g-this.temp_g,this.b=this.b-this.temp_b);
    textSize(this.scale);
    text(this.amount,this.x,this.y);
   
  }
  
  move()
  {
   this.scale=this.scale+0.75; 
  }
  
  reached_max_scale()
  {
    if (this.scale > 50)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}
