json.set! :artist_image_url, photo.artist.cover_url
json.set! :artist, photo.artist.username
json.extract! image, :id, :title, :image_url, :user_id, :location_id
