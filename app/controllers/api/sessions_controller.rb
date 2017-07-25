class Api::SessionsController < ApplicationController

  def new
  end

  def create #login
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid username or password"], status: 401
    end
  end

  def show #profile
    @user = User.find(params[:id])
    @photos = Photo.where(user_id: params[:id])
  end

  def update #edit cover photo/bio/name, headshot
  end

  def destroy #logout
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render(
        json: ["No body is logged in"],
        status: 404
      )
    end
  end

end
