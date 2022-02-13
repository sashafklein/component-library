/**
 * Determine if a given path is an absolute URL or just an internal path.
 * From: https://stackoverflow.com/a/19709846/1408935
 */
export const isAbsoluteURL = (path: string): boolean => {
  const r = new RegExp("^(?:[a-z]+:)?//", "i");
  return r.test(path);
};
