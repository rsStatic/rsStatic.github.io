/* Form Generator By Robin Schoors */

$j=jQuery.noConflict();

var row = 0;

function insert_row() {
  $j("tr:last").after('<tr><td><input id="label['+row+']" name="label" type="text" /></td><td><select name="input_type" id="input_type['+row+']"><option value="text">Text</option><option value="options">Options</option></select></td><td><input name="id" id="ID['+row+']" type="text" /></td><td><input id="value['+row+']" type="text" /></td><td style="text-align: center;"><a onclick="insert_row()" style="font-size:1.5em; margin:0; padding:0">+</a></td></tr>');
  row++;
}

function init() {
  for(i=0;i<3;i++) {
    insert_row();
  }
}

function generate() {
  var label = new Array();
  var input_type = new Array();
  var id = new Array();
  var value = new Array();
  
  $j("input[name=label]").each(function() {
    label.push($j(this).val());
  });
  
  $j("select[name=input_type]").each(function() {
    input_type.push($j(this).val());
  });
  
  $j("input[name=id]").each(function() {
    id.push($j(this).val());
  });
  
  $j("input[name=value]").each(function() {
    value.push($j(this).val());
  });
  
  console.log("id:" + id[1] + "value:" + value[1]);
}

$j(document).ready(function(){
  init();
  generate();
});
