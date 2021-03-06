class CreateFollows < ActiveRecord::Migration[5.0]
  def change
    create_table :follows do |t|
      t.integer :follower_id, null: false
      t.integer :guru_id, null: false

      t.timestamps
    end
    add_index :follows, :follower_id
    add_index :follows, :guru_id
  end
end
