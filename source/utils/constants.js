// regular expression for test string contain 'https://'
export const URL_REGEX = /^https?:\/\//i;
export const CHECK_URL_REGEX = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
export const CHECK_EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/i;

export const EMAIL_REQUIRED = 'Email is required';
export const INVALID_EMAIL = 'Invalid email address';
export const PASSWORD_REQUIRED = 'Password is required';

export const BASE_URL = 'https://reqres.in/';
