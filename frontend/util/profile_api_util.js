export const fetchUserProfile = id => (
   $.ajax({
     method: 'GET',
     url: `/api/users/${id}`
   })
 );

 export const fetchUserPhotos = id => (
    $.ajax({
      method: 'GET',
      url: `/api/users/${id}/photos`
    })
  );
