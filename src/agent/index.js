var BrowserAgent = require('./browser');
var WebViewAgent = require('./webview');
var BrowserTab = require('./browsertab');

module.exports = function getAgent(callback) {
    return BrowserAgent.isAvailable(function (available) {
        if (available) {
            return callback(null, new BrowserAgent());
        }
        return BrowserTab.isAvailable(function (available) {
            if (available) {
                return callback(null, new BrowserTab());
            }
            return callback(null, new WebViewAgent());
        })
    });
};
