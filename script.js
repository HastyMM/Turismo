 // Get the navigation links
 const links = document.querySelectorAll('nav a');
    
 // Add an event listener for the click event on each link
 links.forEach(link => {
   link.addEventListener('click', event => {
     // Prevent the default action of the link
     event.preventDefault();

     // Get the href attribute of the link
     const href = link.getAttribute('href');

     // Load the new page into the main content area
     fetch(href)
       .then(response => response.text())
       .then(html => {
         document.querySelector('main').innerHTML = html;
       });
   });
 });