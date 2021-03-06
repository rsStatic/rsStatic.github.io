/* Form Generator By Robin Schoors */

$j=jQuery.noConflict();

var row = 0;

function insert_row() {
  $j("tr:last").after('<tr><td><input id="label['+row+']" name="label" type="text" /></td><td><select name="input_type" id="input_type['+row+']"><option value="text">Text</option><option value="options">Options</option></select></td><td><input name="id" id="ID['+row+']" type="text" /></td><td><input name="value" id="value['+row+']" value=" " type="text" /></td><td style="text-align: center;"><a onclick="insert_row()" style="font-size:1.5em; margin:0; padding:0; cursor:pointer">+</a></td></tr>');
  row++;
}

function init() {
  for(i=0;i<3;i++) {
    insert_row();
  }
  $j("#init").fadeOut(400);  
}

$j("#toggle_options").click(function() {
  if($j("#additional").is(":visible"))
    $j("#additional").fadeOut(300);
  else
    $j("#additional").fadeIn(300);
});

function generate() {
  var label = new Array();
  var input_type = new Array();
  var id = new Array();
  var value = new Array();
    
  $j("input[name=label]").each(function() {
    if ($j.trim($j(this).val()) != "") label.push($j.trim($j(this).val()));
  });
  
  $j("select[name=input_type]").each(function() {
    if ($j.trim($j(this).val()) != "") input_type.push($j.trim($j(this).val()));
  });
  
  $j("input[name=id]").each(function() {
    if ($j.trim($j(this).val()) != "") id.push($j.trim($j(this).val()));
  });
  
  $j("input[name=value]").each(function() {
    if ($j(this).val() != "") value.push($j(this).val());
  });
  
  var output = "";
  if ($j("#option_table").is(":checked")) output += '<table>\n';
  for (a=0;a<label.length;a++) {
    if ($j("#option_table").is(":checked")) output += '<tr>\n<td>\n';
    output += '<label for="'+ id[a] + '">' + label[a] + '</label>';
    if ($j("#option_br").is(":checked")) output += '<br />';
    output += '\n';
    if ($j("#option_table").is(":checked")) output += '</td>\n<td>\n';
    var type = input_type[a];
    if (type == "text") {
      output += '<input type="text" id="' + id[a] + '"';
      output += ' value="' + $j.trim(value[a]) +'"'
      output += '/>\n';
    } else if (input_type[a] == "options") {
      output += '<select id=' + id[a] + '>\n';
      var values = value[a].split(',');
      for (var b=0;b<values.length;b++) {
        output += '  <option value="' + $j.trim(values[b]) + '">' + $j.trim(values[b]) + '</option>\n';
      }      
      output += '</select>\n';
    }
    if ($j("#option_table").is(":checked")) output += '</td>\n</tr>';
    output += '\n';
  }
  if ($j("#option_table").is(":checked")) output += '</table>';
  
  $j("#output").text(output);
}

$j(document).ready(function(){
  init();
  generate();
});
