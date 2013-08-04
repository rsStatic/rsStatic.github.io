/* Form Generator By Robin Schoors */

$j=jQuery.noConflict();

var row = 0;

function insert_row() {
  $j("tr:last").after('<tr><td><input id="label['+row+']" type="text" /></td><td><select id="input_type['+row+']"><option value="text">Text</option><option value="options">Options</option></select></td><td><input id="ID['+row+']" type="text" /></td><td><input id="value['+row+']" type="text" /></td><td style="text-align: center;"><a onclick="insert_row()" style="font-size:1.5em; margin:0; padding:0">+</a></td></tr>');
  row++;
}

function init() {
  for(i=0;i<3;i++) {
    insert_row();
  }
}

function generate() {
  $j("td").each(function() {
    console.log("each function");
  });
  //$j("#form_output").append(for (var i in ));
}

$j(document).ready(function(){
  init();
  generate();
});
