class Photo < ApplicationRecord
  validates :title, :image_url, :user_id, :location_id, presence: true

  # has_many: tags

  belongs_to :artist,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "Users"

  belongs_to :location,
    primary_key: :id,
    foreign_key: :location_id,
    class_name: "Locations"

    # def self.find_by_credentials(username, password)
    #   user = User.find_by(username: username)
    #   return nil unless user && user.valid_password?(password)
    #   user
    # end
    #
  # def self.find_by_location(location_id)
  #   location = locatio
  # end
end
