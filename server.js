var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
var helmet = require('helmet')

var app = express()
// Middleware
app.use(helmet())
app.use(helmet.frameguard({ action: 'sameorigin' }))
app.use(
    helmet.contentSecurityPolicy({
        directives: {
            "script-src": ["'self'", "nosaobaseki.com", "c0depanda.com"],
            "img-src": ["'self'", "nosaobaseki.com", "c0depanda.com"],
            "style-src": ["'self'", "nosaobaseki.com", "c0depanda.com", "fonts.googleapis.com"],
            "font-src": ["'self'", "nosaobaseki.com", "c0depanda.com", "fonts.googleapis.com"],
        },
    })
);
app.use("/", serveStatic(path.join(__dirname, '/dist')))

// Catch all routes and redirect to index
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/dist/index.html')
})

var port = process.env.PORT || 3000
app.listen(port)
console.log('server started ' + port)
