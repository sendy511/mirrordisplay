define(["lib/react", "apps/date-tile"], function(React, DateTile){
	var MirrorDisplay = React.createClass({
		render: function(){
			return (
				<div>
					<DateTile></DateTile>
				</div>
			);
		}
	});

	return MirrorDisplay;
});