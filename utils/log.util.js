const fs = require('fs');

exports.routesLog = (data) => {
  fs.appendFile(
    __dirname + '/../routes.log',
    `${data} \n`,
    function (err) {
      if (err) {
        console.log(err);
      }
    }
  );
};

exports.errorLog = (error) => {
  fs.appendFile(
    __dirname + '/../errors.log',
    `${error} \n`,
    function (err) {
      if (err) {
        console.log(err);
      }
    }
  );
};