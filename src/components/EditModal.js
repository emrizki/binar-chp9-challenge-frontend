import React from 'react';
import Button from './Button';
import '../styles/EditModal.css';

const EditModal = ({
  edit,
  close,
  data,
  changeFirstName,
  changeLastName,
  changeEmail,
  changeUsername,
  changePassword,
  changeBio,
  changeLocation,
  changeSocialMedia,
  update,
}) => {
  console.log(data.social_media_url, 'omo lpl mggal ada soj');
  if (edit) {
    return (
      <div className="modal-container">
        <div className="modal-box">
          <h3>Edit User</h3>
          <div className="input">
            <input
              type="text"
              value={data.first_name === null ? '' : data.first_name}
              onChange={changeFirstName}
            />
            <input
              type="text"
              value={data.last_name === null ? '' : data.last_name}
              onChange={changeLastName}
            />
            <input
              type="email"
              value={data.email === null ? '' : data.email}
              onChange={changeEmail}
            />
            <input
              type="text"
              value={data.username === null ? '' : data.username}
              onChange={changeUsername}
            />
            <input
              type="password"
              value={data.password === null ? '' : data.password}
              onChange={changePassword}
            />
            <input
              type="text"
              value={data.bio === null ? '' : data.bio}
              onChange={changeBio}
            />
            <input
              type="text"
              value={data.location === null ? '' : data.location}
              onChange={changeLocation}
            />
            <input
              type="text"
              value={
                data.social_media_url === null ? '' : data.social_media_url
              }
              onChange={changeSocialMedia}
            />
          </div>
          <div className="btn-group">
            <Button text="ok" variant="primary" action={update} />
            <Button text="close" variant="warning" action={close} />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default EditModal;
