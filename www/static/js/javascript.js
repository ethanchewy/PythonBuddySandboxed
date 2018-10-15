// Created by Ethan Chiu 2016
// Updated August 4, 2018 for Python 3
// Updated October, 2018 for Dockerized version

function find_error(id) {
	$.ajax({
		'url':'./static/pylint_errors.txt',
    'success': function(data){
			let location = data.indexOf(id.toString());
			if (location >= 0) {
				search_text = data.slice(location);
				lines = search_text.split(/\n/);
				error_message = []
				let l;
				for (var i =0; i < lines.length; i++) {
					l = lines[i];
						if (l.startsWith(':')){
							full_message = error_message.join("")
							replaced = id+"):"
							full_message = full_message.replace(replaced, "")
							full_message = full_message.replace("Used", "Occurs")
							return full_message
						}
						error_message.push(l);
				}
			} else {
				return "No information at the moment";
			}
		}
	});
  return "No information at the moment"
}

function format_error(error) {
  if(error == "" || error==null) {
    return null;
  }

  let list_words = error.split(" ");

  if(list_words.length < 3){
    return null;
  }

  if (error.includes("Your code has been rated at")){
    return null;
  }

  let line_num = error.split(":")[1]

  let error_yet = false;
  let message_yet = false;
  let first_time = true;
  let i = 0;
  let full_message = "";
	let error_code = null;
	let error_string = null;
  // error_code=None
  length = list_words.length

	error_code = list_words[1].slice(0,-1);
	full_message = list_words.slice(2, length-1).join(" ");
	error_string = list_words[length-1].substring(1,list_words[length-1].length-1);

  error_info = find_error(error_code);

  return {
      "code": error_code,
      "error": error_string,
      "message": full_message,
      "line": line_num,
      "error_info": error_info,
  }

}

function process_output(code) {
  let errors_list = code.split(/\n/);
  if (errors_list[1].includes("--------------------------------------------------------------------") &&
  errors_list[2].includes("Your code has been rated at") && !errors_list[0].includes("module")){
    return None
  }

  errors_list.shift();

  pylint_dict = [];

  for(let i = 0; i<errors_list.length; i++) {
    pylint_dict.push(format_error(errors_list[i]));
  }

	return pylint_dict;

}

$(document).ready(function(){
	//Pulls info from AJAX call and sends it off to codemirror's update linting
	//Has callback result_cb
	// var socket = io.connect('http://' + document.domain + ':' + location.port + '/check_disconnect');
	var click_count = 0;
	function check_syntax(code, result_cb)
	{
		//Example error for guideline
		var error_list = [{
            line_no: null,
            column_no_start: null,
            column_no_stop: null,
            fragment: null,
            message: null,
            severity: null
        }];

		//Push and replace errors
		function check(data){
			//Clear array.
		    error_list = [{
	            line_no: null,
	            column_no_start: null,
	            column_no_stop: null,
	            fragment: null,
	            message: null,
	            severity: null
	        }];
			document.getElementById('errorslist').innerHTML = '';
		   	$('#errorslist').append("<tr>"+"<th>Line</th>"+"<th>Severity</th>"+
		   		"<th>Error</th>"+"<th>Tips</th>"+
					"<th>Error Code</th>" +
					"<th>Error Info</th>" + "</tr>");
			var data_length = 0;
			if (data != null){
				data_length=Object.keys(data).length;
			}
			for(var x = 0; x < data_length; x+=1){
					if (data[x] == null) {
						continue
					}
					number = data[x].line
					code = data[x].code
					codeinfo = data[x].error_info
					severity = code[0]
					moreinfo = data[x].message
					message = data[x].error

					//Set severity to necessary parameters
					if(severity=="E" || severity=="e"){
						severity="error";
						severity_color="red";
					} else if(severity=="W" || severity=="w"){
						severity="warning";
						severity_color="#DAA520";
					}
					//Push to error list
					error_list.push({
						line_no: number,
						column_no_start: null,
						column_no_stop: null,
						fragment: null,
						message: message,
						severity: severity
					});

					//Get help message for each id
					// var moreinfo = getHelp(id);
					//Append all data to table
						$('#errorslist').append("<tr>"+"<td>" + number + "</td>"
							+"<td style=\"background-color:"+severity_color+";\"" +
							">" + severity + "</td>"
							+"<td>" + message + "</td>"
							+"<td>" + moreinfo + "</td>"
							+"<td>" + code + "</td>"
							+"<td>" + codeinfo + "</td>"
							+"</tr>");
				}
			if (data != null){
	    	result_cb(error_list);
			}

		}
		//AJAX call to pylint
		$.post({
				url: '/compile',
				contentType: "application/json",
				headers: {
						"X-API-Key": "sdkljf56789#KT34_"
				},
				dataType: 'json',
	      data: JSON.stringify({code: code, typeRequest: "lint"}),
	    }, function(data) {
	    	var current_text = data.stdout;
	    	//Check Text
				let processed_code = process_output(current_text);
				check(processed_code);
				// check(current_text);
	    	return false;
	    });
	}

	var editor = CodeMirror.fromTextArea(document.getElementById("txt"), {
        mode: {name: "python",
               version: 2,
               singleLineStringErrors: false},
        lineNumbers: true,
        indentUnit: 4,
        matchBrackets: true,
        lint:true,
        styleActiveLine:true,
        gutters: ["CodeMirror-lint-markers"],
        lintWith: {
	        "getAnnotations": CodeMirror.remoteValidator,
	        "async" : true,
	        "check_cb":check_syntax
	    },
    });

    //Actually Run in Python
	$( "#run" ).click(function() {
		var code = editor.getValue();
        $.post({
            url: '/compile',
            contentType: "application/json",
            headers: {
                "X-API-Key": "sdkljf56789#KT34_"
            },
            dataType: 'json',
						testing:"test",
            data: JSON.stringify({code: code, typeRequest: "run"}),
        }, function(data) {
			    	print_result(data.combined);
			    	return false;
			    });

	    function print_result(data){
	    	document.getElementById('output').innerHTML = '';
	    	$("#output").append("<pre>"+data+"</pre>");
	    }
	});
	var exampleCode = function (id, text) {
        $(id).click(function (e) {
            editor.setValue(text);
            editor.focus(); // so that F5 works, hmm
        });
    };

    exampleCode('#codeexample1', "methods = []\nfor i in range(10):\n    methodds.append(lambda x: x + i)\nprint(methods[0](10))");
    exampleCode('#codeexample2', "for i in range(5):\n    print(i)\n");
    exampleCode('#codeexample3', "print [x*x for x in range(20) if x % 2 == 0]");
    exampleCode('#codeexample4', "print(45**123)");
    exampleCode('#codeexample5', "print (\"%s:%r:%d:%x\\n%#-+37.34o\" % (\n        \"dog\",\n        \"cat\",\n        23456,\n        999999999999L,\n        0123456702345670123456701234567L))");
    exampleCode('#codeexample6', "def genr(n):\n    i = 0\n    while i < n:\n        yield i\n        i += 1\n\nprint(list(genr(12)))\n");
    exampleCode('#codeexample7', "# obscure C3 MRO example from Python docs\nclass O(object): pass\nclass A(O): pass\nclass B(O): pass\nclass C(O): pass\nclass D(O): pass\nclass E(O): pass\nclass K1(A,B,C): pass\nclass K2(D,B,E): pass\nclass K3(D,A): pass\nclass Z(K1,K2,K3): pass\nprint Z.__mro__\n");
});
