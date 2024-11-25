//this file contains event listener functions for the buttons and other elements on the page!!!


//function for the side navigation bar
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

//functions for the modal content
//image opening, navigation and closing
//there are event listeners for the images, close buttons and buttons on the keyboard
  var images = document.querySelectorAll(".myImg");
  var currentIndex = 0;

  function navigateImages(offset) {
    currentIndex += offset;

    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
      currentIndex = 0;
    }

    showImage(currentIndex);
  }

  function showImage(index) {
    var modal = document.querySelector(".myModal");
    var modalImg = modal.querySelector(".modal-content");
    var captionText = modal.querySelector(".caption");

    modalImg.src = images[index].src;
    captionText.innerHTML = images[index].alt;
  }

  function openModal() {
    var modal = document.querySelector(".myModal");
    modal.style.display = "block";
    showImage(currentIndex);
  }

  function closeModal() {
    var modal = document.querySelector(".myModal");
    modal.style.display = "none";
  }

  images.forEach(function (image, index) {
    image.addEventListener("click", function () {
      currentIndex = index;
      openModal();
    });
  });

  var closeButtons = document.querySelectorAll(".close");

  closeButtons.forEach(function (closeButton) {
    closeButton.addEventListener("click", function () {
      closeModal();
    });
  });

  document.onkeydown = function (event) {
    event = event || window.event;
    if (event.keyCode == 27) {
      closeModal();
    } else if (event.keyCode == 37) {
      navigateImages(-1);
    } else if (event.keyCode == 39) {
      navigateImages(1);
    }
  };