const core = require("../extension/core/core.js");

describe("Test 'isMeeting' functionality", () => {
  describe("-> Test positive cases", () => {
    test("it correctly checks against 'Google Meet' urls", () => {
      const url = "https://meet.google.com/abc-def-ghi";

      expect(core.isMeeting(url)).toBeTruthy();
    });

    test("it correctly checks against 'Zoom' urls", () => {
      const url = "https://zoom.us/j/123456?pwd=ab12cd34ef";

      expect(core.isMeeting(url)).toBeTruthy();
    });

    test("it correctly checks against 'Microsoft Teams' urls", () => {
      const url =
        "https://teams.microsoft.com/_#/pre-join-calling/19:meeting_ABCDED1235@thread.v2";

      expect(core.isMeeting(url)).toBeTruthy();
    });

    test("it correctly checks against 'Microsoft Teams' (company) urls", () => {
      const url =
        "https://teams.microsoft.com.somedomain.tld/_#/pre-join-calling/19:meeting_ABCDED1235@thread.v2";

      expect(core.isMeeting(url)).toBeTruthy();
    });

    test("it correctly checks against 'Jitsi' urls", () => {
      const url = "https://meet.jit.si/whereismymeeting";

      expect(core.isMeeting(url)).toBeTruthy();
    });

    test("it correctly checks against 'Webex' urls", () => {
      const url = "https://webex.com/meeting123";

      expect(core.isMeeting(url)).toBeTruthy();
    });

    test("it correctly checks against 'BlueJeans' urls", () => {
      const url = "https://bluejeans.com/1234567890";

      expect(core.isMeeting(url)).toBeTruthy();
    });

    test("it correctly checks against 'Whereby' urls", () => {
      const url = "https://whereby.com/whereismymeeting";

      expect(core.isMeeting(url)).toBeTruthy();
    });

    test("it correctly checks against 'UberConference' urls", () => {
      const url = "https://uberconference.com/whereismymeeting";

      expect(core.isMeeting(url)).toBeTruthy();
    });
  });

  describe("-> Test negative cases", () => {
    test("it correctly classifies normal websites", () => {
      const url = "https://themihel.me";

      expect(core.isMeeting(url)).toBeFalsy();
    });
  });
});
