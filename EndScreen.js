      function end_screen()
     {
      background(0);
      
      level = amplitude.getLevel();
      level=level*5;
       
      textAlign(CENTER);
      
      //fill(level*155,level*155,0);
      //textSize(50);
      //text('HI-SCORE : '+hi_score,windowWidth/2,50);      
            
      fill(0,level*162,level*232);
      textSize(100);
      text('GAME OVER',windowWidth/2,350);
      
      //stroke(level*255,level*255,0);
      fill(level*255,level*255,0);
      textSize(50);
      text('PRESS "C" TO CONTINUE',windowWidth/2,400);
            
      player.movement=0;
     
/////////Move & display starfield///////////

     for (i=starfield.length-1; i >= 0; i--)
     {
      starfield[i].display();
      starfield[i].move();    
     }
   
     
     if(key == 'c')
     {
      screen_state=0;
     }
    }
 
     
