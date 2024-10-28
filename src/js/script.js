window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'; // Warna latar belakang saat menggulir
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0)'; // Warna latar belakang saat tidak menggulir
    }
});