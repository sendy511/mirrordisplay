define(["react", "lib/moment"], function (React, moment) {
	var DateTile = React.createClass({
		displayName: "DateTile",

		getInitialState: function () {
			return {
				dateTimeNow: new Date()
			};
		},
		updateDateTimeNow: function () {
			this.setState({ dateTimeNow: new Date() });
		},
		componentDidMount: function () {
			setInterval(this.updateDateTimeNow, 1000);
		},
		render: function () {
			return React.createElement(
				"div",
				{ className: "date-tile" },
				React.createElement(
					"div",
					{ className: "date" },
					moment(this.state.dateTimeNow).format('dddd, YYYY-MM-DD')
				),
				React.createElement(
					"div",
					{ className: "time" },
					moment(this.state.dateTimeNow).format('hh:mm:ss')
				)
			);
		}
	});

	return DateTile;
});
