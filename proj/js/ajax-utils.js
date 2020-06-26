(function (global) {
	//setup a namespace for our utility
	var ajaxUtils={};

	//Returns an Http request object
	function getRequestObject() {
		if (window.XMLHttpRequest) {
			return(new XMLHttpRequest());
		}

		else if (window.ActiveXObject) {
			return(new ActiveXObject("Microsoft.XMLHttp"));
		}

		else{
			global.alert("Ajax is not supported !");
			return(null);
		}

	}

	//makes an Ajx Get requst to 'requesturl'

	ajaxUtils.sendGetRequest=
	function (requestUrl,responseHandler) {
		var request=getRequestObject();

		request.onreadystatechange=function () {
			handleResponse(request,responseHandler);
		};
		request.open("GET",requestUrl);
		request.send(null); //for POST only
	};

	function handleResponse(request,responseHandler) {
		if ((responseHandler.readyState==4)&&(request.status==200)) {
			responseHandler(request);
		}
	}

	//Expose utility to the global object
	global.$ajaxUtils=ajaxUtils; 

})(window);