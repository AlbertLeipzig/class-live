function logger(level) {
  return function (message) {
    console.log(`[${level}] ${message}`);
  };
}

const infoLogger = logger('INFO');
const errorLogger = logger('ERROR');

infoLogger('This is an informational message.');
errorLogger('An error occurred!');
