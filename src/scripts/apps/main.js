define(["lib/react", "apps/date-tile"], function(React, DateTile){
	var MirrorDisplay = React.createClass({displayName: "MirrorDisplay",
		render: function(){
			return (
				React.createElement("div", null, 
        			React.createElement("h1", null, "穿衣指数："), 
					React.createElement(DateTile, null)
				)
			);
		}
	});

	return MirrorDisplay;
});