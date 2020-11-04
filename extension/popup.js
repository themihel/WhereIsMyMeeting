// List of meetings to match against to
const matchPatternArray = [
    new RegExp('meet.google.com/'),
    new RegExp('teams.microsoft.com/'),
    new RegExp('zoom.us/'),
    new RegExp('meet.jit.si/'),
];

// main popup dom elements
const tabsContainer = document.getElementById('meetings');
const placeholder = document.getElementById('placeholder');

// Iterate through all windows and all tabs to check if there are open meetings
chrome.windows.getAll({populate: true}, function (windows) {
    windows.forEach(function (window) {
        window.tabs.forEach(function (tab) {
            if (isMeeting(tab.url)) {
                // only remove placeholder once
                if (!placeholder.classList.contains('hidden')) {
                    placeholder.classList.add('hidden');
                }

                // render entry in result list
                renderEntry(window.id, tab.id, tab.title, tab.favIconUrl);
            }
        });
    });
});

// match tab url against regex of given meeting patterns
function isMeeting(tabUrl) {
    for (let i = 0; i < matchPatternArray.length; i ++) {
        if (matchPatternArray[i].test(tabUrl)) {
            return true;
        }
    }

    return false;
}

// render result in meetings list
function renderEntry(windowId, tabId, title, favIconUrl) {
    // create elements
    let meetingButton = document.createElement('div');
    meetingButton.className = 'meetingButton';

    // add innerElements
    let meetingButtonImage = document.createElement('img');
    meetingButtonImage.src = favIconUrl;
    meetingButton.appendChild(meetingButtonImage);

    let meetingButtonText = document.createElement('span');
    meetingButtonText.innerHTML = title;
    meetingButton.appendChild(meetingButtonText);

    // add open functionality to element
    meetingButton.onclick = function () {
        chrome.windows.update(windowId, {focused: true});
        chrome.tabs.update(tabId, {selected: true});
    };

    tabsContainer.appendChild(meetingButton);
}