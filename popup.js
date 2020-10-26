const matchPattern = new RegExp('meet\.google\.com\/');
const tabsContainer = document.getElementById('meetings');

let meetingCounter = 0;

chrome.windows.getAll({populate: true}, function (windows) {
    windows.forEach(function (window) {
        window.tabs.forEach(function (tab) {
            if (matchPattern.test(tab.url)) {
                if (meetingCounter === 0) {
                    let placeholder = document.getElementById('placeholder');
                    placeholder.classList.add('hidden');
                }

                let meetingButton = document.createElement('div');
                meetingButton.className = 'meetingButton';

                // add innerElements
                let meetingButtonImage = document.createElement('img');
                meetingButtonImage.src = tab.favIconUrl;
                meetingButton.appendChild(meetingButtonImage);

                let meetingButtonText = document.createElement('span');
                meetingButtonText.innerHTML = tab.title;
                meetingButton.appendChild(meetingButtonText);

                // add open functionality to element
                meetingButton.onclick = function () {
                    chrome.windows.update(window.id, {focused: true});
                    chrome.tabs.update(tab.id, {selected: true});
                };

                tabsContainer.appendChild(meetingButton);

                meetingCounter = meetingCounter + 1;
            }
        });
    });
});