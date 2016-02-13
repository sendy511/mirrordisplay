require 'test_helper'
require 'json'

class TilemanagementControllerTest < ActionController::TestCase
  test "should get getposition" do
    get :getposition
    assert_response :success

    tilePositions = JSON.parse(response.body)	
    assert_equal 50, tilePositions["dateTile"]["left"]
  end

end
