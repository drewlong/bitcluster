var BitCluster = require('./index.js')

let res = BitCluster.decrypt(
  {
  pub_key: 'U2FsdGVkX1+Q5reu0Y40524qvyTvXmWoaS74JeFXdjqG9JoMUvncHC/DYjhMVfhmbLMLidfp9AN5yG7tbjR7Fw==',
  priv_key: 'U2FsdGVkX1+xAM2+bmrl6rW25rdQJm/3CLcqWsa/SIc=',
  hash: 'beb4dde3f7d32058887a67a6eb935b79bd4a69cd',
  pass: 'test'
}
)
console.log(res.data)
