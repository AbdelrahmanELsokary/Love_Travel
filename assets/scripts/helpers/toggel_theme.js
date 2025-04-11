let theme = document.getElementById('theme');
function toggelTheme() {
  let themeIcons = document.getElementById('theme');
  if (document.body.classList.contains('dark-mode')) {
    document.body.classList.remove('dark-mode');
    themeIcons.classList.remove('fa-sun');
    themeIcons.classList.add('fa-moon');
  } else {
    document.body.classList.add('dark-mode');
    themeIcons.classList.remove('fa-moon');
    themeIcons.classList.add('fa-sun');
  }
}

theme.onclick = () => {
  toggelTheme();
};
