class playermissileclass
{
  constructor()
  {
    this.x = player.x;
    this.y = player.y-35;

  }
  
  display()
  {
    image(player_missile_img,this.x,this.y);
  }
  
  move()
  {
     this.y=this.y-3;
  }
  
  goes_off_screen()
  {
    if (this.y < 0)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  
  enemycollide(other)
  {
    if (this.y < other.y+25 )
    {
      if (this.x > other.x-25 && this.x < other.x+25)
      {
      explosion.push(new explosionclass(other.x,other.y,255,0,0));
      exp_score.push(new scoreclass(other.x,other.y,25,255,0,0));
      explosion_sound.play();      
      this.y=-1;
      return true;
      }
      else
      {
      return false;
      }
    }
   }  //bracket for collides
  
   missilecollide(other)
  {
    if (this.y < other.y+25)
    {
      if (this.x > other.x-10 && this.x < other.x+10)
      {
      explosion.push(new explosionclass(other.x,other.y,255,255,0));
      exp_score.push(new scoreclass(other.x,other.y,50,255,255,0));
      explosion_sound.play();      
      this.y=-1;
      return true;
      }
      else
      {
        return false;
      }
    }
    
  }  //bracket for collides   
  
}
