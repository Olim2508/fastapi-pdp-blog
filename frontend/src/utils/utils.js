

export const getFieldError = (fieldName, error) => {
  if (error) {
    if (fieldName in error) {
      return error[fieldName][0];
    }
  }
  return null;
};
