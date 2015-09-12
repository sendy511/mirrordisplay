define(["lib/react"], 
	function(React){
		var PraiseMessage = React.createClass({
			render: function(){
				return (
					<div className="praise-message-tile">Oh, You looks so beautiful!</div>
				);
			}
		});

		return PraiseMessage;
	}
);