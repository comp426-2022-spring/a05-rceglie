// Focus div based on nav button click
document.getElementById("homenav").onclick = function(){
    document.getElementById("homenav").className = "active";
    document.getElementById("singlenav").className = "";
    document.getElementById("multinav").className = "";
    document.getElementById("guessnav").className = "";

    document.getElementById("home").className = "";
    document.getElementById("single").className = "hidden";
    document.getElementById("multi").className = "hidden";
    document.getElementById("guess").className = "hidden";
};

document.getElementById("singlenav").onclick = function(){
    document.getElementById("homenav").className = "";
    document.getElementById("singlenav").className = "active";
    document.getElementById("multinav").className = "";
    document.getElementById("guessnav").className = "";

    document.getElementById("home").className = "hidden";
    document.getElementById("single").className = "";
    document.getElementById("multi").className = "hidden";
    document.getElementById("guess").className = "hidden";
};

document.getElementById("multinav").onclick = function(){
    document.getElementById("homenav").className = "";
    document.getElementById("singlenav").className = "";
    document.getElementById("multinav").className = "active";
    document.getElementById("guessnav").className = "";

    document.getElementById("home").className = "hidden";
    document.getElementById("single").className = "hidden";
    document.getElementById("multi").className = "";
    document.getElementById("guess").className = "hidden";
};

document.getElementById("guessnav").onclick = function(){
    document.getElementById("homenav").className = "";
    document.getElementById("singlenav").className = "";
    document.getElementById("multinav").className = "";
    document.getElementById("guessnav").className = "active";

    document.getElementById("home").className = "hidden";
    document.getElementById("single").className = "hidden";
    document.getElementById("multi").className = "hidden";
    document.getElementById("guess").className = "";
};

// Flip one coin and show coin image to match result when button clicked

function singleFlip(){
    console.log("flip")
    fetch('http://localhost:5000/app/flip/', {mode: 'cors'})
  		.then(function(response) {
    	    return response.json();
  		})
		.then(function(result) {
			console.log(result);
			document.getElementById("result").innerHTML = result.flip;
        })
}

// Flip multiple coins and show coin images in table as well as summary results
// Enter number and press button to activate coin flip series

// Guess a flip by clicking either heads or tails button
