export const followGuru = follow => (
  $.ajax({
    method: 'POST',
    url: '/api/follows',
    data: { follow }
  })
);

// {follower: guru_id: #}
export const fetchGurus = follow => (
  $.ajax({
    method: 'GET',
    url: '/api/follows/',
    data: { follow }
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
