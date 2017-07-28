export const followGuru = guru => (
  $.ajax({
    method: 'POST',
    url: '/api/follows',
    data: guru
  })
);


export const fetchGurus = follower => (
  $.ajax({
    method: 'GET',
    url: '/api/follows/',
    data: follower
  })
);

export const fetchFollowers = guruID => (
  $.ajax({
    method: 'GET',
    url: `/api/follows/${guruID}`
  })
);
