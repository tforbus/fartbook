chrome.extension.onMessage.addListener(function (req, sender, sendResponse) {
    chrome.pageAction.show(sender.tab.id);
    sendResponse();
});