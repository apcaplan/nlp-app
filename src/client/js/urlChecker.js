function checkUrl(input) {
  const regex = /^https?:\/\/\w/;
  return regex.test(input);
}

export { checkUrl };
