/* Form Generator By Robin Schoors */

$j=jQuery.noConflict();

function insert_row() {
  $j("tr").after('<td><input id="label[0]" type="text" /></td><td><select id="input_type[0]"><option value="text">Text</option><option value="options">Options</option></select></td><td><input id="ID[0]" type="text" /></td><td><input id="value[0]" type="text" /></td><td style="text-align: center;">+</td>');
}

$j(document).ready(function(){
  insert_row();
  
});
