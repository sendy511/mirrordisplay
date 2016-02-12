define(["react"], 
	function(React){
		var PraiseMessage = React.createClass({
			render: function(){
				return (
					<div className="praise-message-tile">
						<span className="praise-message-tile-content">Oh, You are so beautiful!</span>
					</div>
				);
			}
		});

		return PraiseMessage;
	}
);
