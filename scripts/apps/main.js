define(["lib/react", "lib/jquery"], function(React, jquery){
	var Weather = React.createClass({
		render: function(){
			//var weatherUrl = "http://www.weather.com.cn/data/cityinfo/101200101.html"
			// $.ajax({
			// 	async: false,
			// 	url: "http://www.weather.com.cn/data/cityinfo/101200101.html",
			// 	type: "GET",
			// 	dataType: "jsonp",
			// 	sucess: function(jsonp){
			// 		console.log(jsonp);
			// 	}
			// })
			var openWeatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=beijing,cn&callback=?"
			$.getJSON(openWeatherUrl, function(json){
				console.log(json);
			});

			return (
				<div> it is good weather </div>
			)
		}
	});

	return Weather;
});