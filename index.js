function ConvertCtoF(degreesCelsius) {
    // Your code here
    return degreesCelsius * 9/5 +32;
}

function ConvertFtoC(degreesFahrenheit) {
    // Your code here
    return (degreesFahrenheit-32) *5/9
}

function bodyLoaded() {
    // Your code here
    var btn = document.getElementById("ConvertButton");
    var far =document.querySelector("#FInput");
    var car =document.querySelector("#CInput");
    var err = document.querySelector("#ErrDiv");
    var img = document.querySelector("#WeatherImage")
    btn.addEventListener('click', function(){
    if(isNaN(car.value)){
        err.innerHTML = car.value + " is not a number";
        
    }
    else if(isNaN(far.value)){
        err.innerHTML = far.value + " is not a number";
        
    }
    else{
        if(far.value > 0){
            var val = parseFloat(far.value);
            car.value= ConvertFtoC(val);
            if(far.value<=32){
             img.src = "cold.gif";
            }
            else if(far.value>32 && far.value<=50){
                img.src="cool.gif";
            }
            else{
                img.src="warm.gif";
            }
        }
        if(car.value > 0){
            var val = parseFloat(car.value);
            far.value= ConvertCtoF(val);
            if(far.value<=32){
            img.src = "cold.gif";
            }
            else if(far.value>32 && far.value<=50){
                img.src="cool.gif";
            }
            else{
                img.src="warm.gif";
            }
        }
        
    }
    });
    
    far.addEventListener('input', function(){
        car.value = "";
        
    })
    car.addEventListener('input', function(){
        far.value ="";
    })
}