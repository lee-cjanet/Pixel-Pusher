json.extract! user, :id, :username, :name, :bio, :cover_url, :headshot_url

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

if current_user
  if user.followers.exists?(id: current_user.id)
    json.followed true
  else
    json.followed false
  end
end
