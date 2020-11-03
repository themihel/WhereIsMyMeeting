# Where is my meeting?
Where is my Meeting? is a small chrome-extension which helps you to navigate through the large amount of tabs to find your online meetings (e.g. Google Meet).
With one click on the extension and a further click on the corresponding meeting you will get directly to the right tab!
In such volatile and hard times like this, this lightweight extension just wants to make your life a bit easier and save you time.

## Features
- List all open Google Meet tabs
- Navigate directly to the clicked tab
- Privacy friendly: No data is tracked or sent anywhere
- Dark Mode: Recognize user selected theme and adapt popup styling accordingly
- Possibility to track other online meeting providers (Google Meet, Zoom, Microsoft Teams, Jitsi)

### Planned Features
These features are currently in development and planning. Help appreciated.
- Add more meetings providers
- Mute meetings
- Mute microphone
- Possibility to group meetings
- Settings: Add matching patterns for own online meeting providers (e.g. company internal software)
- Settings: Select meeting providers to check against (possibility to disable)
- Settings: Select your own theme
- Parse meta information to show more information which is maybe not given in the tab title
- Internationalization
- Mute microphone and/or audio via plugin
- Leave call
- Missing anything or having any ideas? Contact me!

## Why does Where is my Meet(ing)? need permission to "Read your browsing history"?
To check all open tabs I need the permission “tabs” within the extension configuration. The tabs are only checked against URL patterns of the above specified online meeting providers. Nothing else is done with your data, I promise! Also the code of this extension will soon be open-sourced so you can have a closer look into it.

## Rating
If you like this extension and use it, please give it a small rating in the chrome web store and spread the word!

## Contribution
Pull-Request are always welcome. Please make sure you respect the small amount of coding standard defined in the `.github/linters` folder.

Before your pull-request can be merged, the action (linter) must be green.