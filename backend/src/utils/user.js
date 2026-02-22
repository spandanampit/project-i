function toSessionUser(user) {
  return {
    id: user._id.toString(),
    fullName: user.fullName,
    academyName: user.academyName,
    email: user.email,
  };
}

module.exports = {
  toSessionUser,
};
