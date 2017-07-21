```javascript
{
  current_user: {
    id: 1,
    name: "Janet",
    username: "smile",
    following: boolean
  },
  user_detail: {
    id: 1,
    username: "smile",
    name: "Janet",
    bio: "text goes here",
    profile_url: "profile_url",
    headshot_url_img: "headshot_url_img_url"
    cover_url: "profile_img_url",
    teachers: [id1, id2, id3],
    students: [id4, id5, id6]
  },
  errors: [],
  images: {
    1: {
      id: 1,
      artist: "Jack",
      artist_image_url: 
      title: "This is a Tree",
      url: "/img/id",
      location_id: 2,
      user_id: 2
    }
  },
  // tags: {
  //   location: {
  //     San Francisco: [img_id1, img_id2, img_id3],
  //     New York: [img_id4, image_id5, image_id6]
  //   },
  //   users: {
  //     user_id1: [img_id1, img_id3, img_id5],
  //     user_id2: [img_id2, img_id4, img_id6]
  //   },
  //   category_name: {
  //     cats: [img_id7, img_id7, img_id9],
  //     nature: [img_id10, img_id11, img_id12]
  //   }
  // },
  teachers: {
    1: {
      student_id: 1,
      username: "superAwesomeName",
      name: "John Doe",
      profile_url: "profile_url",
      headshot_url_img: "headshot_url_img_url"
    }
  },
  students: {
    1: {
      teacher_id: 1,
      username: "superDuperAwesomeName",
      name: "Luke Skywalker",
      profile_url: "profile_url",
      headshot_url_img: "headshot_url_img_url"
    }
  }
}
```

photos: {
  1: {
    id: 1,
    title: "This is a Tree",
    url: /img_url/:id,
    user_id: 2,
    tags: [1,2],
    location_id: 4
  }
}

tags: {
  1: {
    id: 1
    name: "nature",

  }
}

locations : {
  1: {
    id: 1
    place: "SF",
    photos: [photo_id_1, photo_id_2, photo_id_3]
  }
}
