document.addEventListener("DOMContentLoaded", function () {




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
    easing: 'bounce',
    duration: 2000,
    from: { color: '#aaa', width: 4 },
    to: { color: '#0d6efd', width: 4 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
      circle.setText('<p>Web Apps<br></p>' + Math.round(circle.value() * 100) + ' %');
    }
  });

  webBar.text.style.fontFamily = 'Poppins, sans-serif';
  webBar.text.style.fontSize = '20px';
  webBar.text.style.textAlign = 'center';


  var mobileBar = new ProgressBar.Circle('#skill-mobile', {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 4,
    easing: 'bounce',
    duration: 1400,
    from: { color: '#aaa', width: 4 },
    to: { color: '#0d6efd', width: 4 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
      circle.setText('<p>Mobile Apps<br></p>' + Math.round(circle.value() * 100) + ' %');
    }
  });

  mobileBar.text.style.fontFamily = 'Poppins, sans-serif';
  mobileBar.text.style.fontSize = '20px';
  mobileBar.text.style.textAlign = 'center';


  var backendBar = new ProgressBar.Circle('#skill-backend', {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 4,
    easing: 'bounce',
    duration: 1400,
    from: { color: '#aaa', width: 4 },
    to: { color: '#0d6efd', width: 4 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
      circle.setText('<p>Backend<br></p>' + Math.round(circle.value() * 100) + ' %');
    }
  });

  backendBar.text.style.fontFamily = 'Poppins, sans-serif';
  backendBar.text.style.fontSize = '20px';
  backendBar.text.style.textAlign = 'center';



  var uiuxBar = new ProgressBar.Circle('#skill-uiux', {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 4,
    easing: 'bounce',
    duration: 1400,
    from: { color: '#aaa', width: 4 },
    to: { color: '#0d6efd', width: 4 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
      circle.setText('<p>UI/UX<br></p>' + Math.round(circle.value() * 100) + ' %');
    }
  });

  uiuxBar.text.style.fontFamily = 'Poppins, sans-serif';
  uiuxBar.text.style.fontSize = '20px';
  uiuxBar.text.style.textAlign = 'center';

  var cookingBar = new ProgressBar.Circle('#skill-cooking', {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 4,
    easing: 'bounce',
    duration: 1400,
    from: { color: '#aaa', width: 4 },
    to: { color: '#0d6efd', width: 4 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
      circle.setText('<p>Cooking<br></p>' + Math.round(circle.value() * 100) + ' %');
    }
  });

  cookingBar.text.style.fontFamily = 'Poppins, sans-serif';
  cookingBar.text.style.fontSize = '20px';
  cookingBar.text.style.textAlign = 'center';
// Define the options for the Intersection Observer
const options = {
  root: null, // Use the viewport as the root
  rootMargin: '0px', // No margin
  threshold: 0.5 // Trigger when 50% of the element is visible
};

// Function to animate the progress bar
function animateProgressBar(progressBar, value) {
  // Animate the progress bar
  progressBar.animate(value);
}

// Create a new Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Animate the progress bar when it becomes visible
      if (entry.target.id === 'skill-web') {
        animateProgressBar(webBar, 0.9);
      } else if (entry.target.id === 'skill-mobile') {
        animateProgressBar(mobileBar, 0.7);
      } else if (entry.target.id === 'skill-backend') {
        animateProgressBar(backendBar, 0.8);
      } else if (entry.target.id === 'skill-uiux') {
        animateProgressBar(uiuxBar, 0.6);
      } else if (entry.target.id === 'skill-cooking') {
        animateProgressBar(cookingBar, 1.0);
      }
    } else {
      // Re-observe the element when it is no longer visible
      observer.observe(entry.target);
    }
  });
}, options);

// Observe the progress bars
observer.observe(document.getElementById('skill-web'));
observer.observe(document.getElementById('skill-mobile'));
observer.observe(document.getElementById('skill-backend'));
observer.observe(document.getElementById('skill-uiux'));
observer.observe(document.getElementById('skill-cooking'));

  // ---------------- JS for Mobile Menu ------------------
  var mobileMenu = document.getElementById("mobile-menu");
  function openMenu() {
    mobileMenu.style.right = "0px";
  }

  function closeMenu() {
    mobileMenu.style.right = "-400px";
  }
});