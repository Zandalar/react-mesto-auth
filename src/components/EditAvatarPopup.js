import React from 'react';
import PopupWithForm from "./PopupWithForm";
import Validator from '../utils/Validator';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading, isolatePopup }) {
  const {values, errors, isValid, handleChange, resetForm} = Validator();
  const link = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({
      avatar: link.current.value
    });
  }

  React.useEffect(() => {
    link.current.value = '';
    resetForm();
    setTimeout(() => {link.current.focus()}, 100)
  }, [isOpen]);

  return (
    <PopupWithForm
      name='avatar'
      title='Редактировать профиль'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isolatePopup={isolatePopup}
    >
      <input
        ref={link}
        className="popup__field"
        id="avatar__link"
        name="link"
        type="url"
        placeholder="Ссылка на картинку"
        value={values.link || ''}
        onChange={handleChange}
        required
      />
      <span
        className="popup__field-error_active"
        id="avatar__link-error">
        {errors.link || ''}
      </span>
      <button
        className={`popup__button-save ${!isValid && 'popup__button-save_disabled'}`}
        id='avatar__button-save'
        type="submit"
        disabled={!isValid}>
        {`${isLoading ? 'Сохранение...' : 'Сохранить'}`}
      </button>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;
