const regex = {
  EMAIL: new RegExp('[^\\.\\s@:](?:[^\\s@:]*[^\\s@:\\.])?@[^\\.\\s@]+(?:\\.[^\\.\\s@]+)*'),
  PASSWORD_WITH_SPECIAL_CHAR:
    /(?=(.*[0-9]))(?=.*[!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/, // Should have 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and be at least 8 characters long
  PASSWORD_WITHOUT_SPECIAL_CHAR: '/(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/', // Should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long
  USERNAME: /^[a-z0-9_-]{3,16}$/, // that may include _ and – having a length of 3 to 16 characters –
  SLUG: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
  PASSPORT: /^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/,
  PHONE_NUMBER: /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/,
  ZIP_CODE: /^\d{5}(?:[-\s]\d{4})?$/,
  NUMBER_COMMA_DOT: new RegExp(/^[0-9]*([.|,][0-9]*)?$/),
};

export default regex;
