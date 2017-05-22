import * as firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import RNFetchBlob from 'react-native-fetch-blob';
import {
  MENU_OPEN,
  UPDATE_MARKERS,
  SAVE_PICTURE,
  IMAGE_SOURCE,
  MARKER_IMAGE,
} from './types';

//These are action creators
export const menuOpen = (text) => {
  return{
    type: MENU_OPEN,
    payload: text
  }
};

const Blob = RNFetchBlob.polyfill.Blob

window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

export const formSelection = (e) => {
  const {currentUser} = firebase.auth();
  return (dispatch) => {
    Actions.forms({coord: e});
  }
}

//Move this stuff to component
export const submitForm = ({type, breed, description, coord, form}, imageSource) => {

  const {currentUser} = firebase.auth();
  const date = Date.now();
  const uid = currentUser.uid;
  const path = `${uid}/${date}`;
  return (dispatch) => {
    firebase.database().ref(`/users/markers`)
      .push({type, breed, description, coord, uid, form, path})
      .then(() => {
        uploadPicture(imageSource, date, uid, dispatch)
      })
  };
}

export const submitLostForm = ({type, breed, description, coord, form}, imageSource) => {
  const {currentUser} = firebase.auth();
  const date = Date.now();
  const uid = currentUser.uid;
  const path = `${uid}/${date}`;
  return (dispatch) => {
    if(!imageSource){
      markerPush(type, breed, description, coord, uid, form, dispatch);
    }else{
      Blob.build(RNFetchBlob.wrap(imageSource), { type : 'image/png' })
      .then((blob) => {
        firebase.storage().ref().child(`${uid}/${date}`).put(blob, {contentType: 'image/png'})
        .then(() => {
          firebase.storage().ref().child(path).getDownloadURL()
          .then((url) => {
            blob.close();
            markerPush(type, breed, description, coord, uid, form, dispatch, url);
          }).catch((error) => {
            console.log(error);
          })
        }).catch((error) => {
          console.log(error);
        })
      }).catch((error) => {
        console.log(error);
      })
    }
  }
}

const markerPush = (type, breed, description, coord, uid, form, dispatch, url = null) => {
  firebase.database().ref(`/users/markers`)
    .push({type, breed, description, coord, uid, form, url})
    .then(() => {
      dispatch({type: IMAGE_SOURCE})
      Actions.main()
    }).catch((error) => {
      console.log(error);
    })
}

export const updateMarkers = () => {
  return (dispatch) => {
    // event handler that will update the list whenever a change is made
    firebase.database().ref(`/users/markers`)
      .on('value', snapshot => {
        dispatch({
          type: UPDATE_MARKERS,
          payload: snapshot.val()
        })
      })
  }
}

export const imageSource = ({path}) => {
  return{
    type: IMAGE_SOURCE,
    payload: path
  }
}

const uploadPicture = (path, date, uid, dispatch) => {
  Blob.build(RNFetchBlob.wrap(path), { type : 'image/png' })
  .then((blob) => {
    const storage = firebase.storage().ref();
    const petImageRef = storage.child(`${uid}/${date}`).put(blob, {contentType: 'image/png'})
      .then((snapshot) => {
        dispatch({type: IMAGE_SOURCE})
        Actions.main()
      })
  })
}
