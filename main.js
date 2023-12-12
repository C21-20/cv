function handleOpenMenu() {
    const menu = document.querySelector('.left-section');
    const burgerIcon = document.querySelector('.burger-icon')
    burgerIcon.style.display = "none"; 
    menu.style.opacity = "1"; 
    menu.style.left = "0"; 
}

function handleCloseMenu() {
    const menu = document.querySelector('.left-section');
    const burgerIcon = document.querySelector('.burger-icon')
    burgerIcon.style.display = "flex"; 
    menu.style.opacity = "0"; 
    menu.style.left = "-400px"; 
}

// Function to check if the target element is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle the scroll event
function handleScroll() {
  const targetElement = document.querySelector('#skills');
  const progresses = document.querySelectorAll('#progress_after');


  if (isElementInViewport(targetElement)) {
        if(progresses[0].style.width !== ""){
            return
        }
        progresses.forEach(element => {
            element.style.width = Math.floor(Math.random() * (100 - 11)) + 1 + "%";
        })
  }
}

// Attach the handleScroll function to the scroll event
window.addEventListener('scroll', handleScroll);