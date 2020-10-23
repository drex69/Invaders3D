      function menu_screen()
     {
      background(0);
       
      textFont(myfont);
      textAlign(CENTER);
      
      level = amplitude.getLevel();
      level=level*5;
      
      //fill(level*155,level*155,0);
      //textSize(50);
      //text('HI-SCORE : '+hi_score,windowWidth/2,50);  
      
      //text (windowWidth,100,100);
      //text (windowHeight,100,150);
      
      
      fill(level*255,level*255,0);
      textSize(25);
      text('CODING BY DREX',windowWidth/2,275);      
            
      fill(0,level*162,level*232);
      textSize(100);
      text('INVADERS',windowWidth/2,350);
            
      fill(level*255,level*255,0);
      textSize(50);
      text('PRESS "S" TO START',windowWidth/2,400);
            
      //player.movement=0;
      //screen_state=0;      
      
      /////////Move & display starfield///////////

     for (i=starfield.length-1; i >= 0; i--)
     {
      starfield[i].display();
      starfield[i].move();    
     } 

    
    if(key == 's')
    { 
      
      for (i=playermissile.length-1; i >= 0; i--)
      {
       playermissile.splice(i,1); 
      }
      
      for (i=enemy.length-1; i>=0; i--)
      {
       enemy.splice(i,1);
      }

      for (i=enemymissile.length-1; i>=0; i--)
      {
       enemymissile.splice(i,1);
      }
      
      for (i=explosion.length-1; i>=0; i--)
      {
       explosion.splice(i,1);
      }      
      
      for (i=exp_score.length-1; i >=0; i--)
      {
       exp_score.splice(i,1);
      }
         
     screen_state=1;
     lives=3;
     score=0;
     setup();
     
    }    
 }     
