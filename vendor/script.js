
let i = 0;
let txt = 'i, Welcome';
// .</br>I Created This Website For Showcase All of my certificates that I\'ve earned so far.</br><b>Thank You</b>
let speed = 160; /* The speed/duration of the effect in milliseconds */


function typeWriter3() {
  if (i < txt.length) {
    document.getElementById("bio3").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter3, speed);
  } else {
    // console.log('completed');
  }
}



function typeWriter2() {
  if (i < txt.length) {
    document.getElementById("bio2").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter2, speed);
  } else {
    i = 0;
    txt = 'Thank You  ';
    document.getElementById('bio2_blink').style.visibility = "hidden";
    document.getElementById('bio3_blink').style.visibility = "visible";
    typeWriter3();
    // console.log('completed');
  }
}

function typeWriter1() {
  if (i < txt.length) {
    document.getElementById("bio1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter1, speed);
  } else {
    // document.getElementById("bio1").innerHTML = ("I'm Hrshikesh Patra <mark>CyberSecurity</mark> Professional from India  ");
    i = 0;
    txt = 'I Created This Website For Showcase All of my certificates that I\'ve earned so far.  ';
    document.getElementById('bio1_blink').style.visibility = "hidden";
    document.getElementById('bio2_blink').style.visibility = "visible";
    typeWriter2();
    // console.log('completed');
  }
}

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("head").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    i = 0;
    txt = 'I\'m Hrshikesh Patra CyberSecurity Professional from India  ';
    speed = 90;
    document.getElementById('bio1_blink').style.visibility = "visible";
    typeWriter1();
    // console.log('completed');
  }
}


function Copy_to_Clipboard(arr) {
  let certID = arr.parentNode.parentNode.parentNode.children[0].children[0].children[5].innerText;
  navigator.clipboard.writeText(certID);
  let x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("put_image");

function showModal(arr) {
  let certificate_id = arr.parentNode.parentNode.parentNode.parentNode.parentNode.id;
  let cert_img = arr.parentNode.parentNode.parentNode.parentNode.children[0].children[0].src;
  modal.style.display = "block";
  modalImg.src = cert_img;
}


// When the user clicks on <span> (x), close the modal
modal.onclick = function () {
  put_image.className += " out";
  setTimeout(function () {
    modal.style.display = "none";
    put_image.className = "modal-content";
  }, 400);

}




const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
  else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);