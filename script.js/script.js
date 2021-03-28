function toggle(){
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');
    trailer.classList.toggle('active');
     video.currentTime = 0; // currentTime é palavra reservada para tempo atual
    video.pause();
};