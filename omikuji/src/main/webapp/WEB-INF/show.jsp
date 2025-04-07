<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="/css/style.css">
</head>
<body>
<h1>Here's Your Omikuji!</h1>
	
<h3 style="width: 50%;">
	<c:out value="${result}"/>
</h3>

<div class="center">
<a href="/omikuji">Go Back</a>
</div>

</body>
</html>