import React from 'react';
import GoogleAuthStyled from './GoogleAuthStyled'

class GoogleAuth extends React.Component {

  componentDidMount() {
    console.log('Loading');

    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id: '463853183214-o6hjmam98ocbokpekige37p912nomnn3.apps.googleusercontent.com'
      })
      console.log('Api init')

      window.gapi.load('signin2', () => {
        const params = {
          onsuccess: () => {
            console.log('User has finished signing in!');
          }
        }
        window.gapi.signin2.render('loginButton', params)
      })
    })
  }

  render() {
    return (
      <GoogleAuthStyled>
        <div id='loginButton'></div>
      </GoogleAuthStyled>
    )
  }
}

export default GoogleAuth