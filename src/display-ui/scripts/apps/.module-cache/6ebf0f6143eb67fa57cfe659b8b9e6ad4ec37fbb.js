define(["react", "jquery", "underscore"], function (React, jquery, _) {
	var WeatherTile = React.createClass({
		displayName: "WeatherTile",

		getDefaultProps: function () {
			return {
				other_locations: [{ city: "NewYork", status: "Bright", temperature_degree: "23" }, { city: "London", status: "Cloud", temperature_degree: "15" }, { city: "Tokayo", status: "Fine", temperature_degree: "35" }, { city: "Paris", status: "Rain", temperature_degree: "27" }]
			};
		},

		renderOtherLocations: function () {
			return _.map(this.props.other_locations, function (weather_info) {
				return React.createElement(
					"li",
					{ className: "other-location" },
					React.createElement(
						"span",
						null,
						weather_info.city
					),
					React.createElement(
						"span",
						null,
						weather_info.status
					),
					React.createElement(
						"span",
						null,
						weather_info.temperature_degree
					),
					React.createElement(
						"span",
						null,
						"℃"
					)
				);
			});
		},

		render: function () {
			// var openWeatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=beijing,cn&callback=?"
			// $.getJSON(openWeatherUrl, function(json){
			// 	console.log(json);
			// });

			return React.createElement(
				"div",
				{ className: "weather-tile" },
				React.createElement(
					"div",
					{ className: "current-location" },
					React.createElement("i", { className: "icon" }),
					React.createElement(
						"span",
						{ className: "number" },
						"20"
					),
					React.createElement(
						"span",
						{ className: "temperature-degree-symbol" },
						"℃"
					)
				),
				React.createElement(
					"ul",
					{ className: "other-locations" },
					this.renderOtherLocations()
				)
			);
		}
	});

	return WeatherTile;
});
