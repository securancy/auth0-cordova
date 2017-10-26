function BrowserTab() {
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
}

BrowserTab.isAvailable = function (callback) {
    callback(window.cordova.plugins.browsertab != undefined);
};

BrowserTab.prototype.open = function (url, handler) {
    var browser = window.cordova.plugins.browsertab;
    var tab = browser.openUrl(
        url,
        function (successResp) {
            handler(null, { event: 'loaded' });
        },
        function (failureResp) {
            handler(e, null);
        }
    );
};

BrowserTab.prototype.close = function () {
    window.cordova.plugins.browsertab.close();
};

module.exports = BrowserTab;
