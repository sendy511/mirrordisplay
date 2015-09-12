define(["lib/react", "apps/date-tile"], function(React, DateTile){
	var MirrorDisplay = React.createClass({
		render: function(){
			return (
				<div>
        			<h1>穿衣指数：</h1>
					<DateTile></DateTile>
				</div>
			);
		}
	});

	return MirrorDisplay;
});