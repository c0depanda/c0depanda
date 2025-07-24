var express = require('express')
var path = require('path')
var fs = require('fs')
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
            "img-src": ["'self'", "data:", "nosaobaseki.com", "c0depanda.com"],
            "style-src": ["'self'", "'unsafe-inline'", "nosaobaseki.com", "c0depanda.com", "fonts.googleapis.com"],
            "font-src": ["'self'", "nosaobaseki.com", "c0depanda.com", "fonts.googleapis.com", "fonts.gstatic.com", 'data:' ],
        },
    })
);

// Serve static files from multiple locations
app.use('/static', express.static(path.join(__dirname, 'static')))
app.use('/static', express.static(path.join(__dirname, 'dist/static')))

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

// CV download route
app.get('/cv', (req, res) => {
    const cvPath = path.join(__dirname, 'static', 'NosaObasekiCV.pdf')
    res.download(cvPath, 'NosaObasekiCV.pdf', (err) => {
        if (err) {
            console.error('Error downloading CV:', err)
            res.status(404).send('CV not found')
        }
    })
})

// Catch all routes and redirect to index (must be last)
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'))
})

var port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Server started on port ' + port)
})
