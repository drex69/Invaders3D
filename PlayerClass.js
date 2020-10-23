class playerclass

{
  
  constructor()
  {
    this.x=windowWidth/2;
    this.y=windowHeight-25;
    this.movement=1;
  }
  
  display()
  {
    //player_img.resize(windowWidth/30,windowWidth/30);
    image(player_img,this.x,this.y);
  }
  
  move()
  {
   
    if (this.movement == 1)
    {    
      if (keyIsDown (LEFT_ARROW))
      {
        if (this.x < 25)
        {
        this.x=this.x;
        }
        else
        {
        this.x=this.x-6;
        }
      }
        
      if (keyIsDown (RIGHT_ARROW))
      {
        if (this.x > windowWidth-25)
        {
        this.x=this.x;
        }
        else
        {
        this.x=this.x+6;
        }
       }
      }
       
  }  //bracket for move
  
}  //bracket for class

    function keyPressed()
    {
      if (player.movement ==1)
      {
        if (keyCode == UP_ARROW)
        {
          if (playermissile.length <20)
          {
           playermissile.push(new playermissileclass());
           player_sound.play();
          }
          else
          {
          }
        }
      }
    }
