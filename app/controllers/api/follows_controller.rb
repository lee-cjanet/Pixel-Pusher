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

  # def index #fetchAllGurus - send back follower_id for look up
  #   @gurus = Follow.where(follower_id: params[:id]).map do |guru|
  #     guru.guru
  #   end
  #   render "api/follows/index" #array of gurus
  # end
  #
  #
  # def show #fetchAllFollowers - send back guru_id to find followers
  #   @followers = Follow.where(guru_id: params[:guru_id]).map do |follow|
  #     follow.follower
  #   end
  #   #follower whose ID == guru_id. guru follows ppl in this array
  #   render "api/follows/show" #array of followers
  # end

  def destroy
    @follow = Follow.find_by(guru_id: params[:guru_id], follower_id: current_user.id)
    @user = @follow.guru
    @follow.destroy!
    render "api/users/show"
  end

  private

  def follow_params
    params.require(:follow).permit(:follower_id, :guru_id)
  end
end
