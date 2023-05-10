var typingElement = document.querySelector(".typing-text");
var typeArray = ["a Software Engineer 👨‍💻", "from Ghana, West Africa 🇬🇭", "studying Computer Science at NYU 💜", "graduating in December 2024 🎓", "looking for full-time opportunities 💰"];
var index = 0,
  isAdding = true,
  typeIndex = 0;

function playAnim() {
  setTimeout(
    function () {
      typingElement.innerText = typeArray[typeIndex].slice(0, index);
      // If typing
      if (isAdding) {
        if (index >= typeArray[typeIndex].length) {
          isAdding = false;
          // If text typed completely, wait 2s before starting to remove it.
          setTimeout(function () {
            playAnim();
          }, 2000);
          return;
        } else {
          // Continue to typing text by increasing index
          index++;
        }
      } else {
        // If removing
        if (index === 0) {
          isAdding = true;
          //If text removed completely, move on to next text by increasing typeIndex
          typeIndex++;
          if (typeIndex >= typeArray.length) {
            // Turn to beginning when reached to last text
            typeIndex = 0;
          }
        } else {
          // Continue to removing text by decreasing index
          index--;
        }
      }
      // Call the function always
      playAnim();
    },

    /* 
      If typing text, call it every 120ms
      If removing text, call it every 60ms
      Type slower, remove faster
    */
    isAdding ? 120 : 60
  );
}

// Start typing text
playAnim();

//---------------- Progress Bar for Skills------------------

var webBar = new ProgressBar.Circle('#skill-web', {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  from: { color: '#aaa', width: 4 },
  to: { color: '#0d6efd', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);
    circle.setText('<p>Web Apps<br></p>' + Math.round(circle.value() * 100) + ' %');
  }
});

webBar.text.style.fontFamily = 'Poppins, sans-serif';
webBar.text.style.fontSize = '20px';
webBar.text.style.textAlign = 'center';

webBar.animate(0.9);  // Number from 0.0 to 1.0


// ---------------- JS for Mobile Menu ------------------
var mobileMenu = document.getElementById("mobile-menu");
function openMenu() {
    mobileMenu.style.right = "0px";
}

function closeMenu() {
    mobileMenu.style.right = "-400px";
}