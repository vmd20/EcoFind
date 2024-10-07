// Funcionalidad para los botones de navegación
document.getElementById('map-button').addEventListener('click', function() {
    alert('Redirigiendo al mapa...');
});

document.getElementById('profile-button').addEventListener('click', function() {
    alert('Redirigiendo a tu perfil...');
});

document.getElementById('community-button').addEventListener('click', function() {
    alert('Redirigiendo a la comunidad...');
});
document.getElementById('map-button').addEventListener('click', function() {
    window.location.href = 'https://www.google.com/maps';
});
document.getElementById('profile-button').addEventListener('click', function() {
    window.location.href = 'profile.html';
});
document.getElementById('community-button').addEventListener('click', function() {
    window.location.href = 'community.html';
});
document.getElementById('map-button').addEventListener('click', function() {
    location.replace('https://www.google.com/maps');
});

document.getElementById('profile-button').addEventListener('click', function() {
    location.replace('profile.html');
});

document.getElementById('community-button').addEventListener('click', function() {
    location.replace('community.html');
});
