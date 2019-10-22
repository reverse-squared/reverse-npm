/**
 * Checks if a email is a valid formatted email.
 */
export function isValidEmail(email: string) {
  if(typeof email !== 'string') {
    throw new TypeError('Email must be typeof string.');
  }

  // eslint-disable-next-line max-len
  return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email);
}
