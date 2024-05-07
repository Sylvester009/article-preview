const shareButton = document.getElementById("share-icon");
const profile = document.getElementById("profile");

const shareModal = document.getElementById("share-modal");
const returnIcon = document.getElementById("return-icon");

const desktopShareButton = document.getElementById("desktop-share-icon");
const desktopShareModal = document.getElementById("desktop-share-modal");

shareButton.addEventListener("click", () => {
  profile.style.display = "none";
  shareModal.style.display = "flex";
});

returnIcon.addEventListener("click", () => {
  shareModal.style.display = "none";
  profile.style.display = "flex";
});

desktopShareButton.addEventListener("click", () => {
  if (desktopShareModal.style.display === "flex") {
    desktopModalIsClose();
  } else {
    desktopModalIsOpen();
  }
});

function desktopModalIsOpen() {
  desktopShareModal.style.display = "flex";
}

function desktopModalIsClose() {
  desktopShareModal.style.display = "none";
}
