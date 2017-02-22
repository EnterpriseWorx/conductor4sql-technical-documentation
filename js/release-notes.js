$(document).ready(function () {
  $('.rst-content').find('li').each(function() {
    var text = this.textContent;
    text = text.replace(/CONSQL-\d+\s*/g, '')
    this.textContent = text;
  });
});