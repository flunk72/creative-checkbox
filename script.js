
function checkToggle(source) {
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  for(i=0;i<checkboxes.length; i++) {
    if(checkboxes[i] != source)
    checkboxes[i].checked = source.checked
  }
} 