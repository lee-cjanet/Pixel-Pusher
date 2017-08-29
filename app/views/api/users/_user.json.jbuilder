json.extract! user, :id, :username, :name, :bio, :cover_url, :headshot_url

json.follows current_user.follows?(@user)

json.followers do
  user.followers.each do |follower|
    json.set! follower.id do
      json.extract! follower, :id, :name, :headshot_url
    end
  end
end

json.gurus do
  user.gurus.each do |guru|
    json.set! guru.id do
      json.extract! guru, :id, :name, :headshot_url
    end
  end
end
