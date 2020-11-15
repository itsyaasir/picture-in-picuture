
const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt the user to select a media stream, pass to video element, then play.
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Throw the error
    console.log('Uh oh, error in selectMediaStream: ', error);
  }
}

button.addEventListener('click', async () => {
  // Disable the button
  button.disabled = true;

  // Start picture in picture
  await videoElement.requestPictureInPicture();

  // Reset the button
  button.disabled = false;
});

// On Load
selectMediaStream();