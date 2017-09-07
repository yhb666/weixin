 var con = document.getElementsByClassName("con");
 var orign = document.getElementsByClassName("div-img");
 var flag = true;
 var speed = 0;
 var num = 0;
 var timer = "";
 var renderData = "";
 var that = this;
 for (var i = 0; i < con.length; i++) {
     con[i].onclick = function() {
         var a = this.children[1];
         var img1 = this.children[0];
         var imgs = img1.children;
         if (flag == false) {
             a.pause();
             clearInterval(timer);
             for (var j = 0; j < imgs.length; j++) {
                 imgs[j].className = "";
             }
             imgs[0].className = "active";
             flag = true;
             console.log("暂停");
         } else {
             // console.log(this.children[1]);
             for (var i = 0; i < con.length; i++) {
                 audio[i].pause();
             }
             timer = setInterval(function() {
                 for (var i = 0; i < audio.length; i++) {
                     if (audio[i].ended) {
                         clearInterval(timer)
                         for (var j = 0; j < imgs.length; j++) {

                             imgs[j].className = "";
                         }
                         imgs[num].className = "active";
                     }
                 }

                 num++;
                 if (num > imgs.length - 1) {
                     num = 0;
                 }

                 for (var j = 0; j < imgs.length; j++) {

                     imgs[j].className = "";
                 }
                 imgs[num].className = "active";

             }, 500)
             a.play();
             a.currentTime = 0;
             flag = false;
             console.log("播放")
         }
     }
 }