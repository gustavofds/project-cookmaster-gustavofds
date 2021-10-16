const { INVALID_ENTRIES, DUPLICITY_EMAIL,
  FILLED_FIELDS, INCORRECT_LOGIN } = require('./errorMessages');
const { BAD_REQUEST, CONFLICT, UNAUTHORIZED } = require('./statusClientErrors');

const badRequest = { status: BAD_REQUEST, message: { message: INVALID_ENTRIES } };
const conflict = { status: CONFLICT, message: { message: DUPLICITY_EMAIL } };
const filledFields = { status: UNAUTHORIZED, message: { message: FILLED_FIELDS } };
const incorrectLogin = { status: UNAUTHORIZED, message: { message: INCORRECT_LOGIN } };

module.exports = {
  badRequest,
  conflict,
  filledFields,
  incorrectLogin,
};