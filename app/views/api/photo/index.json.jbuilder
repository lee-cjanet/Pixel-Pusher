@photos.each do |photo|
  json.set! photo.id do
    json.partial!('api/photo/_photo', photo: photo)
  end
end
