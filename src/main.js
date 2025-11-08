const formSection = document.getElementById("formSection");
const ticketForm = document.getElementById("ticketForm");
const dropZone = document.getElementById("dropZone");
const avatar = document.getElementById("avatar");
const uploadImg = document.getElementById("uploadImg");
const inputText = document.getElementById("inputText");
const controlImg = document.getElementById("controlImg");
const removeImg = document.getElementById("removeImg");
const hint = document.getElementById("hint");
const avatarMessage = document.getElementById("avatarMessage");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const gitHub = document.getElementById("gitHub");
// ticket section
const ticketSection = document.getElementById("ticketSection");
const nameSpan = document.getElementById("nameSpan");
const nameSpan2 = document.getElementById("nameSpan2");
const emailSpan = document.getElementById("emailSpan");
const date = document.getElementById("date");
const userImage = document.getElementById("userImage");
const gitHubSpan = document.getElementById("gitHubSpan");
const idSpan = document.getElementById("idSpan");

let imgLink;
const defaultImg = uploadImg.src;
const MAX_SIZE = 500 * 1024;
// helpers
function showError(msg) {
  avatarMessage.setAttribute("aria-live", "assertive");
  avatarMessage.textContent = msg;
  hint.style.color = "#DC3545";
}

function clearError() {
  avatarMessage.setAttribute("aria-live", "polite");
  avatarMessage.textContent = "Upload your photo (JPG or PNG, max size: 500KB)";
  hint.style.color = "";
}

function resetImage() {
  uploadImg.src = defaultImg;
  avatar.value = "";
  inputText.classList.remove("hidden");
  controlImg.classList.add("hidden");
  if (imgLink) {
    URL.revokeObjectURL(imgLink);
    imgLink = null;
  }
}

// events
dropZone.addEventListener("click", () => avatar.click());
avatar.addEventListener("change", uploadImage);

function uploadImage() {
  const file = avatar.files[0];
  if (!file) return false;
  if (!validateAvatar()) return false;
  clearError();
  if (imgLink) URL.revokeObjectURL(imgLink);
  imgLink = URL.createObjectURL(file);
  uploadImg.setAttribute("src", imgLink);
  userImage.setAttribute("src", imgLink);
  uploadImg.style.padding = 0;
  uploadImg.style.outline = "1px solid var(--color-neutral-500)";
  inputText.classList.add("hidden");
  controlImg.classList.remove("hidden");
  return true;
}

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  avatar.files = e.dataTransfer.files;
  uploadImage();
});

removeImg.addEventListener("click", (e) => {
  e.stopPropagation();
  resetImage();
});

// validation functions
function validateAvatar() {
  const file = avatar.files[0];
  if (!file && !imgLink) {
    showError("Please upload your photo.");
    return false;
  }
  if (file && file.size > MAX_SIZE) {
    showError("File too large. Please upload a photo under 500KB.");
    resetImage();
    return false;
  }
  clearError();
  return true;
}

function validateFullName() {
  if (!fullName.value.trim()) {
    fullName.classList.add("error-border");
    return false;
  }
  fullName.classList.remove("error-border");
  nameSpan.textContent = fullName.value;
  nameSpan2.textContent = fullName.value;
  return true;
}

function validateEmail() {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email.value.trim() || !emailRegex.test(email.value)) {
    emailError.classList.add("error");
    emailError.classList.remove("hidden");
    email.classList.add("error-border");
    return false;
  }
  emailError.classList.add("hidden");
  email.classList.remove("error-border");
  emailSpan.textContent = email.value;
  return true;
}

function validateGitHub() {
  if (!gitHub.value.trim()) {
    gitHub.classList.add("error-border");
    return false;
  }
  gitHub.classList.remove("error-border");
  gitHubSpan.textContent = gitHub.value;
  return true;
}

// check on blur
fullName.addEventListener("blur", validateFullName);
email.addEventListener("blur", validateEmail);
gitHub.addEventListener("blur", validateGitHub);

// submit
ticketForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const valid =
    validateAvatar() &&
    validateFullName() &&
    validateEmail() &&
    validateGitHub();

  if (valid) {
    formSection.classList.add("hidden");
    ticketSection.classList.remove("hidden");
  }
});

const inputs = ticketForm.querySelectorAll("input:not([type=submit])");
inputs.forEach((input, i) => {
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const next = inputs[i + 1];
      if (next) {
        next.focus();
      } else {
        ticketForm.querySelector("[type=submit]").focus();
      }
    }
  });
});

// ticket section

const today = new Date();
date.textContent = today.toLocaleDateString("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});
// Id
idSpan.textContent = `#${Date.now().toString().slice(-5)}`;
