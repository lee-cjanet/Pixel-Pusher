class Photo < ApplicationRecord
  validates :title, :image_url, :user_id, presence: true

  # has_many: tags

  belongs_to :artist,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :location,
    primary_key: :id,
    foreign_key: :location_id,
    class_name: :Location



  # def self.find_by_location(id)
    # location = self.where({ location_id: id, email: "smile@yahoo.com"})
    # self is the name Photos db
  # end
  # returns array like object

end
