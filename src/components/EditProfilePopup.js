import React from 'react';
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Validator from '../utils/Validator';

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading, isolatePopup }) {
  const { values, errors, isValid, handleChange, resetForm } = Validator();
  const currentUser = React.useContext(CurrentUserContext);
  const name = React.useRef();
  const about = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name: name.current.value,
      about: about.current.value
    });
  }

  React.useEffect(() => {
    resetForm();
    setTimeout(() => {name.current.focus()}, 100)
  }, [isOpen]);

  return (
    <PopupWithForm
      name='profile'
      title='Редактировать профиль'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isolatePopup={isolatePopup}
    >
      <input
        ref={name}
        placeholder={currentUser.name}
        className="popup__field"
        id="profile__name"
        name="name"
        type="text"
        value={values.name || ''}
        minLength="2"
        maxLength="40"
        onChange={handleChange}
        required
      />
      <span
        className="popup__field-error_active"
        id="profile__name-error">
        {errors.name || ''}
      </span>
      <input
        ref={about}
        placeholder={currentUser.about}
        className="popup__field"
        id="profile__description"
        name="about"
        type="text"
        value={values.about || ''}
        minLength="2"
        maxLength="200"
        onChange={handleChange}
        required
      />
      <span
        className="popup__field-error_active"
        id="profile__description-error">
        {errors.about || ''}
      </span>
      <button
        className={`popup__button-save ${!isValid && 'popup__button-save_disabled'}`}
        id='profile__button-save'
        type="submit">
        {`${isLoading ? 'Сохранение...' : 'Сохранить'}`}
      </button>
    </PopupWithForm>
  )
}

export default EditProfilePopup;
