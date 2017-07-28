@gurus.each do |guru|
  json.set! guru_id do
    json.extract! guru.guru, :id, :name, :headshot_url
  end
end
