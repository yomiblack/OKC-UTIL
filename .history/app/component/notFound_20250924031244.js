export default function NotFound() {
  return (
    <>
      <div class="flex items-center justify-center h-screen bg-orange-50">
        <div class="text-center px-6 py-8 bg-white rounded-lg shadow-md">
          <div class="text-orange-500 text-6xl mb-4">
            {/* <!-- Optional: Icon to visually indicate an error --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-12 h-12 mx-auto"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.212 0 1.816-1.458.937-2.27L13.937 9.27a1.5 1.5 0 00-2.874 0l-5.828 8.46c-.878.812-.275 2.27.937 2.27z"
              />
            </svg>
          </div>
          <p class="text-2xl font-semibold text-gray-800 mb-2">
            File Not Found!
          </p>
          <p class="text-gray-600">
            The file you&apos;re looking for could not be located in our database.
            Please check the details and try again.
          </p>
        </div>
      </div>
    </>
  );
}
