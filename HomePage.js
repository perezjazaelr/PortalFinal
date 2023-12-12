document.getElementById("button1").addEventListener("click", function(){
    document.querySelector(".popup1").style.display = "flex";
})
document.querySelector(".popup1").addEventListener("click", function(){
    document.querySelector(".popup1").style.display = "none";
    })

document.getElementById("button2").addEventListener("click", function(){
    document.querySelector(".popup2").style.display = "flex";
})
document.querySelector(".popup2").addEventListener("click", function(){
    document.querySelector(".popup2").style.display = "none";
    })


var loader = document.getElementById("HP-loader");
    
        window.addEventListener("load", function () {
          setTimeout(() => {
            loader.style.display = "none";
          }, 2000);
        });

    document.getElementById("out-btn").onclick = function() {
        location.href = "login.html"; 
        
    }
