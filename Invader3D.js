let explosion=[]; let starfield=[]; let exp_score=[];
let player; let playermissile=[]; let enemy=[]; let enemymissile=[]; 

let player_img; let enemy_img;
let song; let player_sound; let enemy_sound; let explosion_sound; 
let score=0; let hi_score=0; let extra_life; let lives=3;
let myfont; let level; let amplitude; let screen_state=0;
let sfx_vol=0.25; let music_vol=0.75; let voice_vol=1.0;

let star_scroll_init=0;

let enemy_rnd_speed=3;


function preload()
{
  player_img = loadImage('assets/player.png');
  enemy_img = loadImage('assets/enemy.png'); 
  player_missile_img = loadImage('assets/player_bullet.png'); 
  enemy_missile_img = loadImage('assets/enemy_bullet.png');
  
  myfont = loadFont ('assets/computerfont.ttf');
  
  player_sound = loadSound('assets/laser3.mp3'); 
  enemy_sound = loadSound('assets/laser1.mp3');  
  explosion_sound = loadSound('assets/explosion.wav');
  score_sound = loadSound('assets/score.mp3'); 
  lives_sound = loadSound('assets/uh_no.mp3'); 
  life_sound = loadSound('assets/score.mp3');
  
  //song = loadSound('assets/title_screen_music.mp3'); 
  //song = loadSound('assets/tunnel_sequence.mp3');
  //song = loadSound('assets/jesus_on_e.mp3');
  //song = loadSound('assets/blitz.mp3');
  song = loadSound('assets/fxfighter_sheba.mp3');


}

  
function setup()
{
  song.setVolume(music_vol);
  
  lives_sound.setVolume(voice_vol);
  score_sound.setVolume(voice_vol);    
  
  player_sound.setVolume(sfx_vol);
  enemy_sound.setVolume(sfx_vol);
  explosion_sound.setVolume(sfx_vol); 
  life_sound.setVolume(sfx_vol);
    
  createCanvas (windowWidth,windowHeight);
     
  imageMode(CENTER);
  angleMode(DEGREES);
  
  extra_life=1000;
  enemy_rnd_speed=3;
    
  player = new playerclass();
   
  for (i=0; i < 20; i++)
  {
    enemy[i] = new enemyclass();
  }

  if (star_scroll_init==0)
  {
  star_scroll_init=1;
  x=windowWidth/250;
  xpos=x;
  for (i=0; i < 250; i++)
  {
    starfield[i] = new starclass(xpos);
    xpos=xpos+x;
  }
  
  }
}


function draw()
{
    if (song.isPlaying() )
  {
  }
    else
  { 
    amplitude = new p5.Amplitude(0.900);
    amplitude.setInput(song);
    song.play();
  }
  
  
  if (score >= extra_life)
  {
    exp_score.push(new scoreclass(player.x,windowHeight/2,'Extra Life !',255,255,0));
    life_sound.play();
    lives++;
    extra_life=extra_life+1000;
    enemy_rnd_speed=enemy_rnd_speed+0.25;
  }

  
   if (screen_state === 0)
  {
    menu_screen();
  }
   
    if (screen_state === 1)
  {
    game_screen();
  }
  
   if (screen_state === 2)
  {
    end_screen(); 
  } 
  
  function game_screen()
  {
  
  level = amplitude.getLevel();
  level=level*5;
  
  background(0);
  textAlign(LEFT);
     
  textFont(myfont);

  fill(0,level*162,level*232);
  textSize(50);
  text('SCORE : '+score,25,50);
  text('LIVES : '+lives,1300,50);
  
  textAlign(CENTER);
  fill(level*155,level*155,0);
  text('HI-SCORE : '+hi_score,windowWidth/2,50);
  noStroke();
  
  
  if (lives < 1)
  {
  screen_state=2;
  //end_screen();
  }
  
  if (score > hi_score)
  {
  hi_score=score;
  }
  

///////////////EXPLODING SCORE/////////////// 

//////Move & display exploding score/////////

    for (i=exp_score.length-1; i >=0; i--)
    {
      exp_score[i].display();
      exp_score[i].move();
        
 ////Has exploding score reached MAX scale ?/////
    
    if (exp_score[i].reached_max_scale())
    {
      exp_score.splice(i,1);
    }
  }  
   
/////////////////STARFIELD//////////////////

/////////Move & display starfield///////////

   for (i=starfield.length-1; i >= 0; i--)
   {
    starfield[i].display();
    starfield[i].move();    
   }  




   
///////////////////PLAYER//////////////////

//////////Move & display player////////////
   
  player.display();
  player.move();
  
//////////////PLAYER MISSILES///////////////

///////Move & display player missiles///////

   for (i=playermissile.length-1; i >= 0; i--)
   {
    playermissile[i].display();
    playermissile[i].move();
   }
   
////Does player missiles go off screen ?////

   for (i=playermissile.length-1; i >= 0; i--)
   {
    if (playermissile[i].goes_off_screen())
    {
     playermissile.splice(i,1); 
    }
  }
  
///Does player missiles collide with enemy ?///

  for (i=playermissile.length-1; i >= 0; i--)
  {
    for (j=enemy.length-1; j >= 0; j--)
    {
      if (playermissile[i].enemycollide(enemy[j]))      
      {
        enemy.splice(j,1);
        enemy.push (new enemyclass());
        score=score+25;
 
      }
     }
    } 
  
//Does player missiles hit enemy missiles ?//

  for (i=playermissile.length-1; i >=0; i--)
  {
    for (j=enemymissile.length-1; j >=0; j--)
    {
      if (playermissile[i].missilecollide(enemymissile[j]))
      {
        enemymissile.splice(j,1);
        score=score+50;
      }
    }
  } 
  
//////////////////ENEMY///////////////////

//////////Move & display enemy////////////

  for (i=enemy.length-1; i>=0; i--)
  {
    enemy[i].display();
    enemy[i].move();
  }
  
////////Does enemy go off screen ?/////////

  for (i=enemy.length-1; i>=0; i--)
  {
    if (enemy[i].goes_off_screen())
    {
      enemy.splice(i,1);
      enemy.push (new enemyclass());      
    }
  }  
  
/////Does enemy collide with player ?/////

  for (i=enemy.length-1; i>=0; i--)
  {
    if(enemy[i].collides(player))
    {
      enemy.splice(i,1);
      enemy.push (new enemyclass());
      lives--;
      lives_sound.play();
      exp_score.push(new scoreclass(player.x,player.y-150,'Uh No !',255,255,0));
    }
  }
  
/////////////ENEMY MISSILES////////////// 

//////Move & display enemy missiles///////

  for (i=enemymissile.length-1; i>=0; i--)
  {
   enemymissile[i].display();
   enemymissile[i].move();
   
///Does enemy missile go off screen ?///
    
   if (enemymissile[i].goes_off_screen())
   {
    enemymissile.splice(i,1); 
   }
  }

//Does enemy missiles collide with player ?//
   
  for (i=enemymissile.length-1; i>=0; i--)
  {
   if (enemymissile[i].collides(player))
   {
     enemymissile.splice(i,1);
     lives--;
     lives_sound.play();
     exp_score.push(new scoreclass(player.x,player.y-150,'Uh No !',255,255,0));
          
   }
  }

////////////////EXPLOSIONS/////////////////

///////Move & display explosions//////////

   for (i=explosion.length-1; i>=0; i--)
  {
    explosion[i].display();
    explosion[i].move();
    
////Has explosion reached MAX radius ?/////
    
    if (explosion[i].reached_max_radius())
    {
      explosion.splice(i,1);
    }
  } 

 }
}

  //function mousePressed()
  //{
  //  fs = fullscreen();
  //  fullscreen(!fs);
  //}
