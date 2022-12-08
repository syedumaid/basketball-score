let homeCount = 0;
let guestCount = 0;

let scoreHomeEl = document.getElementById("scoreHome");
let scoreGuestEl = document.getElementById("scoreGuest");

scoreHomeEl.textContent = homeCount;
scoreGuestEl.textContent = guestCount;

let homeLead = document.getElementById("homeLead")
let guestLead = document.getElementById("guestLead")

// for home score
function addOneHome() {
  homeCount += 1;
  scoreHomeEl.textContent = homeCount;
  leadCal()
}
function addTwoHome() {
  homeCount += 2;
  scoreHomeEl.textContent = homeCount;
  leadCal()
}
function addThreeHome() {
  homeCount += 3;
  scoreHomeEl.textContent = homeCount;
  leadCal()
}

// for guest score
function addOneGuest() {
  guestCount += 1;
  scoreGuestEl.textContent = guestCount;
  leadCal()
}
function addTwoGuest() {
  guestCount += 2;
  scoreGuestEl.textContent = guestCount;
  leadCal()
}
function addThreeGuest() {
  guestCount += 3;
  scoreGuestEl.textContent = guestCount;
  leadCal()
}

function newgame(){
    scoreHomeEl.textContent = 0
    homeCount = 0

    scoreGuestEl.textContent = 0
    guestCount = 0

    document.getElementById('homeLead').textContent = '«'
    document.getElementById('guestLead').textContent = '»'
}
function leadCal(){
    homeLead.textContent = (homeCount > guestCount)?'«':'';
    guestLead.textContent = (guestCount > homeCount)?'»':'';
}