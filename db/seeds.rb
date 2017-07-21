# Users.delete_all

user1 = User.create!(username: "smile", name: "Janet", password: "123456")

user2 = User.create!(username: "pikachu", name: "Greg", password: "123456")

user3 = User.create!(username: "charmander", name: "Keith", password: "123456")

user4 = User.create!(username: "squirtle", name: "Jared", password: "123456")

user5 = User.create!(username: "pinsir", name: "Daniel", password: "123456")

user11 = User.create!(username: "ditto", name: "Mei", password: "123456")

user12 = User.create!(username: "eevee", name: "Evelyn", password: "123456")




# =======================================================


img_1 = Photo.save!(
  title: "Sunset in the Wild",
  image_url: "http://res.cloudinary.com/smilejl/image/upload/v1500589543/2017-7-21/aperture-vintage-212345_gtnz6b.jpg",
  user_id: 2,
  )

img_2 = Photo.save!(
  title: "Summer Fruits",
  image_url: "http://res.cloudinary.com/smilejl/image/upload/v1500678605/2017-7-21/Evelyn/3_brooke-lark-158017.jpg",
  user_id: 12,
  )

img_3 = Photo.save!(
  title: "Urban Giraffe",
  image_url: "http://res.cloudinary.com/smilejl/image/upload/v1500678604/2017-7-21/Evelyn/4_chris-barbalis.jpg",
  user_id: 12,
  )

img_4 = Photo.save!(
  title: "That Doe Tho",
  image_url: "http://res.cloudinary.com/smilejl/image/upload/v1500678604/2017-7-21/Evelyn/7_deer.jpg",
  user_id: 12,
  )

img_5 = Photo.save!(
  title: "Contemporary Marble",
  image_url: "http://res.cloudinary.com/smilejl/image/upload/v1500678605/2017-7-21/Evelyn/minimal_marble_books.jpg",
  user_id: 12,
  )

img_6 = Photo.save!(
  title: "Coloful Clusters",
  image_url: "http://res.cloudinary.com/smilejl/image/upload/v1500678605/2017-7-21/Evelyn/minimal_colorful_plant.jpg",
  user_id: 12,
  )

img_7 = Photo.save!(
  title: "Summer Soups",
  image_url:  "http://res.cloudinary.com/smilejl/image/upload/v1500678609/2017-7-21/Evelyn/14_lauren-lester.jpg",
  user_id: 1212,
  )

img_8 = Photo.save!(
  title: "Peek-a-boo",
  image_url: "http://res.cloudinary.com/smilejl/image/upload/v1500678610/2017-7-21/Evelyn/20_peekaboo_elephant.jpg",
  user_id: 12,
  )

img_9 = Photo.save!(
  title: "Summer So Bright",
  image_url: "http://res.cloudinary.com/smilejl/image/upload/v1500678605/2017-7-21/Evelyn/minimal_beige_wall.jpg",
  user_id: 12,
  )

img_10 = Photo.save!(
  title: "Stare at Stair",
  image_url: "http://res.cloudinary.com/smilejl/image/upload/v1500678607/2017-7-21/Evelyn/minimal_stairs.jpg",
  user_id: 12,
  )

img_11 = Photo.save!(
  title: "two not broke girls",
  image_url: "http://res.cloudinary.com/smilejl/image/upload/v1500678609/2017-7-21/Evelyn/minimal_2_girls.jpg",
  user_id: 12,
  )

img_12 = Photo.save!(
  title: "AHHmonds",
  image_url: "http://res.cloudinary.com/smilejl/image/upload/v1500678608/2017-7-21/Evelyn/13_juan-jose-valencia-antia.jpg",
  user_id: 12,
  )

img_13 = Photo.save!(
  title: "Human Eye View",
  image_url: "http://res.cloudinary.com/smilejl/image/upload/v1500678610/2017-7-21/Evelyn/desk_flatlay.jpg",
  user_id: 12,
  )

img_14 = Photo.save!(
  title: "Lines on Lines",
  image_url: "http://res.cloudinary.com/smilejl/image/upload/v1500678607/2017-7-21/Evelyn/11_samuel-zeller.jpg",
  user_id: 12,
  )

img_15 = Photo.save!(
  title: "I have candy",
  image_url: "http://res.cloudinary.com/smilejl/image/upload/v1500678608/2017-7-21/Evelyn/12_london-scout.jpg",
  user_id: 12,
  )

img_16 = Photo.save!(
  title: "Catch the Tail",
  image_url: "http://res.cloudinary.com/smilejl/image/upload/v1500678609/2017-7-21/Evelyn/23_kitty_chair.jpg",
  user_id: 12,
  )

img_17 = Photo.save!(
  title: "One Quick Stop",
  image_url: "http://res.cloudinary.com/smilejl/image/upload/v1500678607/2017-7-21/Evelyn/13_steven-lewis.jpg",
  user_id: 12,
  )

img_18 = Photo.save!(
  title: "Hello New Friend",
  image_url: "http://res.cloudinary.com/smilejl/image/upload/v1500678608/2017-7-21/Evelyn/12_ryan-dam.jpg",
  user_id: 12,
  )

img_19 = Photo.create!(
  title: "ha-lo, Aloe",
  image_url: "http://res.cloudinary.com/smilejl/image/upload/v1500678610/2017-7-21/Evelyn/minimal_aloe.jpg",
  user_id: 12,
  )

img_20 = Photo.save!(
  title: "Chose Health",
  image_url: "http://res.cloudinary.com/smilejl/image/upload/v1500678605/2017-7-21/Evelyn/9_erik-lundqvist.jpg",
  user_id: 12,
  )

img_21 = Photo.save!(
  title: "Pastel building",
  image_url: "http://res.cloudinary.com/smilejl/image/upload/v1500678605/2017-7-21/Evelyn/10_raul-petri.jpg",
  user_id: 12,
  )




# ================================
# 2-GREG


img_22 = Photo.create!(
  title: "Memory capturer",
  image_url: "http://res.cloudinary.com/smilejl/image/upload/v1500680436/2017-7-21/Greg/camera.jpg",
  user_id: 2,
  )

img_23 = Photo.create!(
  title: "Penny for your thought?",
  image_url: "http://res.cloudinary.com/smilejl/image/upload/v1500680435/2017-7-21/Greg/13_nicola-fioravanti.jpg",
  user_id: 2,
)

img_24 = Photo.create!(
  title: "Leather on Leather",
  image_url: "http://res.cloudinary.com/smilejl/image/upload/v1500680435/2017-7-21/Greg/4_horse_sadle.jpg",
  user_id: 2,
  )

img_25 = Photo.create!(
  title: "Man with a Mission",
  image_url: "http://res.cloudinary.com/smilejl/image/upload/v1500680436/2017-7-21/Greg/17mark-jefferson-paraan.jpg",
  user_id: 2,
  )

img_26 = Photo.create!(
  title: "Butterflies",
  image_url: "http://res.cloudinary.com/smilejl/image/upload/v1500680430/2017-7-21/Greg/1_felix-russell-saw.jpg",
  user_id: 2,
  )

img_27 = Photo.create!(
  title: "Mystery Man",
  image_url: "http://res.cloudinary.com/smilejl/image/upload/v1500680431/2017-7-21/Greg/1_andrew-worley.jpg",
  user_id: 2,
)

img_28 = Photo.create!(
  title: "Stay Connected",
  image_url: "http://res.cloudinary.com/smilejl/image/upload/v1500680431/2017-7-21/Greg/3_john-towner.jpg",
  user_id: 2,
  )

img_29 = Photo.create!(
  title: "Piece of History",
  image_url: "http://res.cloudinary.com/smilejl/image/upload/v1500680430/2017-7-21/Greg/2_mahkeo.jpg",
  user_id: 2,
  )

img_30 = Photo.create!(
  title: "History or Future?",
  image_url: "http://res.cloudinary.com/smilejl/image/upload/v1500680434/2017-7-21/Greg/14_saksham-gangwar.jpg",
  user_id: 2,
  )

img_31 = Photo.create!(
  title: "Silent Night",
  image_url: "http://res.cloudinary.com/smilejl/image/upload/v1500680436/2017-7-21/Greg/6_teddy-kelley-181683.jpg",
  user_id: 2,
)

img_32 = Photo.create!(
  title: "Hues of Earth",
  image_url: "http://res.cloudinary.com/smilejl/image/upload/v1500680434/2017-7-21/Greg/4_jason-blackeye-145755.jpg",
  user_id: 2,
  )

img_33 = Photo.create!(
  title: "Serene",
  image_url: "http://res.cloudinary.com/smilejl/image/upload/v1500680432/2017-7-21/Greg/3_warren-wong.jpg",
  user_id: 2,
  )

img_34 = Photo.create!(
  title: "Eye see you",
  image_url: "http://res.cloudinary.com/smilejl/image/upload/v1500680433/2017-7-21/Greg/2_horse_eye.jpg",
  user_id: 2,
  )

img_35 = Photo.create!(
  title: "Hustling",
  image_url: "http://res.cloudinary.com/smilejl/image/upload/v1500680432/2017-7-21/Greg/3_craig-whitehead.jpg",
  user_id: 2,
)

img_36 = Photo.create!(
  title: "Bliss",
  image_url: "http://res.cloudinary.com/smilejl/image/upload/v1500680433/2017-7-21/Greg/2_tanja-heffner.jpg",
  user_id: 2,
  )

img_37 = Photo.create!(
  title: "Man made sparkles",
  image_url: "http://res.cloudinary.com/smilejl/image/upload/v1500680433/2017-7-21/Greg/3_pexels-photo.jpg",
  user_id: 2,
  )
