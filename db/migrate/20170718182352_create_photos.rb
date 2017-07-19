class CreatePhotos < ActiveRecord::Migration[5.0]
  def change
    create_table :photos do |t|
      t.string :title, null: false
      t.string :image_url, null: false
      t.integer :user_id, foreign_key: true
      t.integer :location_id, foreign_key: true

      t.timestamps
    end

    add_index :photos, :user_id
  end
end
