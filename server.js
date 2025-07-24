var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
var helmet = require('helmet')
var compression = require('compression')

var app = express()
// Middleware
app.use(compression())
app.use(helmet())
app.use(helmet.frameguard({ action: 'sameorigin' }))
app.use(
    helmet.contentSecurityPolicy({
        directives: {
            "script-src": ["'self'", "'unsafe-eval'", "nosaobaseki.com", "c0depanda.com"],
            "frame-ancestors": ["'self'", "nosaobaseki.com", "c0depanda.com"],
            "img-src": ["'self'", "nosaobaseki.com", "c0depanda.com"],
            "style-src": ["'self'", "nosaobaseki.com", "c0depanda.com", "fonts.googleapis.com"],
            "font-src": ["'self'", "nosaobaseki.com", "c0depanda.com", "fonts.googleapis.com", "fonts.gstatic.com", 'data:' ],
        },
    })
);
app.use("/", serveStatic(path.join(__dirname, '/dist'), {
    maxAge: '1d',
    setHeaders: (res, path) => {
        // Cache JavaScript and CSS files for longer
        if (path.endsWith('.js') || path.endsWith('.css')) {
            res.setHeader('Cache-Control', 'public, max-age=31536000')
        }
        // Cache images for a week
        if (path.match(/\.(jpg|jpeg|png|gif|ico|svg)$/)) {
            res.setHeader('Cache-Control', 'public, max-age=604800')
        }
    }
}))

// Catch all routes and redirect to index
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'))
})

var port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Server started on port ' + port)
})
console.log('server started ' + port)
