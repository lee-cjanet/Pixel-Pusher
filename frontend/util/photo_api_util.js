export const fetchSinglePhoto = id => (
  $.ajax({
    method: 'GET',
    url: `/api/session/${id}`
  })
);
