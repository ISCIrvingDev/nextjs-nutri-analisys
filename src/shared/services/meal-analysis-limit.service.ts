const key = "count";

/**
 * Retrieves the current upload count from local storage and returns it as an object with a `count` property.
 * @returns {{ count: number }} An object containing the current upload count.
 */
export function checkUploadLimit() {
  const count = Number(localStorage.getItem(key) || 0);

  return { count };
}

/**
 * Increments the upload count stored in localStorage by 1.
 */
export function incrementUploadCount() {
  const count = Number(localStorage.getItem(key) || 0);

  localStorage.setItem(key, String(count + 1));
}
