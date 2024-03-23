 
 var Img =  document.getElementById("img-1")
 var img1 = document.getElementById("img-2")
 var img2 = document.getElementById("img-3")

 let link = ['./images/football-2.jpg','./images/football-1.jpg']
 let link1 = ['./images/cricket-2.jpg','./images/cricket-1.jpg']
 let link2 = ['./images/squash-3.jpg','./images/squash-1.jpg']
//  console.log(link)
 setInterval(() => {
          var random = Math.floor(Math.random() * link.length)
    Img.src = link[random]     

    var random1 = Math.floor(Math.random() * link1.length)
    img1.src = link1[random1]     

    
    var random2 = Math.floor(Math.random() * link2.length)
    img2.src = link2[random2]     
 
}, 1000);
    
// let images = ["./images/football-2.jpg","./images/football-1.jpg"];
//    let box = document.getElementById("img-1")

//    setInterval(function (){

//     let random = Math.floor(Math.random() * images.length);
//     box.src = images[random]
    

//    },1000)

     
 