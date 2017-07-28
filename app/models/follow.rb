class Follow < ApplicationRecord
  validates :follower_id, :guru_id, presence: true
  validates :follower_id, uniqueness: { scope: :guru_id }
  validate :no_self_follows

def no_self_follows
  errors.add(:guru_id, "can't follow one's self") if self.guru_id == self.follower_id
end

belongs_to :follower,
  primary_key: :id,
  foreign_key: :follower_id,
  class_name: "User"

belongs_to :guru,
  primary_key: :id,
  foreign_key: :guru_id,
  class_name: "User"
end
