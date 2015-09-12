define(["lib/react", "lib/moment"], function(React, moment){
	var DateTile = React.createClass({
		getInitialState: function(){
			return {
				dateTimeNow: new Date(),
			};
		},
		updateDateTimeNow: function(){
			this.setState({dateTimeNow: new Date()});
		},
		componentDidMount: function(){
			setInterval(this.updateDateTimeNow, 1000);
		},
		render: function(){
			return (
				<div class="date-tile">
					<div>{moment(this.state.dateTimeNow).format('dddd, YYYY-MM-DD')}</div>
					<div>{moment(this.state.dateTimeNow).format('hh:mm:ss')}</div>
				</div>
			);
		}
	});

	return DateTile;
});