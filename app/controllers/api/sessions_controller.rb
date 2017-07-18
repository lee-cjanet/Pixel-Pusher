class Api::SessionsController < ApplicationController

  def new
  end

  def create #login
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user
      sign_in(user)
      # redirect_to links_url
    else
      flash.now[:errors] = ["Invalid username or password"]
      # render :new
    end
  end

  def show #profile
  end

  def update #edit cover photo/bio/name, headshot
  end

  def destroy #logout
    sign_out
    # redirect_to new_session_url
  end

end
