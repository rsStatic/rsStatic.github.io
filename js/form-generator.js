/* Form Generator By Robin Schoors */

$j=jQuery.noConflict();

$j(document).ready(function(){
  alert('ready');
  for(i=1;i<4;i++){
    alert('Here we go! Looping nr: ' + i);
    $j("tr:last-of-type").append('<td><input id="label[0]" type="text" /></td><td><select id="input_type[0]"><option value="text">Text</option><option value="options">Options</option></select></td><td><input id="ID[0]" type="text" /></td><td><input id="value[0]" type="text" /></td><td style="text-align: center;">+</td>');
  }
});