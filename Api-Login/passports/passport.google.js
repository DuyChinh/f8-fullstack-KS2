var GoogleStrategy = require("passport-google-oauth20").Strategy;
const  { Provider, User} = require("../models/index");
module.exports = new GoogleStrategy(
  {
    clientID:
      "643967300524-4otjtvg2harspbg07dr6pq2om259io4j.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3000/auth/google/callback",
    scope: ["profile", "email"],
  },
  async function (accessToken, refreshToken, profile, done) {
    console.log(profile);
    // console.log("access token", accessToken);
    const {
      displayName: name,
      emails: [{ value: email }],
      photos: [{ value: urlAvatar }],
    } = profile;
    const [provider] = await Provider.findOrCreate({
      where: {
        name: "google",
      },
      defaults: {
        name: "google",
      },
    }); //return array -> destruc object

    const [user] = await User.findOrCreate({
      where: { email, provider_id: provider.id },
      defaults: {
        name,
        email,
        provider_id: provider.id,
        status: true,
        urlAvatar,
      },
    });
    return done(null, user);
    //save user in session
  }
);


