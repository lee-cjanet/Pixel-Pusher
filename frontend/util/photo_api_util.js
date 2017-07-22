export const fetchSinglePhoto = id => (
  $.ajax({
    method: 'GET',
    url: `/api/photos/${id}`
  })
);

export const fetchAllPhotos = () => (
  $.ajax({
    method: 'GET',
    url: '/api/photos/'
  })
);
