class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id
    @user = @follow.guru
    if @follow.save
      render "api/users/show" #array of followers
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.find_by(guru_id: follow_params[:guru_id], follower_id: current_user.id)
    # p @follow
    # @user = @follow.guru
    @follow.destroy!
    render "api/users/show"
  end

  private

  def follow_params
    params.require(:follow).permit(:follower_id, :guru_id)
  end
end
