// Author: Pranay kumar patra
   //   * Author: PRANAY KUMAR PATRA 
   //   * Phone:- +91-9861132416
   //   * Email:- pkpatra13@gmail.com

     // note:- Don't  try to copy the code
     // ALL RIGHTS RESERVED TO pranay kumar patra


"use strict"; // js will check if you have declared any variable before using


function DoseCalculator(id, valNum) {

    //  can use .innerHTML if you're not changing the original value document.getElementById("outputMeters").innerHTML = valNum / 0.0022046;

    // RAT
    if (id == "inputRat") {
      
       document.getElementById("inputMouse").value=valNum*0.14;
       document.getElementById("inputHuman").value=valNum*56;
       document.getElementById("inputDog").value=valNum*17.8;
       document.getElementById("inputCat").value=valNum*4.2;
       document.getElementById("inputRabbit").value=valNum*3.9;
       document.getElementById("inputGp").value=valNum*1.74;
       document.getElementById("inputMonkey").value=valNum*9.2;
    }

    // Mouse
    if (id == "inputMouse")
    {
       document.getElementById("inputRat").value=valNum*7.0;
       document.getElementById("inputHuman").value=valNum*387.9;
       document.getElementById("inputDog").value=valNum*124.2;
       document.getElementById("inputCat").value=valNum*29.7;
       document.getElementById("inputRabbit").value=valNum*27.8;
       document.getElementById("inputGp").value=valNum*12.25;
       document.getElementById("inputMonkey").value=valNum*64.1;
    }
    
    
    // Human
    if (id == "inputHuman")
    {
        document.getElementById("inputRat").value=valNum*0.018;
       document.getElementById("inputMouse").value=valNum*0.0026;
       document.getElementById("inputDog").value=valNum*0.32;
       document.getElementById("inputCat").value=valNum*0.076;
       document.getElementById("inputRabbit").value=valNum*0.07;
       document.getElementById("inputGp").value=valNum*0.031;
       document.getElementById("inputMonkey").value=valNum*0.16;
    }
    

    // Dog
    if (id == "inputDog")
    {
               document.getElementById("inputRat").value=valNum*0.06;
       document.getElementById("inputMouse").value=valNum*0.008;
       document.getElementById("inputHuman").value=valNum*3.1;
       document.getElementById("inputCat").value=valNum*0.24;
       document.getElementById("inputRabbit").value=valNum*0.22;
       document.getElementById("inputGp").value=valNum*0.1;
       document.getElementById("inputMonkey").value=valNum*0.52;

    }

    // Cat
    if (id == "inputCat")
    {
              document.getElementById("inputRat").value=valNum*0.23;
       document.getElementById("inputMouse").value=valNum*0.03;
       document.getElementById("inputHuman").value=valNum*13;
       document.getElementById("inputDog").value=valNum*4.1;
       document.getElementById("inputRabbit").value=valNum*0.92;
       document.getElementById("inputGp").value=valNum*0.41;
       document.getElementById("inputMonkey").value=valNum*2.2;

    }

    // Rabbit
    if (id == "inputRabbit")
    {
              document.getElementById("inputRat").value=valNum*0.25;
       document.getElementById("inputMouse").value=valNum*0.04;
       document.getElementById("inputHuman").value=valNum*14.2;
       document.getElementById("inputDog").value=valNum*4.5;
       document.getElementById("inputCat").value=valNum*1.08;
       document.getElementById("inputGp").value=valNum*0.44;
       document.getElementById("inputMonkey").value=valNum*2.4;
    
    }

    // Gp 
    if (id == "inputGp")
    {
              document.getElementById("inputRat").value=valNum*0.57;
       document.getElementById("inputMouse").value=valNum*0.08;
       document.getElementById("inputHuman").value=valNum*31.3;
       document.getElementById("inputDog").value=valNum*10.2;
       document.getElementById("inputCat").value=valNum*2.4;
       document.getElementById("inputRabbit").value=valNum*2.25;
       document.getElementById("inputMonkey").value=valNum*5.2;
    }

    // Monkey
    if (id == "inputMonkey")
    {
              document.getElementById("inputRat").value=valNum*0.11;
       document.getElementById("inputMouse").value=valNum*0.016;
       document.getElementById("inputHuman").value=valNum*6.1;
       document.getElementById("inputDog").value=valNum*1.9;
       document.getElementById("inputCat").value=valNum*0.45;
       document.getElementById("inputRabbit").value=valNum*0.42;
       document.getElementById("inputGp").value=valNum*0.19;
    }
}

