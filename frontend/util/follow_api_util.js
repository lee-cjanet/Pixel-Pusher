export const createFollow = guru_id => (
  $.ajax({
    method: 'POST',
    url: '/api/follows',
    data: {follow: {guru_id: guru_id}}
  })
);

export const destroyFollow = guru_id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/follows/${guru_id}`,
  })
);
