var PRIZE = 40;
var TICKET_VALUE = 10;

function listenTo(inIDs, updater){
    updater();
    for(var inID of inIDs){
        document.getElementById(inID).addEventListener("change", updater);
        document.getElementById(inID).addEventListener("blur", updater);
    }
}


// Sorta hacky way of ignoring (most) unnecessary updates of Mathjax formula
var MATH = null;
MathJax.Hub.Queue(function () {
    MATH = MathJax.Hub.getAllJax("expected-formula")[0];
});
var update_num = 0;
function updateMath(num, prized, notPrized){
    setTimeout(function(){
	if(num >= update_num && MATH != null){
	    MathJax.Hub.Queue(
		["Text", MATH,"\\frac{" + prized + "}{100}\\cdot 40 + \\frac{" + notPrized + "}{100}\\cdot 0 = " + Math.round(prized*40)/100 + "\\unicode{0x20AC}"]
	    );
	}
    }, 250);
}

function updatePrize(){
    // prize references
    var prized = document.getElementById("prized-input").value;
    var pInstances = document.getElementsByClassName("prized");
    for(p of pInstances){p.textContent = prized;}

    //not prized references
    var notPrized = 100 - prized;
    var nInstances = document.getElementsByClassName("not-prized");
    for(n of nInstances){n.textContent = notPrized;}

    // math
    MathJax.Hub.Queue([updateMath, ++update_num, prized, notPrized]);

    // conclusion
    var benefit = PRIZE*prized/100 - TICKET_VALUE;

    if(benefit > 0){
	document.getElementById("outcome").textContent  = "ganaremos " + Math.round(benefit*100)/100 + "€ de media";
	document.getElementById("decision").textContent = "debemos";
    } else if(benefit == 0){
	document.getElementById("outcome").textContent  = "nos quedamos igual";
	document.getElementById("decision").textContent = "da igual";
    } else{
	var loss = -benefit;
	document.getElementById("outcome").textContent  = "perderemos " + Math.round(loss*100)/100 + "€ de media";
	document.getElementById("decision").textContent = "no debemos";
    }
}

function updateBound(){
    function boundedExpected(bound){
	if(bound <= 0){return 0;}
	var logBound = Math.floor(Math.log(bound)/Math.log(2));
	var expectedValue = logBound + bound/2**logBound;
	return Math.min(bound, Math.round(expectedValue*100)/100);
    }

    var bound = document.getElementById("max-bound").value;
    document.getElementById("expected-value").textContent = boundedExpected(bound);
}

function updatePercentile(){
    var p = document.getElementById("percentage").value/100;
    var percentile = 2**(Math.floor(-Math.log(1-p)/Math.log(2)));
    document.getElementById("percentile").textContent = Math.round(percentile*100)/100;
}

function billGates(){
    document.getElementById("max-bound").value = 7.92*10**10;
    updateBound();
}

function worldGDP(){
    document.getElementById("max-bound").value = 13.8*10**12;
    updateBound();
}

function googol(){
    document.getElementById("max-bound").value = 10**100;
    updateBound();
}

document.addEventListener('DOMContentLoaded', function(event) {
    listenTo(["prized-input"], updatePrize);
    listenTo(["percentage"], updatePercentile);
    listenTo(["max-bound"], updateBound);

    document.getElementById("billGates").addEventListener("click",billGates);
    document.getElementById("billGates").addEventListener("touchstart",billGates);
    document.getElementById("worldGDP").addEventListener("click",worldGDP);
    document.getElementById("worldGDP").addEventListener("touchstart",worldGDP);
    document.getElementById("googol").addEventListener("click",googol);
    document.getElementById("googol").addEventListener("touchstart",googol);
});
