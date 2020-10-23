class enemyclass
{
  
  constructor()
  {
    this.x=random(100,windowWidth-100);
    this.y=random(-250,-750);
    
    this.trigger=random(25,500);
    //this.enemy_speed=random(3,5);
    this.enemy_speed=random(enemy_rnd_speed,enemy_rnd_speed+2);
    this.missile_speed=this.enemy_speed+3;
    
  }
  
  display()
  {
    image(enemy_img,this.x,this.y);
  }

  
  move()
  {
    this.y=this.y+this.enemy_speed;
             
    if (this.y > this.trigger)
    {
    //enemy_sound.play();
    enemymissile.push(new enemymissileclass(this.x,this.y,this.missile_speed));
    this.trigger=1000;
    }
  }  //bracket for move
  
  
  goes_off_screen()
  {
    if (this.y > windowHeight+50)
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
    if (this.y > other.y-50 && this.y < other.y+50)
    {
      if (this.x > other.x-50 && this.x < other.x+50)
      {
      explosion.push(new explosionclass(other.x,other.y,0,162,232));
      explosion_sound.play();
      return true;
      }
      else
      {
      return false;
      }
    }
  }  //bracket for collides
   
}  //bracket for class
