import passport from 'passport'
import { HeaderAPIKeyStrategy } from 'passport-headerapikey'

passport.use(new HeaderAPIKeyStrategy(
  { header: 'Authorization', prefix: 'Api-Key ' },
  false,
  function (apikey, done) {
    if (apikey === process.env.API_TOKEN) return done(null, { scope: 'all' })
    else {
      console.log('Unauthorized API access')
      return done(null, false)
    }
  }
))

export default passport.authenticate('headerapikey', { session: false })
