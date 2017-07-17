# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `GET /api/users/:id`
- `GET /api/users`
- `POST /api/users`
- `PATCH /api/users/:id`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Photos

- `GET /api/photos`
- `POST /api/photos`
- `GET /api/photos/:id`
- `PATCH /api/photos/:id`
- `DELETE /api/photos/:id`
- `GET /api/photos/:location`
- `GET /api/photos/:category`
- `GET /api/photos/:user_id`

### Follows

- `POST /api/follows`
- `DELETE /api/follows/:followingId`
