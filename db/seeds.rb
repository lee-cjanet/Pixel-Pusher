User.destroy_all
Photo.destroy_all

user1 = User.create!(
  username: "demo",
  name: "Demo Guest",
  password: "123456",
  bio: "You got it dood",
  headshot_url:
  "http://res.cloudinary.com/smilejl/image/upload/v1501098612/profile%20pictures/IMG_2023.png"
  )

user2 = User.create!(
  username: "pikachu",
  name: "Greg Park",
  password: "123456",
  bio: "A nomad from the plateaus of Hell, Michigan. He has only recently begun his photography journey, electing to focus on dark, high contrast pieces that tug at the underlying emotions of its audience. His favorite food is dried seaweed, and his life motto is “Everything in moderation.",
  headshot_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_300/v1501007387/profile%20pictures/greg_pixel_pusher.gif"
  )

user3 = User.create!(
  username: "charmander",
  name: "Keith",
  password: "123456",
  headshot_url: "http://res.cloudinary.com/smilejl/image/upload/v1504390106/pixelpusher%20screenshots/stephan.png"
)

user5 = User.create!(
  username: "squirtle",
  name: "Jared",
  password: "123456",
  headshot_url: "http://res.cloudinary.com/smilejl/image/upload/v1504390099/pixelpusher%20screenshots/jared.png"
  )

user4 = User.create!(
  username: "pinsir",
  name: "Graham Paye",
  password: "123456",
  bio: "I enjoy long walks on the city streets",
  headshot_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_300/v1501033634/profile%20pictures/graham_pixel_pusher.gif"
)

user6 = User.create!(
  username: "smile",
  name: "Janet Lee",
  password: "123456",
  bio: "Travel makes the year last longer",
  headshot_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_300/v1501007387/profile%20pictures/janet_pixel_pusher.gif
"
)

user11 = User.create!(
  username: "ditto",
  name: "Jules",
  password: "123456",
  bio: "Everyday this & that",
  headshot_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_300/v1501007386/profile%20pictures/jules_pixel_pusher.gif"
  )

user12 = User.create!(
  username: "eevee",
  name: "Anastassia Bobokalonova",
  password: "123456",
  bio: "The little things",
  headshot_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_300/v1501007387/profile%20pictures/imageedit_15_2995512351.gif"
  )




# =======================================================

# user1 = demo
# user2 = Greg
# user3 = keith
# user4 = graham
# user5 = jared
# user6 = me
# user11 = jules
# user12 = Anastassia

location1 = Location.create!(location: "none selected")

Follow.create!(guru_id: user2.id, follower_id: user1.id)
Follow.create!(guru_id: user3.id, follower_id: user1.id)
Follow.create!(guru_id: user4.id, follower_id: user1.id)
Follow.create!(guru_id: user6.id, follower_id: user1.id)
Follow.create!(guru_id: user12.id, follower_id: user1.id)

Follow.create!(guru_id: user1.id, follower_id: user2.id)
Follow.create!(guru_id: user6.id, follower_id: user2.id)
Follow.create!(guru_id: user12.id, follower_id: user2.id)
Follow.create!(guru_id: user11.id, follower_id: user2.id)

Follow.create!(guru_id: user1.id, follower_id: user3.id)
Follow.create!(guru_id: user2.id, follower_id: user3.id)
Follow.create!(guru_id: user4.id, follower_id: user3.id)
Follow.create!(guru_id: user5.id, follower_id: user3.id)
Follow.create!(guru_id: user6.id, follower_id: user3.id)
Follow.create!(guru_id: user11.id, follower_id: user3.id)

Follow.create!(guru_id: user1.id, follower_id: user4.id)
Follow.create!(guru_id: user2.id, follower_id: user4.id)
Follow.create!(guru_id: user3.id, follower_id: user4.id)
Follow.create!(guru_id: user5.id, follower_id: user4.id)
Follow.create!(guru_id: user6.id, follower_id: user4.id)
Follow.create!(guru_id: user11.id, follower_id: user4.id)
Follow.create!(guru_id: user12.id, follower_id: user4.id)

Follow.create!(guru_id: user11.id, follower_id: user5.id)
Follow.create!(guru_id: user3.id, follower_id: user5.id)
Follow.create!(guru_id: user4.id, follower_id: user5.id)
Follow.create!(guru_id: user6.id, follower_id: user5.id)
Follow.create!(guru_id: user12.id, follower_id: user5.id)

Follow.create!(guru_id: user1.id, follower_id: user6.id)
Follow.create!(guru_id: user5.id, follower_id: user6.id)
Follow.create!(guru_id: user12.id, follower_id: user6.id)
Follow.create!(guru_id: user2.id, follower_id: user6.id)
Follow.create!(guru_id: user4.id, follower_id: user6.id)
Follow.create!(guru_id: user3.id, follower_id: user6.id)

Follow.create!(guru_id: user6.id, follower_id: user11.id)
Follow.create!(guru_id: user12.id, follower_id: user11.id)
Follow.create!(guru_id: user3.id, follower_id: user11.id)

Follow.create!(guru_id: user1.id, follower_id: user12.id)
Follow.create!(guru_id: user6.id, follower_id: user12.id)
Follow.create!(guru_id: user5.id, follower_id: user12.id)
Follow.create!(guru_id: user2.id, follower_id: user12.id)
Follow.create!(guru_id: user4.id, follower_id: user12.id)






img_1 = Photo.create!(
  title: "Sunset in the Wild",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_650/v1500680432/2017-7-21/Greg/1_aperture-vintage-212345.jpg",
  user_id: user2.id,
  location_id: location1.id
  )

img_2 = Photo.create!(
  title: "Summer Fruits",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_700/v1500678605/2017-7-21/Evelyn/3_brooke-lark-158017.jpg",
  user_id: user12.id,
  location_id: location1.id,
  )

img_3 = Photo.create!(
  title: "Urban Giraffe",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_400/v1500678604/2017-7-21/Evelyn/4_chris-barbalis.jpg",
  user_id: user12.id,
  location_id: location1.id,
  )

img_4 = Photo.create!(
  title: "That Doe Tho",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_500/v1500678604/2017-7-21/Evelyn/7_deer.jpg",
  user_id: user12.id,
  location_id: location1.id,
  )

img_5 = Photo.create!(
  title: "Contemporary Marble",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_700/v1500678605/2017-7-21/Evelyn/minimal_marble_books.jpg",
  user_id: user12.id,
  location_id: location1.id,
  )

img_6 = Photo.create!(
  title: "Coloful Clusters",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_800/v1500678605/2017-7-21/Evelyn/minimal_colorful_plant.jpg",
  user_id: user12.id,
  location_id: location1.id,
  )

img_7 = Photo.create!(
  title: "Summer Soups",
  image_url:  "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_400/v1500678609/2017-7-21/Evelyn/14_lauren-lester.jpg",
  user_id: user12.id,
  location_id: location1.id,
  )

img_8 = Photo.create!(
  title: "Peek-a-boo",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_1000/v1500678610/2017-7-21/Evelyn/20_peekaboo_elephant.jpg",
  user_id: user12.id,
  location_id: location1.id,
  )

img_9 = Photo.create!(
  title: "Summer So Bright",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_400/v1500678605/2017-7-21/Evelyn/minimal_beige_wall.jpg",
  user_id: user12.id,
  location_id: location1.id,
  )

img_10 = Photo.create!(
  title: "Stare at Stair",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_650/v1500678607/2017-7-21/Evelyn/minimal_stairs.jpg",
  user_id: user12.id,
  location_id: location1.id,
  )

img_11 = Photo.create!(
  title: "two not broke girls",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_800/v1500678609/2017-7-21/Evelyn/minimal_2_girls.jpg",
  user_id: user12.id,
  location_id: location1.id,
  )

img_12 = Photo.create!(
  title: "AHHmonds",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_500/v1500678608/2017-7-21/Evelyn/13_juan-jose-valencia-antia.jpg",
  user_id: user12.id,
  location_id: location1.id,
  )

img_13 = Photo.create!(
  title: "Human Eye View",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_700/v1500678610/2017-7-21/Evelyn/desk_flatlay.jpg",
  user_id: user12.id,
  location_id: location1.id,
  )

img_14 = Photo.create!(
  title: "Lines on Lines",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_800/v1500678607/2017-7-21/Evelyn/11_samuel-zeller.jpg",
  user_id: user12.id,
  location_id: location1.id,
  )

img_15 = Photo.create!(
  title: "I have candy",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_650/v1500678608/2017-7-21/Evelyn/12_london-scout.jpg",
  user_id: user12.id,
  location_id: location1.id,
  )

img_16 = Photo.create!(
  title: "Catch the Tail",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_600/v1500678609/2017-7-21/Evelyn/23_kitty_chair.jpg",
  user_id: user12.id,
  location_id: location1.id,
  )

img_17 = Photo.create!(
  title: "One Quick Stop",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_600/v1500678607/2017-7-21/Evelyn/13_steven-lewis.jpg",
  user_id: user12.id,
  location_id: location1.id,
  )

img_18 = Photo.create!(
  title: "Hello New Friend",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_750/v1500678608/2017-7-21/Evelyn/12_ryan-dam.jpg",
  user_id: user12.id,
  location_id: location1.id,
  )

img_19 = Photo.create!(
  title: "ha-lo, Aloe",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_600/v1500678610/2017-7-21/Evelyn/minimal_aloe.jpg",
  user_id: user12.id,
  location_id: location1.id,
  )

img_20 = Photo.create!(
  title: "Chose Health",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_600/v1500678605/2017-7-21/Evelyn/9_erik-lundqvist.jpg",
  user_id: user12.id,
  location_id: location1.id,
  )

img_21 = Photo.create!(
  title: "Pastel building",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_700/v1500678605/2017-7-21/Evelyn/10_raul-petri.jpg",
  user_id: user12.id,
  location_id: location1.id,
  )




# ================================
# 2-GREG


img_22 = Photo.create!(
  title: "Memory capturer",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_650/v1500680436/2017-7-21/Greg/camera.jpg",
  user_id: user2.id,
  location_id: location1.id
  )

img_23 = Photo.create!(
  title: "Penny for your thought?",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_650/v1500680435/2017-7-21/Greg/13_nicola-fioravanti.jpg",
  user_id: user2.id,
  location_id: location1.id
)

img_24 = Photo.create!(
  title: "Leather on Leather",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_650/v1500680435/2017-7-21/Greg/4_horse_sadle.jpg",
  user_id: user2.id,
  location_id: location1.id
  )

img_25 = Photo.create!(
  title: "Man with a Mission",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_650/v1500680436/2017-7-21/Greg/17mark-jefferson-paraan.jpg",
  user_id: user2.id,
  location_id: location1.id
  )

img_26 = Photo.create!(
  title: "Butterflies",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_3000/v1500680430/2017-7-21/Greg/1_felix-russell-saw.jpg",
  user_id: user2.id,
  location_id: location1.id
  )

img_27 = Photo.create!(
  title: "Mystery Man",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_650/v1500680431/2017-7-21/Greg/1_andrew-worley.jpg",
  user_id: user2.id,
  location_id: location1.id
)

img_28 = Photo.create!(
  title: "Stay Connected",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_650/v1500680431/2017-7-21/Greg/3_john-towner.jpg",
  user_id: user2.id,
  location_id: location1.id
  )

img_29 = Photo.create!(
  title: "Piece of History",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_650/v1500680430/2017-7-21/Greg/2_mahkeo.jpg",
  user_id: user2.id,
  location_id: location1.id
  )

img_30 = Photo.create!(
  title: "History or Future?",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_650/v1500680434/2017-7-21/Greg/14_saksham-gangwar.jpg",
  user_id: user2.id,
  location_id: location1.id
  )

img_31 = Photo.create!(
  title: "Silent Night",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_650/v1500680436/2017-7-21/Greg/6_teddy-kelley-181683.jpg",
  user_id: user2.id,
  location_id: location1.id
)

img_32 = Photo.create!(
  title: "Hues of Earth",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_650/v1500680434/2017-7-21/Greg/4_jason-blackeye-145755.jpg",
  user_id: user2.id,
  location_id: location1.id
  )

img_33 = Photo.create!(
  title: "Serene",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_650/v1500680432/2017-7-21/Greg/3_warren-wong.jpg",
  user_id: user2.id,
  location_id: location1.id
  )

img_34 = Photo.create!(
  title: "Eye see you",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_3000/v1500680433/2017-7-21/Greg/2_horse_eye.jpg",
  user_id: user2.id,
  location_id: location1.id
  )

img_35 = Photo.create!(
  title: "Hustling",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_650/v1500680432/2017-7-21/Greg/3_craig-whitehead.jpg",
  user_id: user2.id,
  location_id: location1.id
)

img_36 = Photo.create!(
  title: "Bliss",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_650/v1500680433/2017-7-21/Greg/2_tanja-heffner.jpg",
  user_id: user2.id,
  location_id: location1.id
  )

img_37 = Photo.create!(
  title: "Man made sparkles",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_650/v1500680433/2017-7-21/Greg/3_pexels-photo.jpg",
  user_id: user2.id,
  location_id: location1.id
  )



# ===================================
# Jared 4


img_38 = Photo.create!(
  title: "Spectical",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_650/v1500681533/2017-7-21/Jared/office_glasses.jpg",
  user_id: user4.id,
  location_id: location1.id
)

img_39 = Photo.create!(
  title: "Sea you later",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_650/v1500681531/2017-7-21/Jared/12_sweet-ice-cream-photography.jpg",
  user_id: user4.id,
  location_id: location1.id
)

img_40 = Photo.create!(
  title: "Tower of Hanoi",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_650/v1500681531/2017-7-21/Jared/9_dmitri-popov.jpg",
  user_id: user4.id,
  location_id: location1.id
)

img_41 = Photo.create!(
  title: "I Spy a Time Keeper",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_3000/v1500681528/2017-7-21/Jared/7_lobostudio-hamburg.jpg",
  user_id: user4.id,
  location_id: location1.id
)

img_42 = Photo.create!(
  title: "Solar Power",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_650/v1500681529/2017-7-21/Jared/7_jason-blackeye.jpg",
  user_id: user4.id,
  location_id: location1.id
)

img_43 = Photo.create!(
  title: "Shapes of you",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_650/v1500681528/2017-7-21/Jared/6_scott-webb.jpg",
  user_id: user4.id,
  location_id: location1.id
)

img_44 = Photo.create!(
  title: "Round and Round",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_650/v1500681530/2017-7-21/Jared/ferriswheel.jpg",
  user_id: user4.id,
  location_id: location1.id
)

img_45 = Photo.create!(
  title: "World off",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_3000/v1500681532/2017-7-21/Jared/minimal_headphone_sky.jpg",
  user_id: user4.id,
  location_id: location1.id
)

img_46 = Photo.create!(
  title: "Old skool style",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_650/v1500681532/2017-7-21/Jared/airplane.jpg",
  user_id: user4.id,
  location_id: location1.id
)

img_47 = Photo.create!(
  title: "Clouds of Fluff",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_650/v1500681528/2017-7-21/Jared/7_ricardo-gomez-angel-273521.jpg",
  user_id: user4.id,
  location_id: location1.id
)

img_48 = Photo.create!(
  title: "Shades of Blue",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_650/v1500681530/2017-7-21/Jared/9_joel-filipe.jpg",
  user_id: user4.id,
  location_id: location1.id
)

img_49 = Photo.create!(
  title: "Create of the Sea",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_650/v1500681533/2017-7-21/Jared/minimal_summer_kayak.jpg",
  user_id: user4.id,
  location_id: location1.id
)

img_50 = Photo.create!(
  title: "Rainbow Power",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_650/v1500681534/2017-7-21/Jared/minimal_rainbow_flag.jpg",
  user_id: user4.id,
  location_id: location1.id
)

img_51 = Photo.create!(
  title: "Color Run",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_650/v1500681528/2017-7-21/Jared/7_maxime-bhm.jpg",
  user_id: user4.id,
  location_id: location1.id
)

img_52 = Photo.create!(
  title: "Dive Deep",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_650/v1500681531/2017-7-21/Jared/8_jakob-owens.jpg",
  user_id: user4.id,
  location_id: location1.id
)

img_53 = Photo.create!(
  title: "ARR ARR",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_3000/v1500681530/2017-7-21/Jared/16_walrus.jpg",
  user_id: user4.id,
  location_id: location1.id
)

img_54 = Photo.create!(
  title: "Sup Fam",
  image_url: "https://res.cloudinary.com/smilejl/image/upload/c_scale,w_650/v1500681533/2017-7-21/Jared/19_sea_of_lion.jpg",
  user_id: user4.id,
  location_id: location1.id
)
