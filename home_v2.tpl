<html>
<!-- include common settings: http head, css js settings, etc -->
	<%include file="common.fragment"/>

<body>
<!-- include header, breadcrumb -->
	<%include file="header.html"/>
	<div class="main">

		<!-- include left main part, the routine section -->
		<div class="main_left">
			<%include file="main_left.fragment"/>
		</div>

		<!-- include right main part, the notice, blog, etc -->
		<div class="main_right">
		<%include file="main_right.fragment"/>
		</div>
	</div>
</body>

</html>
