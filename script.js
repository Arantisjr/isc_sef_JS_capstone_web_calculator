    clear_button = document.getElementById("clear_button");
    backspace =  document.getElementById("backspace");
    mod_op = document.getElementById("mod_op");
    division_but = document.getElementById("division_but");
    button7 = document.getElementById("button-7");
    button8= document.getElementById("button-8");
    button9= document.getElementById("button-9");
    multiply = document.getElementById("multiply_but");
    button4 = document.getElementById("button-4");
    button5 = document.getElementById("button-5");
    button6 =   document.getElementById("button-6");
    minus_but= document.getElementById("minus_but");
    button1 = document.getElementById("button-1");
    button2= document.getElementById("button-2");
    button3= document.getElementById("button-3");
    add_op = document.getElementById("add_op");
    button0= document.getElementById("button-0");
    dot= document.getElementById("dot");
    equal_button = document.getElementById("equal_button");
    button_class = document.querySelectorAll(".btn");
   operators = document.querySelectorAll(".operator");



//use query selector is u want to use the for each function
button_class.forEach(function(button){
    button.addEventListener("click", function(){
      document.getElementById("display").value += button.textContent;
    });
});

operators.forEach(function(operator){
    operator.addEventListener("click", function(){
        document.getElementById("display").value += operator.textContent;
})
});

clear_button.addEventListener("click", function(){
    document.getElementById("display").value = ""
})