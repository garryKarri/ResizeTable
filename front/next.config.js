const withLess = require("next-with-less");


module.exports = withLess({
  lessLoaderOptions: {
    lessOptions: {
      modifyVars:{
        "@grid-columns": "30"
      }
    }
    
  },
});