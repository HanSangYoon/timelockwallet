module.exports = {
  networks: {
    ganache: {
      host: "localhost",
      port: 7545,
      network_id: "*" // Match any network id
    },
    development: {
      host: "localhost",
      port: 9545,
      network_id: "*" // Match any network id
    }    
  }
};
