

function populateFailuresDDL() {
	body = document.getElementById("selectid");
	body.innerHTML = "hi there you";
	var tbl;
	var tblBody;
	$
			.ajax({
				type : "GET",
				url : "http://localhost:8080/Group5/rest/failure/all/",
				dataType : 'json',
				headers : {
					Accept : "application/json",
					"Access-Control-Allow-Origin" : "*",
				},
				success : function(resp) {

					tbl = document.createElement("table");
					tblBody = document.createElement("tbody");
					//DATE STILL RETURNED AS a Long
					$(tblBody)
							.append(
									'<tr class="child"><td>Date</td><td>Imsi</td><td>Event ID</td><td>Description</td></tr>');
					for (var i = 0; i < resp.length; i++) {
						$(tblBody).append(
								'<tr class="child"><td>' + resp[i] + i
										+ '</td><td>' + resp[i][1]
										+ '</td></tr>');
					}
					//$(tbl).text("");
					$(tbl).append(tblBody);
					$("#results14").append(tbl);
					tbl.setAttribute("align", "center");
					tbl.setAttribute("id", "table14");
					tbl.setAttribute("class", "table");
					$('#imsi14').val('');
				},
				error : function(e) {
					alert("Please select an option ");
				}
			});
	return false;

};

function ericsson() {
	document.getElementById('bdyleft').style.display = 'none';
	document.getElementById('bdyright').style.display = 'none';
	document.getElementById('bdy').style.display = 'block';
	document.getElementById('bdy').src = 'http://www.rte.ie/';
};

function queries() {
	document.getElementById('bdyleft').style.display = 'none';
	document.getElementById('bdyright').style.display = 'none';
	document.getElementById('bdy').style.display = 'block';
	if (localStorage.getItem('userLevel') === "Customer Service Rep") {
		document.getElementById('bdy').src = 'queries/CustRepqueries.jsp';
	} else if (localStorage.getItem('userLevel') === "Support Engineer") {
		document.getElementById('bdy').src = 'queries/SupEngqueries.jsp';
	} else if (localStorage.getItem('userLevel') === "Network Management Engineer") {
		document.getElementById('bdy').src = 'queries/NetManqueries.jsp';
	} else if (localStorage.getItem('userLevel') === "System Administrator") {
		document.getElementById('bdy').src = 'queries/SysAdminqueries.jsp';
	}

};



function logout() {
	localStorage.clear();
	window.location.href = 'index.html';
}

function clearUsers() {
	localStorage.clear();
};

function customerServiceRepLevel() {
	if (localStorage.getItem('userLevel') !== "System Administrator"
			&& localStorage.getItem('userLevel') !== "Network Management Engineer"
			&& localStorage.getItem('userLevel') !== "Support Engineer"
			&& localStorage.getItem('userLevel') !== "Customer Service Rep") {
		window.location.href = '../accessError.html';
	}
}

function supportEngineerLevel() {
	if (localStorage.getItem('userLevel') !== "System Administrator"
			&& localStorage.getItem('userLevel') !== "Network Management Engineer"
			&& localStorage.getItem('userLevel') !== "Support Engineer") {
		window.location.href = '../accessError.html';
	}
}

function networkManagementEngineerLevel() {
	if (localStorage.getItem('userLevel') !== "System Administrator"
			&& localStorage.getItem('userLevel') !== "Network Management Engineer") {
		window.location.href = '../accessError.html';
	}
}

function adminLevel() {
	if (localStorage.getItem('userLevel') !== "System Administrator") {
		window.location.href = '../accessError.html';
	}
}
function paragraphReset(){
	document.getElementById('queriesParagraph').innerHTML= "<br>Queries";
	document.getElementById('queriesParagraph1').innerHTML= "<br>Queries";
}
function hover4(){
	document.getElementById('queriesParagraph').innerHTML="<br>Display, for an IMSI,the Event ID and Cause Codes for all its failures";
}

function hover5(){
	document.getElementById('queriesParagraph').innerHTML="<br>For an IMSI, view number of failures they have had during a given time period";
}

function hover6(){
	document.getElementById('queriesParagraph').innerHTML="<br>For an IMSI, list all unique Cause Codes associated with its call failures";
}

function hover7(){
	document.getElementById('queriesParagraph').innerHTML="<br>List all IMSIs with call failures during the following time period";
}

function hover8(){
	document.getElementById('queriesParagraph').innerHTML="<br>For a given TAC, view number of failures they have had during a given time period";
}

function hover9(){
	document.getElementById('queriesParagraph').innerHTML="<br>For a given time period display the IMSI which had failures associated with them";
}

function hover10(){
	document.getElementById('queriesParagraph').innerHTML="Show, for given TAC, all unique failure Event Id and Cause Code combinations,"
		+ "<br>and the number of occurrences over a given time period";
}

function hover11(){
	document.getElementById('queriesParagraph').innerHTML="<br>Top 10 Market/Operator/Cell ID combinations that had call failures";
}

function hover12(){
	document.getElementById('queriesParagraph').innerHTML="<br>Display the Top 10 IMSIs with failures for a certain Time Period";
}

function hover14(){
	document.getElementById('queriesParagraph').innerHTML="<br>Display, for a Failure Cause Class the IMSIs that were affected";
}

function hoverReg(){
	document.getElementById('queriesParagraph').innerHTML="<br>Register a new user";
}

function hoverUp(){
	document.getElementById('queriesParagraph').innerHTML="<br>Upload a file to the Database";
}

$(function() {
    // set global ajax options:
    $.ajaxSetup({
        beforeSend: function(xhr, status) {
            // TODO: show spinner
            $('#spinner').show();
        },
        complete: function() {
            // TODO: hide spinner
            $('#spinner').hide();
        }
    });

    $('#foo').click(function() {
        // because we have overriden the global AJAX settings
        // the spinner will be shown during the request
        $('#content').load('b.php #abc');
    });
});

