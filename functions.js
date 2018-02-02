
  
   function loop(box)
    {  
         var clnum = 0;
         var ctr = 1; 

         while( ctr <= 10 )
            {
                 while((clnum < 1) || (clnum > 3)) 
                   {  clnum = Math.floor(Math.random() * 10); }

                 switch(clnum)
                   {
                      case 1:
                         box.className = "one";
                         break;
                      case 2:
                         box.className = "two";
                         break;
                      case 3:
                         box.className = "three";
                         break;
                    }

                 ctr++;
                 clnum = 0;
            }
     } 

  
  function start( )
    {
            var boxs = document.querySelectorAll('input[class]');
            var msg =  document.getElementById('msg');

             for( var i = 0; i < 3; i++ )
                 {  loop( boxs[i] ); }

             if((boxs[0].className == boxs[1].className) && (boxs[1].className == boxs[2].className))
                msg.textContent = "Congratulations, you won!";
             else
                msg.textContent = "Sorry, try again";
     }   

  document.getElementById("btn").onclick = start;   