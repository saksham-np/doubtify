passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, async (email, password, done) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return done(null, false, { message: 'Invalid email or password' });
    }
    const isValid = await user.comparePassword(password);
    if (!isValid) {
      return done(null, false, { message: 'Invalid email or password' });
    }
    return done(null, user);
  } catch (error) {
    return done(error);
  }
}));

passport.serializeUser ((user, done) => {
  done(null, user.id);
});

passport.deserializeUser ((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});