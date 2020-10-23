class enemymissileclass
{
 constructor(x,y,s)
 {
   this.x=x;
   this.y=y;
   this.missile_speed=s;
 }
 
  display()
  {
  image(enemy_missile_img,this.x,this.y);  
  }
  
  move()
  {
   this.y=this.y+this.missile_speed;
  }
  
  goes_off_screen()
  {
    if (this.y > windowHeight)
    {
      return true;
    }
    else
    {
      return false;
    }
  }  

  collides(other)
  {
    if (this.y > other.y-25) 
    {
      if (this.x > other.x-25 && this.x < other.x+25)
      {
      explosion.push(new explosionclass(player.x,player.y,0,162,232));
      explosion_sound.play();      
      return true;
      }
      else
      {
      return false;
      }
    }
  }  //bracket for collides
  
}
