export const followGuru = guru_id => (
  $.ajax({
    method: 'POST',
    url: '/api/follows',
    data: { follow: { guru_id } }
  })
);

// {follower: guru_id: #}
export const fetchGurus = guru_id => (
  $.ajax({
    method: 'GET',
    url: '/api/follows/',
    data: { follow: { guru_id } }
  })
);

// {follower: guru_id: #}

export const fetchFollowers = guruID => (
  $.ajax({
    method: 'GET',
    url: `/api/follows/${guruID}`
  })
);

export const unfollowGuru = guruID => (
  $.ajax({
    method: 'DELETE',
    url: `/api/follows/${guruID}`,
  })
);
