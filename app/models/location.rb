class Location < ApplicationRecord
  validates :location, presence: true

  has_many :photos,
    primary_key: :id,
    foreign_key: :location_id,
    class_name: "Photos"


end
