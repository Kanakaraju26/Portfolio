function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

 const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
 function handleDarkModeChange(e) {
   if (e.matches) {
     document.documentElement.classList.add('dark-mode');
   } else {
     document.documentElement.classList.remove('dark-mode');
   }
 }

 handleDarkModeChange(darkModeMediaQuery); 
 darkModeMediaQuery.addEventListener('change', handleDarkModeChange);