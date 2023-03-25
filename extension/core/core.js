const matchPatternArray = [
  new RegExp("meet.google.com"),
  new RegExp("teams.microsoft.com"),
  new RegExp("zoom.us"),
  new RegExp("meet.jit.si"),
  new RegExp("webex.com"),
  new RegExp("bluejeans.com"),
  new RegExp("whereby.com"),
  new RegExp("uberconference.com"),
  new RegExp("join.skype.com"),
];

// match tab url against regex of given meeting patterns
function isMeeting(tabUrl) {
  for (let i = 0; i < matchPatternArray.length; i++) {
    if (matchPatternArray[i].test(tabUrl)) {
      return true;
    }
  }

  return false;
}

export { isMeeting };
