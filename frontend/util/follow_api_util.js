export const fetchAllFollowers = id => (
  $.ajax({
    method: 'GET',
    url: `/api/follows/${id}`
  })
);

export const fetchAllGurus = () => (
  $.ajax({
    method: 'GET',
    url: '/api/photos/'
  })
);

export const createFollower = (photo) => (
  $.ajax({
    method: 'POST',
    url: '/api/photos',
    data: photo
  })
);

export const destroyFollower = follower_id => (
  $.ajax({
    method: 'DELETE',
    url: '/api/follows/${follower_id}',
  })
);
