// Open Project Tabs

function openProject(evt, projectType) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(projectType).style.display = "block";
  evt.currentTarget.className += " active";
}

// Flashlight Cursor

	function update(e){
  var x = e.clientX || e.touches[0].clientX
  var y = e.clientY || e.touches[0].clientY

  document.documentElement.style.setProperty('--cursorX', x + 'px')
  document.documentElement.style.setProperty('--cursorY', y + 'px')
}

document.addEventListener('mousemove',update)
document.addEventListener('touchmove',update)

// Change Buttons on the Homepage Hero
var url = "about.html";

function heroBtn(id) {
if(id == 0){
document.getElementById("btn1").innerHTML = "Learn More";
//document.getElementById("btn1").href = "about.html";    
// document.getElementById("btn1").style.display = "block";
// document.getElementById("btn2").style.display = "none";
// document.getElementById("btn3").style.display = "none";
}else if(id == 1){
document.getElementById("btn1").innerHTML = "View My Work";
//document.getElementById("btn1").href = "projects.html";    
// document.getElementById("btn2").style.display = "block";
// document.getElementById("btn1").style.display = "none";
// document.getElementById("btn3").style.display = "none";
}else if(id == 2){
document.getElementById("btn1").innerHTML = "Reach Out";
//document.getElementById("btn1").href = "contacts.html";    
// document.getElementById("btn3").style.display = "block";
// document.getElementById("btn2").style.display = "none";
// document.getElementById("btn1").style.display = "none";
}
}

//document.getElementById("btn1").innerHTML = "Learn More"; 
//document.getElementById("btn1").href="about.html";  

// Delay before Redirecting
function delayRedirect(event, delayTime) {
        event.preventDefault();

        setTimeout(function() {
            window.location.href = url; 
        }, delayTime);
    }

// Audio for Buttons and FX...

	// const aud = new Audio();
	// aud.src = "audio/clap.wav";
  const aud = new Audio();
  aud.src = "audio/click.wav";
  const aud11 = new Audio();
  aud11.src = "audio/nav1.wav";
  const aud12 = new Audio();
  aud12.src = "audio/nav2.wav";
  const aud13 = new Audio();
  aud13.src = "audio/nav3.wav";
  const aud14 = new Audio();
  aud14.src = "audio/nav4.wav";
  const aud2 = new Audio();
  aud2.src = "audio/project.wav";

    function playSound(soundId) {
    const sound = document.getElementById(soundId);
    sound.play();
  }

// Year on the Footer Section

new Date().getFullYear()
document.getElementById("year").innerHTML = new Date().getFullYear();