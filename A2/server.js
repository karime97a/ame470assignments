<html>
<head>
  <script src='asyncReq.js'></script>
  <script src='jquery-3.3.1.min.js'></script>
  <script>
function sendToServer(){
	var userInput = "3-4";
	loadFile("./eval?eq=" + userInput, function(resData){
		$("#result").html(resData);
	});
}
  </script>

</head>

<body>
	<h1> Eval </h1>
  <textarea id='eq'></textarea>
  <button onclick='sendToServer()'> Evaluate </button>
  <div id='result'> </div>
</body>
</html>
