export function mouseMovement(){
    mySquare.onmousedown = function(event){ 
    mySquare.onmousemove = function(event){
      x=  event.clientX;
     y = event.clientY;
     x-= 10;
     y -= 10;
     mySquare.style.top = y +'px';
     mySquare.style.left = x +'px';
        console.log(11,x,y)

        mySquare.onmouseout = function(event){
        mySquare.onmousemove = 'false';
            
        }
}
}
}


// export function keyMovement(){
//     document.onkeydown = function(e){
//         if (e.code === )

//     }
// }