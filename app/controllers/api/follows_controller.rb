class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id
    @user = @follow.guru
    if @follow.save
      render "api/follows/show" #array of followers
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def index
    @gurus = Follow.where(guru_id: params[:id]).pluck(:follower_id)
    render "api/follows/index" #array of gurus
  end
# Follow.where(guru_id: 1).pluck

  def show
    @followers =   Follow.where(follower_id: 1).map do |follow|
      follow.guru
    end
    #follower whose ID == guru_id. guru follows ppl in this array
    render "api/follows/show" #array of followers
  end

  def destroy
    @follow = Follow.find_by(guru_id: params[:id], follower_id: current_user.id)
    @user = @follow.guru
    @follow.destroy!
    render "api/users/show"
  end

  private

  def follow_params
    params.require(:follow).permit(:follower_id, :guru_id)
  end
end
