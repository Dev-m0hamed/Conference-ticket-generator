import uploadIcon from "../assets/icon-upload.svg";

function Avatar() {
  return (
    <>
      <label htmlFor="avatar" className="block text-lg mb-2">
        Upload Avatar
      </label>
      <div
        className="input h-25 p-4 border-2 border-dashed border-neutral-700"
        id="dropZone"
        tabIndex="0"
        aria-describedby="avatarMessage"
        role="button"
      >
        <input
          id="avatar"
          name="avatar"
          type="file"
          accept="image/png, image/jpeg"
          aria-required="true"
          hidden
        />
        <div className="text-center">
          <img
            src={uploadIcon}
            alt="upload-icon"
            id="uploadImg"
            className="inline w-10 h-10 bg-white/20 p-2 rounded-xl"
          />
          <p id="inputText" className="text-neutral-500 mt-2">
            Drag and drop or click to upload
          </p>
        </div>
        <div id="controlImg" className="hidden mt-2 text-center text-sm">
          <button
            id="removeImg"
            type="button"
            aria-label="Remove uploaded image"
            className="bg-white/10 border-none text-neutral-300 rounded-md py-0.5 px-1 cursor-pointer"
          >
            Remove image
          </button>
          <button
            type="button"
            aria-label="Change uploaded image"
            className="bg-white/10 border-none text-neutral-300 rounded-md py-0.5 px-1 cursor-pointer"
          >
            Change image
          </button>
        </div>
      </div>
      <div
        id="hint"
        className="flex items-center text-xs mt-2 text-neutral-500"
      >
        <svg
          className="mr-1"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 16 16"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"
          />
          <path fill="currentColor" d="M8.004 10.462V7.596ZM8 5.57v-.042Z" />
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.004 10.462V7.596M8 5.569v-.042"
          />
        </svg>
        <span id="avatarMessage" aria-live="polite">
          Upload your photo (JPG or PNG, max size: 500KB)
        </span>
      </div>
    </>
  );
}

export default Avatar;
