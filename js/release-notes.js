$(document).ready(function () {
  $('.section').find('li').each(function() {
    var text = this.textContent;
    text = text.replace(/CONSQL-\d+\s*/g, '')
    this.textContent = text;
  });
});