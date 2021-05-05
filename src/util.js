export const areAllFieldsValid = (...properties) => {
  let isValid = true;
  properties.forEach((property) => {
    if (!property) {
      isValid = false;
    }
  });
  return isValid;
};

export default function abc() {
  return "PG is a good Girl";
}
