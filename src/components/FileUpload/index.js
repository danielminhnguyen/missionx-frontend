import { API_URL } from 'config';
import { useRef, useState } from 'react';

const callUploadAPI = (postBody) => {
  const endPoint = `api/user/profilePic`;
  const fetchURL = API_URL + endPoint;
  console.log(fetchURL);
  const requestOptions = {
    method: 'POST',
    body: postBody,
    redirect: 'follow',
  };

  fetch(fetchURL, requestOptions)
    .then((res) => res.json())
    .then((data) => {
      console.log('Request succeeded with JSON response', data);
    })
    .catch((error) => {
      console.log('Request failed', error);
    });
};

const FileUpload = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const fileUploadInput = useRef(null);

  const onChangeHandler = (event) => {
    if (event.target.value) {
      setIsDisabled(false);
    }
  };

  const uploadClickHandler = () => {
    const data = new FormData();
    const file = fileUploadInput.current.files[0];
    data.append('profilePic', file);
    console.log('data', data);
    console.log('file', file);
    callUploadAPI();
  };

  //  Accept attribute specifies which files are accepted by the file input.
  return (
    <>
      <input
        type="file"
        name="profilePic"
        onChange={onChangeHandler}
        ref={fileUploadInput}
        accept=".jpg, .jpeg, .png"
        encType="multipart/form-data"
      />
      <button disabled={isDisabled} onClick={uploadClickHandler}>
        Upload Image
      </button>
    </>
  );
};

export default FileUpload;
