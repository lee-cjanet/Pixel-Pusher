diagram a tree indicating your application's overall component structure.

Discuss how you will nest your components. If components will need containers, indicate what state and dispatch props they will need. For presentational components, discuss what props and state they will need.

Map out your React Routes with their respective components and paths.


COMPONENT HIERARCHY CONTAINER
==========================================
WELCOME PAGE

mapStateToProps:
  - img: homepage   "WelcomeContainer"
  - text: welcome   "WelcomeContainer"

mapDispatchToProps:
  - n/a

route: /discover/:id "DiscoverContainer"

//link to personal github/linkedin ??

==========================================
1ST DISCOVER - CATEGORY

mapStateToProps:
  -img: diamond icon (DiscoverContainer)

  -img: faint logo footer (FooterContainer)
  -img: personal github/linked in icon  (PersonalConnectContainer)
  -text: sign up/login/profile  (SessionFormContainer)

  -img: pictures (DiscoverContainer)
  -text: category name text (DiscoverContainer)

mapDispatchToProps:
  -fetchDiscoverCategoryPics
  -createNewUser(username, pw)
  -login(username, pw)


Routes:
  - /discover/:id   "DiscoverContainer"
  - /user   "UserSignInContainer" "SessionFormContainer"
  - /users/:userId"	  "UserProfileContainer"
  - /github    "PersonalConnectContainer"
  - /linkedin   "PersonalConnectContainer"


==========================================
2ND DISCOVER - MAP


mapStateToProps:


mapDispatchToProps:


Routes:






==========================================
3RD DISCOVER - USER Profile


mapStateToProps:
  -img: diamond icon (DiscoverContainer)

  -img: faint logo footer (FooterContainer)
  -img: personal github/linked in icon  (PersonalConnectContainer)
  -text: sign up/login/profile  (SessionFormContainer)

  -img: pictures (DiscoverContainer)
  -text: category name text (DiscoverContainer)

mapDispatchToProps:
  -fetchDiscoverCategoryPics
  -createNewUser(username, pw)
  -login(username, pw)


Routes:
  - /discover/:id   "DiscoverContainer"
  - /user   "UserSignInContainer" "SessionFormContainer"
  - /users/:userId"	  "UserProfileContainer"
  - /github    "PersonalConnectContainer"
  - /linkedin   "PersonalConnectContainer"




==========================================
PICTURES BY CATEGORY


mapStateToProps:
  -text: category name    "CategoryContainer"
  -img: PICTURES          "CategoryContainer"

  -text: user profile name      "User"

mapDispatchToProps:
  -fetchUserProfile       "UserProfileContainer"
  -fetchPersonalConnect   "PersonalConnectContainer"
  -fetchImage             "ImageContainer" ???


Routes:
  - /display/:imageId
  - /user   "UserSignInContainer" "SessionFormContainer"
  - /users/:userId"	  "UserProfileContainer"
  - /github    "PersonalConnectContainer"
  - /linkedin   "PersonalConnectContainer"




==========================================
PICTURE DISPLAY VIEW
    use module to have a pop up login/ greys out page


mapStateToProps:
  -image        "ImageContainer"
  -artist       "ImageContainer"

mapDispatchToProps:
  -fetchImage     "ImageContainer"


Routes:
  - /category/:categoryname   "CategoryContainer"
  - /users/:userId"	  "UserProfileContainer"



==========================================
LOGIN
    use module to have a pop up login/ greys out page


mapStateToProps:
  -n/a

mapDispatchToProps:
  - createNewUser         "SessionFormContainer"
  - login                 "SessionFormContainer"

Routes:
  - /users/:userId"	  "UserProfileContainer"
  - user controller   "SessionFormContainer"
  - session controller "SessionFormContainer"



==========================================
USER PROFILE

mapStateToProps:
  - img: profile pic                      "UserProfileContainer"
  - img: personal images
  - img: upload/follow/unfollow button
  - text: user info
  - img: personal connect linkedin
  - img: following user's profile


mapDispatchToProps:
  - fetchFollowers      "FollowContainer"
  - fetchImages         "ImagesContainer"
  - deleteFollow        "FollowContainer"
  - AddFollow           "FollowContainer"


Routes:
  - /upload
  - link to personal websites
  - /user/:id      link to user profiles
  - display/:id     display bigger picture



==========================================
PICTURE UPLOAD
  module?

mapStateToProps:
  - n/a

mapDispatchToProps:
  - uploadNewPicture      "UploadContainer"


Routes:
  - /user/:id   "SessionFormContainer"
