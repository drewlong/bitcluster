class BitCluster{
  static encrypt(args){
    if(typeof args === "undefined" || typeof args.data === "undefined" || typeof args.key === "undefined"){
      return("Password/Data cannot be null")
    }else{
      var Crypto = require('crypto-js')

      let key = args.key
      let data = args.data
      let k1 = String(Crypto.SHA1(key+data))
      let hash = String(Crypto.SHA1(Crypto.SHA3(data)))
      let pubkey = String(Crypto.AES.encrypt(k1, key))
      let privkey = String(Crypto.AES.encrypt(data, k1))
      let obj = {
        pub_key: pubkey,
        priv_key: privkey,
        hash: hash
      }
      return obj
    }
  };
  static decrypt(args){
    if(typeof args === "undefined" || typeof args.pub_key === "undefined" || typeof args.priv_key === "undefined" || typeof args.pass === "undefined" || typeof args.hash === "undefined"){
      return("Password/Data cannot be null")
    }else{
      var Crypto = require('crypto-js')

      let pubkey   = args.pub_key
      let privkey  = args.priv_key
      let pass     = args.pass
      let hash     = args.hash
      var k1_bytes = Crypto.AES.decrypt(pubkey, pass);
      let k1       = k1_bytes.toString(Crypto.enc.Utf8);
      let d1_bytes = Crypto.AES.decrypt(privkey, k1)
      let d1       = d1_bytes.toString(Crypto.enc.Utf8);
      let comp_sha = String(Crypto.SHA1(Crypto.SHA3(d1)))

      if(hash === comp_sha){
        return {data: d1, status: "OK"}
      }else{
        return {data: null, status: "Something isn't right.\nCheck your password, public key, private key, and hash and try again."}
      }
    }
  }
}

module.exports = BitCluster
