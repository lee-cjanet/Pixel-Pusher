class Api::PhotosController < ApplicationController

  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id

    if @photo.save
      render "api/photos/show"
    else
      render json: @photo.errors.full_messages, status:422
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
    @photos = Photo.all
  end

  def destroy
    # @photo = Photo.find(params[:id])
    # @photo.destroy
    # render "api/photos/show"
  end

  private

  def photo_params
    params.require(:photo).permit(:location_id, :num, :user_id, :title, :image_url)
  end
end
