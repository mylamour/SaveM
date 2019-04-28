function getCurrentTabId(callback) {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		if (callback) callback(tabs.length ? tabs[0].id : null);
	});
}

function executeScriptToCurrentTab(code) {
	getCurrentTabId((tabId) => {
		chrome.tabs.executeScript(tabId, { code: code });
	});
}

$('#clean_page').click(() => {

	getCurrentTabId((tabId) => {
		chrome.tabs.executeScript(tabId, { file: './js/clean.js' });

	});
});