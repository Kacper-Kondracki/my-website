window.addEventListener('load', () => {
  const elements = document.getElementsByClassName('preload');
  for (let index = 0; index < elements.length; index += 1) {
    const element = elements[index];
    element.classList.remove('preload');
  }
});
