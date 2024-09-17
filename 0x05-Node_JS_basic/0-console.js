/**
 * Displays a message on the STDOUT.
 * @param {String} msg The message to display.
 */
const displayMessage = (msg) => {
  process.stdout.write(msg);
};

module.exports = displayMessage;
