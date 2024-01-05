function jump() {
    window.location.href="login.html";
}

function jump2() {
    window.location.href="resort.html";
}

function jump3() {
    window.location.href="resort.html";
}

/*Booking*/
function bookFunction(){
	var i;
	var n=confirm("Do you want to book this room?");
	if (n==true){
		i="Congratulations on the success of the booking!";
        alert(i);
	}
	else{
		i="Booking failed.";
        alert(i)
	}
}

/*ticket*/
function ticketFunction(){
	var i;
	var n=confirm("Do you want to buy a child ticket?");
    
	if (n==true){
		i="Successful purchase!";
        alert(i);
	}
	else{
        var h=confirm("Do you want to buy a adult ticket?");
        if (h==true) {
            alert("Successful purchase!");
        } else {
            alert("No purchase!");
        }
	}
}

function topggleForm(){
    var container = document.querySelector('.login_container');
    container.classList.toggle('active');
}


/*activities*/
var pIndex = 1;
showPiture(pIndex);
 
function nextPicture(n) {
    showPiture(pIndex += n);
}
 
function currentOne(n) {
    showPiture(pIndex = n);
}
 
function showPiture(n) {
    var i;
    var piture = document.getElementsByClassName("slide");
    var cs = document.getElementsByClassName("c");
    if (n > piture.length) {pIndex = 1} 
    if (n < 1) {pIndex = piture.length}
    for (i = 0; i < piture.length; i++) {
        piture[i].style.display = "none"; 
    }
    for (i = 0; i < cs.length; i++) {
        cs[i].className = cs[i].className.replace(" active", "");
    }
    piture[pIndex-1].style.display = "block"; 
    cs[pIndex-1].className += " active";
}