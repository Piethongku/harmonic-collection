const buttons = document.querySelectorAll("[data-audio]");


buttons.forEach(button => {
  button.addEventListener("click", () => {
    const audioFile = button.getAttribute("data-audio");
    const audio = new Audio(audioFile);
    audio.play();
  });
});