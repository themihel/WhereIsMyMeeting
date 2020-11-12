const core = require('../extension/core/core.js');

describe("Check isMeeting", () => {
    test("it correctly check against the Google Meet", () => {
        const url = 'https://meet.google.com/abc-def-ghi';

        expect(core.isMeeting(url)).toEqual(true)
    });
});