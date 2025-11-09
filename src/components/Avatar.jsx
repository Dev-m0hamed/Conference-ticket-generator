import { useDropzone } from "react-dropzone";
import { useCallback } from "react";
import uploadIcon from "../assets/icon-upload.svg";

function Avatar({preview, setPreview, error, setError}) {

  const MAX_SIZE = 500 * 1024;

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (rejectedFiles.length > 0) {
      setError("File too large. Please upload a photo under 500KB.");
      return;
    }
    const file = acceptedFiles[0];
    const url = URL.createObjectURL(file);
    setPreview(url);
    setError("");
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/png": [], "image/jpeg": [] },
    maxSize: MAX_SIZE,
    multiple: false,
    onDrop,
  });
  return (
    <>
      <label htmlFor="avatar" className="block text-lg mb-2">
        Upload Avatar
      </label>
      <div
        {...getRootProps()}
        className="input h-25 p-4 border-2 border-dashed border-neutral-700"
        tabIndex="0"
        aria-describedby="avatarMessage"
        role="button"
      >
        <input
          {...getInputProps()}
          id="avatar"
          name="avatar"
          type="file"
          aria-required="true"
          hidden
        />
        <div className="text-center">
          <img
            src={preview ? preview : uploadIcon}
            alt="upload-icon"
            className={`inline w-10 h-10 bg-white/20 rounded-xl ${
              preview && "outline-1 outline-neutral-500"
            }`}
          />
          {!preview ? (
            <p className="text-neutral-500 mt-2">
              Drag and drop or click to upload
            </p>
          ) : (
            <div className="mt-2 text-center text-sm">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setPreview(null);
                }}
                type="button"
                aria-label="Remove uploaded image"
                className="bg-white/10 border-none text-neutral-300 rounded-md py-0.5 px-1 cursor-pointer mr-2"
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
          )}
        </div>
      </div>
      <div
        className={`flex items-center text-xs mt-2 ${
          !error ? "text-neutral-500" : "text-[#DC3545]"
        }`}
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
        <span aria-live="polite">
          {!error ? "Upload your photo (JPG or PNG, max size: 500KB)" : error}
        </span>
      </div>
    </>
  );
}

export default Avatar;
