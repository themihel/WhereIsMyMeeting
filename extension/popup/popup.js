import {isMeeting} from "../core/core.js";

// main popup dom elements
const tabsContainer = document.getElementById('meetings');
const placeholder = document.getElementById('placeholder');

// Localize popup
internationalization();

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
    meetingButtonText.innerText = title;
    meetingButton.appendChild(meetingButtonText);

    // add open functionality to element
    meetingButton.onclick = function () {
        chrome.windows.update(windowId, {focused: true});
        chrome.tabs.update(tabId, {selected: true});
    };

    tabsContainer.appendChild(meetingButton);
}

function internationalization () {
    document.querySelectorAll('[data-locale]').forEach(elem => {
        elem.innerText = chrome.i18n.getMessage(elem.dataset.locale)
    });
}