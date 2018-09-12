import firebase from './firebaseInstance';

let db = firebase.database();

// get
export function getGalleryContentOn(callback) {
  db.ref('imagenes').on('value', (snapshot) => {
    callback(snapshot.val());
  });
}

// update
export function updateGalleryItemToDisplayInUserFrame(galleryItem, userFrameKey) {
  db.ref('monitores/a/imagenActual').update({
    imagenURL: galleryItem.imagenURL,
    previaImagenURL: galleryItem.previaImagenURL,
    nombreImagen: galleryItem.nombreImagen,
    descripcionImagen: galleryItem.descripcionImagen
  });
}
