/* Form Generator By Robin Schoors */

$j=jQuery.noConflict();

var row = 0;

function insert_row() {
  $j("tr:last").after('<tr><td><input id="label['+row+']" type="text" /></td><td><select id="input_type[0]"><option value="text">Text</option><option value="options">Options</option></select></td><td><input id="ID[0]" type="text" /></td><td><input id="value[0]" type="text" /></td><td style="text-align: center;"><a onclick="insert_row()" style="font-size:1.5em; margin:0; padding:0">+</a></td></tr>');
}

function init() {
  for(i=0;i<3;i++) {
    insert_row();
  }
}

$j(document).ready(function(){
  init();
});
