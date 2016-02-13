class TilemanagementController < ApplicationController
  def getposition
  	# tilePositions = Object.new()
  	# dateTile = Object.new()
  	# position = Object.new()
  	# position.left = 50
  	# position.top = 50
  	# dateTile.dateTile = position
  	# tilePositions.dateTile = dateTile

  	rtnContent = '{
					"dateTile":{"left":50, "top":50}, 
					"weatherTile":{"left":1000, "top":50}, 
					"praiseMessageTile":{"left":300, "top":500}
				}';
				
  	render json: rtnContent
  end
end