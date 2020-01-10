const PROXY_CONFIG = [
    {
        context: [
            "/comandas"
        ],
        target: "http://localhost:3000",
        secure: false
    },
    {
        context: [
            "/comandas/*"
        ],
        target: "http://localhost:3000",
        secure: false
    }
  ]
  
  module.exports = PROXY_CONFIG;