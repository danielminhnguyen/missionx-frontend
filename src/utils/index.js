// Utils contain the common methods available to all components/files or non-component specific functionality

import { API_URL } from '../config';

// Function to get the data from the APIs
export const fetchData = (apiEndpoint) => {
  return (
    fetch(API_URL + apiEndpoint)
      // We get the API response and receive data in JSON format...
      .then((response) => response.json())
  );
};

export const uploadImage = (formData) => {
  fetch(`${API_URL}api/user/uploadPic`, {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
};
