function driving(){
    const age=document.getElementById("number").value;
    if(!age){
        alert("Please Enter Your Age");
    }
    else if(age>18 && age<60){
        alert("You are Eligible for Driving License");
    }
    else if(age==18 || age==60){
        alert("You are Eligible for Learning License Only");
    }
    else{
        alert("You are Not Eligible for Diving License ");
    }
}