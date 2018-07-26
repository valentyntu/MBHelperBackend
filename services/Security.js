const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');
const client = jwksClient({
    jwksUri: 'https://mbhelper.eu.auth0.com/.well-known/jwks.json'
});

function getKey(header, callback) {
    client.getSigningKey(header.kid, function (err, key) {
        let signingKey = key.publicKey || key.rsaPublicKey;
        callback(null, signingKey);
    });
}


function requireAuth(req, res, next) {
    console.log(JSON.stringify(req.headers));
    if (!req.headers.authorization) {
        return res.status(401).send('No token provided');
    }
    let owner = jwt.decode(req.headers.authorization);
    if (owner) {
        req.owner = owner;
        next();
    }
    else {
        return res.status(403).send('Invalid token');
    }
};

module.exports = requireAuth;