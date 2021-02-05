const matchPatternArray = [
    new RegExp('meet.google.com/'),
    new RegExp('teams.microsoft.com/'),
    new RegExp('zoom.us/'),
    new RegExp('meet.jit.si/'),
];

// match tab url against regex of given meeting patterns
function isMeeting (tabUrl) {
    for (let i = 0; i < matchPatternArray.length; i++) {
        if (matchPatternArray[i].test(tabUrl)) {
            return true;
        }
    }

    return false;
}

export { isMeeting };