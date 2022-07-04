document.write("<table border='1'>");
for(i=1; i<=30; i++){
	document.write("<tr>");
	for(j=1; j<=30; j++){
		document.write("<td>" + (i*j) + "</td>");
	}
	document.write("</tr>");
}
document.write("</table>");