var boxes = document.getElementsByClassName("square");

var winPattern = [

[1,2,3],
[4,5,6],
[7,8,9],
[1,5,9],
[3,5,7],
[1,4,7],
[2,5,8],
[3,6,9]


]


for (var i = 0.; i <boxes.length; i++) {
  // console.log(boxes)

  // console.log(boxes[i])

      boxes[i].addEventListener('click', function(event){
        console.log("listner has been fired! div", event.target)



        if (event.target.innerHTML ==="") {

          // console.log(true)

          event.target.innerHTML=("X")
          // while(true){
          //   if (true) {}

          // }

          boxes[Math.floor(Math.random()*9)].innerHTML = ("O")



        }else{
          console.log(false)
        }


        // console.log(event.target)

    }); 



}