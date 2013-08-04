/* Form Generator By Robin Schoors */

$j=jQuery.noConflict();

function insert_row(loop) {
  loop = parseInt(loop) || 1;
  for(i=0;i<loop;i++)
    $j("tr:last").after('<tr><td><input id="label[0]" type="text" /></td><td><select id="input_type[0]"><option value="text">Text</option><option value="options">Options</option></select></td><td><input id="ID[0]" type="text" /></td><td><input id="value[0]" type="text" /></td><td style="text-align: center;"><a onclick="insert_row()" style="font-size:1.5em; margin:0; padding:0">+</a></td></tr>');
  }
}

$j(document).ready(function(){
  insert_row(3);
});
