# Pixel Pusher

[Heroku link][heroku]

[Trello link][trello]

[heroku]: https://pixelpusher.herokuapp.com
[trello]: https://trello.com/b/H6f7Lyib/pixel-pusher

## Minimum Viable Product

Pixel Pusher is a web application inspired by 500px built using Ruby on Rails and React/Redux.  
By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Post Pictures
- [ ] Follows
- [ ] Home Feed
- [ ] Profile Page
- [ ] Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: ./wireframes
[components]: ./component-hierarchy.md
[sample-state]: ./sample-state.md
[api-endpoints]: ./api-endpoints.md
[schema]: ./schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication, including login/sign in view with modal.

### Phase 2: Photos Model, API, and components (2 days)

**Objective:** Photos can be uploaded, viewed, and destroyed through
the API. Homepage, category display page, cloudinary, upload, big picture view

### Phase 3: Profile Page (2 day)

**Objective:** Profile page displaying the user's picture, cover-photo,
username, bio, edit bio page, uploaded photos, followers counter, following counter, and follower pages.

### Phase 4: Home Feed (2 day)

**Objective:** Users will see a feed of photos from followed users.

### Phase 5: Follows (1 days)

**Objective:** User can follow/unfollow other users


### Bonus Features (TBD)
- [ ] Tags
- [ ] Discover
- [ ] Likes
- [ ] Galleries
- [ ] Infinite Scroll
