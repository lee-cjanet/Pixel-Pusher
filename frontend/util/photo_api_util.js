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

export const createSinglePhoto = (image) => (
  $.ajax({
    method: 'POST',
    url: '/api/photos',
    data: { photo: image }
  })
);
