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
    fetch('http://localhost:5000/app/flip/')
  		.then(function(response) {
    	    return response.json();
  		})
		.then(function(result) {
			console.log(result);
			document.getElementById("singleresulttxt").innerHTML = result.flip;
            document.getElementById("singleresultimg").src = `./assets/img/${result.flip}.png`;
        })
}

// Flip multiple coins and show coin images in table as well as summary results
// Enter number and press button to activate coin flip series

const flipsForm = document.getElementById('numberform')
flipsForm.addEventListener('submit', multiFlip)

async function multiFlip(event){

    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const formDataJson = JSON.stringify(Object.fromEntries(formData))
    const options = {
        method: "POST",
        headers: {"Content-Type": 'application/json', Accept: 'application/json'},
        body: formDataJson
    }
    console.log(formDataJson)

    const flips = await fetch('http://localhost:5000/app/flip/coins/', options).then(function(response) {
        return response.json()
    })

    document.getElementById("headsnum").textContent = "Heads: " + flips.summary.heads;
    document.getElementById("tailsnum").textContent = "Tails: " + flips.summary.tails;

    document.getElementById('multiresult').innerHTML = ""
    for (var i = 0; i < flips.raw.length; i++) {
        document.getElementById('multiresult').innerHTML += `
        <div class="smallcoin">
            <img class="smallcoinimg" src="./assets/img/${flips.raw[i]}.png"></img>
            <span>${flips.raw[i]}</span>
        </div>
        `
    }
}

// Guess a flip by clicking either heads or tails button

async function guessHeads(){
    const options = {
        method: "POST",
        headers: {"Content-Type": 'application/json', Accept: 'application/json'},
        body: JSON.stringify({"guess":"heads"})
    }
    console.log(options.body)

    const result = await fetch('http://localhost:5000/app/flip/call/', options).then(function(response) {
        return response.json()
    })

    document.getElementById("guessed").textContent = "You guessed: " + result.call
    document.getElementById("actualresult").textContent = "The flip was: " + result.flip
    document.getElementById("winlose").textContent = "You " + result.result + "!"
    document.getElementById("winloseimg").src = `./assets/img/${result.result}.jpg`
    document.getElementById("winloseimg").className = ""
}

async function guessTails(){
    const options = {
        method: "POST",
        headers: {"Content-Type": 'application/json', Accept: 'application/json'},
        body: JSON.stringify({"guess":"tails"})
    }
    console.log(options.body)

    const result = await fetch('http://localhost:5000/app/flip/call/', options).then(function(response) {
        return response.json()
    })

    document.getElementById("guessed").textContent = "You guessed: " + result.call
    document.getElementById("actualresult").textContent = "The flip was: " + result.flip
    document.getElementById("winlose").textContent = "You " + result.result + "!"
    document.getElementById("winloseimg").src = `./assets/img/${result.result}.jpg`
    document.getElementById("winloseimg").className = ""
}