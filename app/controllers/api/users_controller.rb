class Api::UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    @user.name = user_params[:username]
    @user.headshot_url ||= "http://res.cloudinary.com/smilejl/image/upload/v1501098612/profile%20pictures/IMG_2023.png"
    # @user.location_id = Location.find(location: params[:location]).id
    # @user.location_id ||= 1

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show #profile
    @user = User.find(params[:id])
  end

  def update #edit profile
  end

  private

  def user_params
    params.require(:user).permit(:password, :username)
  end

end
