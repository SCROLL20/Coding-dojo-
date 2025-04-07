<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Omikuji</title>
<link rel="stylesheet" type="text/css" href="/css/style.css">
</head>
<body>
<h1>Send an Omikuji!</h1>
	
<form action="/submitForm" method="post">

	<div>
		<label for="number">Pick any number from 5 to 25</label><br />
		<input class="num-input" type="number" name="number"/>
	</div>
	
	<div>
		<label for="">Enter the name of any city</label><br />
		<input type="text" name="city"/>
	</div>
	
	<div>
		<label for="">Enter the name of any real person</label><br />
		<input type="text" name="person"/>
	</div>
	
	<div>
		<label for="">Enter professional endeavor or hobby</label><br />
		<input type="text" name="hobby"/>
	</div>
	
	<div>
		<label for="">Enter any type of living thing</label><br />
		<input type="text" name="livingThing"/>
	</div>
	<div>
		<label for="">Say something nice to someone:</label><br />
		<textarea name="message" id="" cols="30" rows="10"></textarea>
	</div>
	
	<div>
		<p>Send and show a friend!</p>
		
		<input class="button" type="submit" value="Send"/>
	</div>
	
	

</form>
</body>
</html>
