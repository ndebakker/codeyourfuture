let h2 = document.getElementById('h2');
h2.style.color = 'red';
h2.style.fontSize = '4em';
document.addEventListener('click'),
function (event) {
	if (!event.target.matches('.click-me')) return;
}, false



function myOnClickFn() {
	document.location.href = "/ExpeditieJava.html";
}


function AlertIt() {
var answer = confirm ("Hi, leuk dat je contact probeert op te nemen! Helaas zijn we momenteel niet bereikbaar omdat we van onze welverdiende vakantie genieten:) Mocht je toch vragen hebben kunt u Vincent berichten (altijd bereikbaar via discord voor al uw vragen, feesten en partijen) ")
if (answer)
window.location="/index.html";
}


//console.log('click');