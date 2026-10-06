const toggleButton = document.getElementById('dark-toggle');

toggleButton.addEventListener('click', () => {
  if (document.body.style.backgroundColor === 'rgb(18, 18, 18)') {
    document.body.style.backgroundColor = '#ffffff';
    toggleButton.style.backgroundColor = '#ffffff';
  } else {
    document.body.style.backgroundColor = '#121212';
    toggleButton.style.backgroundColor = '#f6f6f6';
  }
});