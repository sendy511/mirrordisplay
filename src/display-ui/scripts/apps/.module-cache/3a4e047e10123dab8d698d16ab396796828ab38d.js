define(["react"], function (React) {
	var PraiseMessage = React.createClass({
		displayName: "PraiseMessage",

		render: function () {
			return React.createElement(
				"div",
				{ className: "praise-message-tile" },
				"Oh, You are so beautiful!"
			);
		}
	});

	return PraiseMessage;
});
