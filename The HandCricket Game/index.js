var notout1=true,notout2=true;


var name_1=prompt("Enter the name of the player 1 : ");
var name_2=prompt("Enter the name of the player 2 : ");
var run_1=0;
var run_2=0;

if(name_1==null){
    name_1="Player 1"
}

if(name_2==null){
    name_2="Player 2"
}

document.querySelectorAll(".left-Player")[0].innerHTML=name_1;
document.querySelectorAll(".right-Player")[0].innerHTML=name_2;
document.querySelectorAll(".left-Player")[1].innerHTML=name_1;
document.querySelectorAll(".right-Player")[1].innerHTML="---"+name_2;

function refresh_img()
{
    var num1=Math.ceil(Math.random()*6);
    var num2=Math.ceil(Math.random()*6);

    var img1="handcricket-images/"+num1+"run.png";
    document.querySelector("#left-img").setAttribute("src",img1);

    var img2="handcricket-images/"+num2+"run.png";
    document.querySelector("#right-img").setAttribute("src",img2);

    if(notout1){
        document.querySelector("#player1runs").innerHTML=run_1;
        if(num1!=num2){
            run_1+=num1;
        }
        else{
            notout1=false;
        }
        document.querySelector("#player1runs").innerHTML=run_1;
    }
    else if(notout2){
        document.querySelector("#player2runs").innerHTML=run_2;
        if(num1!=num2){
            run_2+=num2;
            if(run_1<run_2){
                notout2=false;
            }
        }
        else{
            notout2=false;
        }
        document.querySelector("#player2runs").innerHTML=run_2;
    }
    else{
        alert("The Game is Over!!");
        if(run_1>run_2){
            alert(name_1 +" Won The game!!");
        }
        else if(run_1<run_2){
            alert(name_2 +" Won The game!!");
        }
        else{
            alert("The Game was a Tie!!");
        }
    }
}
document.querySelector("#run").addEventListener("click",refresh_img);