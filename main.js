// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const modal = document.querySelector('#modal');
const modalMessage = document.querySelector('#modal-message');

// Your JavaScript code goes here!
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('like-glyph')) {
    const heart = event.target;

    if (heart.innerText === EMPTY_HEART) {
      mimicServerCall()
        .then(function(serverMessage) {
          heart.innerText = FULL_HEART;
          heart.classList.add('activated-heart');
        })
        .catch(function(errorMessage) {
          modalMessage.innerText = errorMessage;
          modal.classList.remove('hidden');
          setTimeout(function() {
            modal.classList.add('hidden');
          }, 3000);
        });
    } else {
      heart.innerText = EMPTY_HEART;
      heart.classList.remove('activated-heart');
    }
  }
});



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
