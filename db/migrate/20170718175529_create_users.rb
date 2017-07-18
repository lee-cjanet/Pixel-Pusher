class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :name, null: false
      t.text :bio
      t.string :profile_url, null: false
      t.string :cover_url
      t.string :headshot_url
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.timestamps
    end

    add_index :users, :username, unique: true
    add_index :users, :session_token, unique: true
  end
end
