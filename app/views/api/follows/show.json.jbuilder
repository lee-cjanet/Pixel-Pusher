    #follower whose ID == guru_id. guru follows ppl in this array

@followers.each do |follower|
  json.set! follower.id do
    json.extract! follower, :id, :name, :headshot_url
  end
end
