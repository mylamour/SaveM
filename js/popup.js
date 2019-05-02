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

$('#read').click(() => {
	getCurrentTabId((tabId) => {
		chrome.tabs.executeScript(tabId, { file: './js/clean.js' });
	});
});

$('#save').click(() => {
	getCurrentTabId((tabId) => {
		chrome.tabs.executeScript(tabId, { file: './js/clean.js' });
});
});