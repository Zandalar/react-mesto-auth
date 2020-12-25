import React from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/Api';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import DeletionCardPopup from './DeletionCardPopup';
import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';
import InfoTooltip from './InfoTooltip';
import * as auth from '../utils/Auth';

function App() {
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
	const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
	const [isDeletionCardPopupOpen, setIsDeletionCardPopupOpen] = React.useState(false);
	const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
	const [selectedCard, setSelectedCard] = React.useState({});
	const [currentUser, setCurrentUser] = React.useState({});
	const [cards, setCards] = React.useState([]);

	const [loggedIn, setLoggedIn] = React.useState(false);
	const [status, setStatus] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const history = useHistory();

  React.useEffect(() => {
    getToken();
    // eslint-disable-next-line
  }, []);

	function handleCardLike(card) {
    const isLiked = card.likes.some(item => item._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
      const newCards = cards.map((data) => data._id === card._id ? newCard : data);
      setCards(newCards);
    })
      .catch((err) => console.log(`Что-то пошло не так :( ${err}`))
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      const newCards = cards.filter(item => item !== card);
      setCards(newCards);
    })
      .catch((err) => console.log(`Что-то пошло не так :( ${err}`))
  }

  function handleUpdateUser(user) {
	  setIsLoading(true);
    api.setUserInfo(user)
      .then((res) => {
        setCurrentUser(res);
        setIsLoading(false);
        closeAllPopups();
      })
      .catch((err) => console.log(`Что-то пошло не так :( ${err}`))
  }

  function handleUpdateAvatar(link) {
    setIsLoading(true);
    api.editAvatar(link)
      .then((res) => {
        setCurrentUser(res);
        setIsLoading(false);
        closeAllPopups();
      })
      .catch((err) => console.log(`Что-то пошло не так :( ${err}`))
  }

  function handleAddPlaceSubmit(data) {
    setIsLoading(true);
    api.setNewCard(data)
      .then((res) => {
        setCards([res, ...cards]);
        setIsLoading(false);
        closeAllPopups();
      })
      .catch((err) => console.log(`Что-то пошло не так :( ${err}`))
  }

  React.useEffect(() => {
    setIsLoading(true);
    if (loggedIn) {
      const jwt = localStorage.getItem('jwt')
      const promises = [api.getUserInfo(), api.getInitialCards()];
      Promise.all(promises)
        .then((res) => {
          const [userData, cardsList] = res;
          setCurrentUser(userData)
          setCards(cardsList);
        })
      auth.checkToken(jwt)
        .then((res) => {
        setEmail(res.data.email);
      })
      .catch((err) => console.log(`Что-то пошло не так :( ${err}`))
      .finally(() => setIsLoading(false))
    }
  }, [loggedIn])

	function handleEditProfileClick() {
		setIsEditProfilePopupOpen(true);
	}

	function handleAddPlaceClick() {
		setIsAddPlacePopupOpen(true);
	}

	function handleEditAvatarClick() {
		setIsEditAvatarPopupOpen(true);
	}

	function handleCardClick(data) {
		setSelectedCard(data);
		setIsImagePopupOpen(true);
	}

  function handleDeletionCardClick(data) {
    setSelectedCard(data);
    setIsDeletionCardPopupOpen(true);
  }

  function handleEscClick(evt) {
    if (evt.key === 'Escape') {
      closeAllPopups();
    }
  }

	function closeAllPopups() {
		setIsEditProfilePopupOpen(false);
		setIsAddPlacePopupOpen(false);
		setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
    setIsDeletionCardPopupOpen(false);
    setIsInfoTooltipPopupOpen(false);
		setSelectedCard({});
	}

  function isolatePopup(evt) {
    evt.stopPropagation();
  }

  function handleRegister(email, password) {
	  auth.register(email, password)
      .then((data) => {
        setEmail(data.email)
        setStatus(true);
        history.push('/sign-in');
      })
      .catch((err) => {
        setStatus(false)
        console.log(new Error(err.status))
      })
      .finally(() => {
        setIsInfoTooltipPopupOpen(true)
      })
  }

  function handleLogin(email, password) {
    auth.authorize(email, password)
      .then(data => {
        localStorage.setItem('jwt', data.token)
        setLoggedIn(true);
        history.push('/');
      })
      .catch((err) => console.log(err))
  }

  function handleLogout() {
    localStorage.removeItem('jwt');
    history.push('/sign-in');
    setLoggedIn(false);
  }

  function getToken() {
    const jwt = localStorage.getItem('jwt')
    if (jwt) {
      auth.checkToken(jwt).then((res) => {
        if (res.data.email) {
          setLoggedIn(true);
          history.push('/');
        }
      })
        .catch((err) => {
          console.log(new Error(err.status))
        })
    }
  }

  React.useEffect(() => {
    window.addEventListener('keydown', handleEscClick);
    return () => {
      window.removeEventListener('keydown', handleEscClick);
    }
  })

	return (
	  <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="content">
          <Header userEmail={email} handleLogout={handleLogout} />
          <Switch>
            <Route exact path='/'>
              <ProtectedRoute
              component={Main}
              loggedIn={loggedIn}
              cards={cards}
              onCardLike={handleCardLike}
              onCardDelete={handleDeletionCardClick}
              onEditProfile={handleEditProfileClick}
              onEditAvatar={handleEditAvatarClick}
              onAddPlace={handleAddPlaceClick}
              onCardClick={handleCardClick}
              isLoading={isLoading}
              />
            </Route>
            <Route path='/sign-up'>
              <Register onRegister={handleRegister} />
            </Route>
            <Route path='/sign-in'>
              <Login onLogin={handleLogin} />
            </Route>
            <Route exact path='/'>
              { loggedIn ? <Redirect to='/' /> : <Redirect to='/sign-in' />}
            </Route>
          </Switch>
          <Footer />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
            isLoading={isLoading}
            isolatePopup={isolatePopup}
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
            isLoading={isLoading}
            isolatePopup={isolatePopup}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
            isLoading={isLoading}
            isolatePopup={isolatePopup}
          />
          <ImagePopup
            name='image'
            data={selectedCard}
            onClose={closeAllPopups}
            isOpen={isImagePopupOpen}
            isolatePopup={isolatePopup}
          />
          <DeletionCardPopup
            isOpen={isDeletionCardPopupOpen}
            onClose={closeAllPopups}
            handleSubmit={handleCardDelete}
            card={selectedCard}
            isLoading={isLoading}
            isolatePopup={isolatePopup}
          />
          <InfoTooltip
            isOpen={isInfoTooltipPopupOpen}
            onClose={closeAllPopups}
            isolatePopup={isolatePopup}
            status={status}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
	);
}

export default App;