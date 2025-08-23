onload = () => {
  document.body.classList.remove("container");
};

window.addEventListener("load", () => {
    const vid = document.getElementById("tiktokVid");
    
    
    vid.currentTime = 0;
    
    
    const tryPlay = () => {
      vid.play().catch(() => {
       
        setTimeout(tryPlay, 100);
      });
    };
    
    tryPlay();
  });