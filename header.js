window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var headhead = document.getElementById('headhead');
    var headfoot = document.getElementById('headfoot');
  
    if (window.pageYOffset > 0) {
      headhead.style.display = 'none';
      headfoot.style.display = 'flex';
      header.style.position = 'fixed';
    } else {
      headhead.style.display = 'flex';
      headhead.style.position = 'relative'
      header.style.position ='absolute'
    }
  });
  