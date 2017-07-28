@gurus.each do |guru|
  json.set! guru.id do
    json.extract! guru, :id, :name, :headshot_url
  end
end
