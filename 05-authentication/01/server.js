const sessionSecret = process.env.SESSION_SECRET || 'mark it zero'
const adminPassword = process.env.ADMIN_PASSWORD || 'iamthewalrus'
passport.use(

    new Strategy(function(username, password, cb) {

        const isAdmin = (username === 'admin') && (password === adminPassword)

        if (isAdmin) cb(null, { username: 'admin' })

        cb(null, false)

    })

)
passport.serializeUser((user, cb) => cb(null, user))

passport.deserializeUser((user, cb) => cb(null, user))
app.use(cookieParser())

app.use(

    expressSession({

        secret: sessionSecret,

        resave: false,

        saveUninitialized: false

    })

)