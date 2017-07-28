class Api::PhotosController < ApplicationController

  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id

    location = Location.find_by(location: photo_params[:location])
    unless location
      location = location.find_by(location: "none selected")
    end
    @photo.location = location #.location is using association from modal


    if @photo.save
      render "api/photos/show"
    else
      render json: @photo.errors.full_messages, status: 422
    end

  end

  def edit
  end

  def update
    # @photo = Photo.find(params[:id])
    # if @photo.update(photo_params)
    #   render "api/photos/show"
    # else
    #   render json: @photo.errors.full_messages, status: 422
    # end
  end

  def show
    @photo = Photo.find(params[:id])
    render "api/photos/show"
  end

  def index
    if params[:user_id]
      @photos = Photo.where(user_id: params[:user_id])
    else
      @photos = Photo.all
    end
  end


  private

  def photo_params
    params.require(:photo).permit(:location, :user_id, :title, :image_url)
  end
end
