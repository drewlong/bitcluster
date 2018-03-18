# Bitcluster

Bitcluster is a simple wrapper for Crypto-JS that makes client-side encryption painless, and validation easier.

Install: 

`npm install --save bitcluster`

To encrypt: 
```
// using node 

var Bitcluster = require('bitcluster')

// or React: 

import Bitcluster from 'bitcluster';

var obj = {
  data: 'whatever data you'd like to encrypt',
  key: 'your super secret password'
}

var res = Bitcluster.encrypt(obj)

// returns: 
{
  pub_key: 'The public key',
  priv_key: 'The private key',
  hash: 'The hash used to verify contents when decrypting'
}
```

To decrypt: 
```
// using node 

var Bitcluster = require('bitcluster')

// or React: 

import Bitcluster from 'bitcluster';

var obj = {
  pub_key: 'The public key',
  priv_key: 'The private key',
  hash: 'The hash used to verify contents when decrypting',
  pass: 'super secret password'
}

var res = Bitcluster.decrypt(obj)

// returns: 
{
  data: 'whatever you encrypted',
  status: 'OK'
}

```

It's  as simple as that: completely client-side encryption.
