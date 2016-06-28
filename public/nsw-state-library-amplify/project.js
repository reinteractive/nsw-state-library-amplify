window.PROJECT = {"name":"State Library of New South Wales - Amplify","description":"Help the State Library of New South Wales transcribe its Rainbow Archives collection!","logo":"/nsw-state-library-amplify/assets/img/logo.png","apiUrl":"","useVendorAudio":true,"transcriptsPerPage":500,"maxLineTimeOverlapMs":-1,"allowTranscriptDownload":true,"gaCode":"","adminEmails":["glen.crawford@reinteractive.net"],"authProviders":[{"name":"google","label":"Google","path":"/auth/google_oauth2"},{"name":"facebook","label":"Facebook","path":"/auth/facebook"}],"consensus":{"maxLineEdits":5,"minLinesForConsensus":3,"minLinesForConsensusNoEdits":5,"minPercentConsensus":0.34,"lineDisplayMethod":"guess","superUserHiearchy":50},"menus":{"header":[{"label":"Browse","url":"/"},{"label":"Search","url":"/search"},{"label":"About","url":"/page/about"},{"label":"FAQ","url":"/page/faq"},{"label":"Tutorial","url":"#tutorial","modal":"tutorial_edit","validRoutes":["transcripts/:id"]}],"footer":[{"label":"Privacy","url":"http://www.sl.nsw.gov.au/privacy","target":"_blank"},{"label":"Copyright","url":"http://www.sl.nsw.gov.au/copyright","target":"_blank"},{"label":"Client Code of Conduct","url":"http://www.sl.nsw.gov.au/about-library-legislation-and-policies/client-code-conduct","target":"_blank"},{"label":"Feedback","url":"http://www.sl.nsw.gov.au/feedback","target":"_blank"}]},"modals":{"tutorial_edit":{"title":"Transcript Editor Tutorial","displayMethod":"once","doneLabel":"Finished","pages":[{"label":"Editing","file":"ed_tutorial_1.md"},{"label":"Conventions","file":"ed_tutorial_2.md"},{"label":"Commands","file":"ed_tutorial_3.md"},{"label":"Speaker Identification","file":"ed_tutorial_4.md"},{"label":"Verify","file":"ed_tutorial_5.md"},{"label":"Have fun!","file":"ed_tutorial_6.md"}]}},"controls":[{"id":"toggle-play","action":"lineToggle","label":"Play/Pause","keyCode":32,"key":"[shift] + [space]","keyLabel":"Shift + Space Bar","keyDescription":"Hold shift and press space bar to play, pause, or re-play a line","shift":true},{"id":"next-line","action":"lineNext","label":"Next Line","keyCode":[13,40],"key":"[\u0026#8595;] OR [enter]","keyLabel":"Down Arrow or Enter Key","keyDescription":"Press the down arrow key or enter to go to next line"},{"id":"previous-line","action":"linePrevious","label":"Prev Line","keyCode":38,"key":"\u0026#8593;","keyLabel":"Up Arrow","keyDescription":"Press the up arrow key to go to previous line"},{"id":"previous-word","action":"wordPrevious","label":"Prev Word","keyCode":37,"key":"[shift] + [\u0026#8592;]","keyLabel":"Shift + Left Arrow","keyDescription":"Hold shift and press the left arrow key to move to previous word","shift":true},{"id":"next-word","action":"wordNext","label":"Next Word","keyCode":39,"key":"[shift] + [\u0026#8594;]","keyLabel":"Shift + Right Arrow","keyDescription":"Hold shift and press the right arrow key to move to next word","shift":true}],"pages":{"about.md":"\u003ch1\u003eAbout\u003c/h1\u003e\n\n\u003cp\u003eContent here (you can use \u003ca href=\"https://daringfireball.net/projects/markdown/syntax\"\u003eMarkdown\u003c/a\u003e).\u003c/p\u003e\n\n\u003cp\u003e\u003cimg src=\"/nsw-state-library-amplify/assets/img/new_york_public_library.jpg\" alt=\"New York Public Library\"\u003e\n\u003cimg src=\"/nsw-state-library-amplify/assets/img/voice_base.png\" alt=\"VoiceBase\"\u003e\u003c/p\u003e\n","ed_tutorial_1.md":"\u003ch1\u003eWelcome!\u003c/h1\u003e\n\n\u003cp\u003eThe transcript you are about to read was computer generated using speech-to-text software, so there are probably errors. This tool will allow you to listen to the oral history while you edit its transcript. Here\u0026#39;s an example:\u003c/p\u003e\n\n\u003cvideo src=\"https://s3.amazonaws.com/togetherwelisten.nypl.org/video/twl_sample.mp4\" preload=\"auto\" class=\"toggle-sound sample-video\" autoplay loop muted poster=\"https://s3.amazonaws.com/togetherwelisten.nypl.org/img/twl_sample.png\"\u003e\u003c/video\u003e\n\n\u003cp class=\"caption\"\u003eAn example of how the transcript editor works (click for sound)\u003c/p\u003e\n\n\u003cp\u003e\u003cspan class=\"highlight\"\u003eAll your edits will be automatically saved\u003c/span\u003e but may not be immediately visible by others. Once three or more people have transcribed – and agreed – on the text for an individual line it will be visible to all but no longer editable and will then become part of our official transcript.\u003c/p\u003e\n","ed_tutorial_2.md":"\u003ch1\u003eTranscription Conventions\u003c/h1\u003e\n\n\u003cp\u003eWe have one central guideline:\n\u003cstrong class=\"highlight\"\u003eUse your best judgment to transcribe as you hear it.\u003c/strong\u003e\u003c/p\u003e\n\n\u003cp\u003eFor common tricky transcriptions, we have a handy list of conventions. Quickly access this reference by selecting the Conventions button on the top of the page.\u003c/p\u003e\n\n\u003cvideo src=\"https://s3.amazonaws.com/togetherwelisten.nypl.org/video/twl_sample_conventions.mp4\" preload=\"auto\" class=\"toggle-sound sample-video\" autoplay loop muted\u003e\u003c/video\u003e\n","ed_tutorial_3.md":"\u003ch1\u003eCommands\u003c/h1\u003e\n\n\u003cp\u003eUse the tool\u0026#39;s commands navigate the interview\u0026#39;s audio and transcript. These commands are available in the toolbar along the bottom of the screen and with the following keyboard shortcuts.\u003c/p\u003e\n\n\u003ctable class=\"table-commands\"\u003e\n    \u003c% _.each(project.controls, function(control) { %\u003e\n    \u003ctr\u003e\n        \u003ctd\u003e\u003c%= control.keyLabel %\u003e\u003c/td\u003e\n        \u003ctd\u003e\u003c%= control.keyDescription %\u003e\u003c/td\u003e\n    \u003c/tr\u003e\n    \u003c% }) %\u003e\n\u003c/table\u003e\n","ed_tutorial_4.md":"\u003ch1\u003eSpeaker Identification\u003c/h1\u003e\n\n\u003cp\u003eNote the speaker for each line of a transcript by using the speaker identification button to the left of each line. \u003cstrong\u003eYou only need to note when a speaker changes\u003c/strong\u003e. For lines with \u003cstrong\u003emultiple speakers\u003c/strong\u003e, select the final \u0026quot;multiple speakers\u0026quot; option. When you do not know the interviewer\u0026#39;s name, select \u0026quot;interviewer\u0026quot; from the drop down options.\u003c/p\u003e\n\n\u003cvideo src=\"https://s3.amazonaws.com/togetherwelisten.nypl.org/video/twl_sample_speakers.mp4\" preload=\"auto\" class=\"toggle-sound sample-video\" autoplay loop muted\u003e\u003c/video\u003e\n","ed_tutorial_5.md":"\u003ch1\u003eVerify\u003c/h1\u003e\n\n\u003cp\u003e\u003cspan class=\"reviewing\"\u003eLines highlighted in orange\u003c/span\u003e await verification. Click on the line and select the best transcription from those presented or flag that none of these transcriptions are correct. Once three or more contributors agree on the correct transcription, the line will be finalised. Administrators will be alerted if a line has no correct transcriptions.\u003c/p\u003e\n\n\u003cvideo src=\"https://s3.amazonaws.com/togetherwelisten.nypl.org/video/twl_sample_verify.mp4\" preload=\"auto\" class=\"toggle-sound sample-video\" autoplay loop muted\u003e\u003c/video\u003e\n","ed_tutorial_6.md":"\u003ch1\u003eHave Fun!\u003c/h1\u003e\n\n\u003cp\u003eJump in and start editing this interview or select another from \u003ca href=\"/\"\u003eour homepage\u003c/a\u003e. If you\u0026#39;d like to listen to some of our audio collections before you start transcribing, select an individual item and click the Play All button.\u003c/p\u003e\n\n\u003cp\u003eThis tutorial will always be available in the navigation above along with our helpful \u003ca href=\"/page/faq\"\u003eFrequently Asked Questions\u003c/a\u003e.\u003c/p\u003e\n\n\u003cp\u003e\u003cstrong\u003eYou don’t need to log in to participate\u003c/strong\u003e but don’t forget to Track Your Progress (top right corner) if you want to keep a tally of all your own edits.\u003c/p\u003e\n\n\u003cp\u003eRemember the golden rule: \u003cstrong class=\"highlight\"\u003eUse your best judgement to transcribe as you hear\u003c/strong\u003e.\u003c/p\u003e\n\n\u003cp\u003eThank you so much for helping us to make the State Library of New South Wales collections more accessible, more discoverable and more valuable to all.\u003c/p\u003e\n","faq.md":"\u003ch1\u003eFrequently Asked Questions\u003c/h1\u003e\n\n\u003cp\u003eContent here (you can use \u003ca href=\"https://daringfireball.net/projects/markdown/syntax\"\u003eMarkdown\u003c/a\u003e).\u003c/p\u003e\n","home.md":"\u003cdiv class=\"container\" role=\"contentinfo\"\u003e\n  \u003cp\u003eHelp the \u003ca href=\"http://www.sl.nsw.gov.au/\"\u003eState Library of New South Wales\u003c/a\u003e enhance its collections by correcting computer-generated transcripts from our vast sound archive.\u003c/p\u003e\n\n  \u003cvideo src=\"https://s3.amazonaws.com/togetherwelisten.nypl.org/video/twl_sample.mp4\" preload=\"auto\" class=\"toggle-sound sample-video\" autoplay loop muted poster=\"https://s3.amazonaws.com/togetherwelisten.nypl.org/img/twl_sample.png\"\u003e\u003c/video\u003e\n\n  \u003cp class=\"caption\"\u003eAn example of how the transcript editor works (click for sound).\u003c/p\u003e\n\n  \u003cp\u003eSelect an interview to get started.\u003c/p\u003e\n\u003c/div\u003e\n","footer.md":"\u003cp\u003ePowered by \u003ca href=\"https://github.com/NYPL/transcript-editor\"\u003eOpen Transcript Editor\u003c/a\u003e which was developed by the \u003ca href=\"http://www.nypl.org\"\u003eNew York Public Library\u003c/a\u003e. \u003ca href=\"/page/about\"\u003eFind out more\u003c/a\u003e.\u003c/p\u003e\n","transcript_finished.md":"\u003cp\u003e\u003ca href=\"#finished\" class=\"button large transcript-finished\" role=\"button\"\u003eI am finished with this transcript!\u003c/a\u003e\u003c/p\u003e\n\n\u003cdiv class=\"show-when-finished\" aria-hidden=\"true\"\u003e\n  \u003cp\u003eThank you so much for your contributions! Your edits have been saved and will now be reviewed by others. The final transcript is one step closer completion!\u003c/p\u003e\n\n  \u003ca href=\"/\" class=\"button large\" role=\"button\"\u003eBrowse More Transcripts\u003c/a\u003e\n\u003c/div\u003e\n","transcript_edit.md":"\u003ch2\u003eInstructions\u003c/h2\u003e\n\n\u003cul\u003e\n\u003cli\u003eHere you can listen to audio files from the Library\u0026#39;s collections. Click the \u003cstrong\u003ePlay All button\u003c/strong\u003e to listen alongside a transcript.\u003c/li\u003e\n\u003cli\u003eThe transcript was \u003cstrong\u003ecomputer generated using speech-to-text software\u003c/strong\u003e and contains errors.\u003c/li\u003e\n\u003cli\u003eYou can use this tool to \u003cstrong\u003eedit a transcript line by line\u003c/strong\u003e as you listen along.\u003c/li\u003e\n\u003cli\u003e\u003cstrong\u003eAll your edits will be automatically saved\u003c/strong\u003e but may not be immediately visible by others. Don\u0026#39;t forget to \u003cstrong\u003eTrack Your Progress\u003c/strong\u003e (top right corner) if you want to keep a tally of all your edits.\u003c/li\u003e\n\u003cli\u003eOnce \u003cstrong\u003ethree or more people\u003c/strong\u003e have transcribed – and agreed – on the text for an individual line it will be visible to all but no longer editable.\n\u003c% if (transcript.hasLinesInReview) { %\u003e\u003c/li\u003e\n\u003cli\u003eWhen a line of the transcript is in \u0026quot;in review\u0026quot; (\u003cspan class=\"reviewing\"\u003ehighlighted in orange\u003c/span\u003e) you will not be able to edit it but instead can select the best transcription from a list of submitted edits.\n\u003c% } %\u003e\n\u003c% if (transcript.hasLinesCompleted) { %\u003e\u003c/li\u003e\n\u003cli\u003eWhen a line of the transcript is marked as \u0026quot;completed\u0026quot; (\u003cspan class=\"completed\"\u003ehighlighted in green\u003c/span\u003e) this means it has already been corrected by others and can no longer be edited, but you can still listen to them.\n\u003c% } %\u003e\u003c/li\u003e\n\u003c/ul\u003e\n\n\u003cp class=\"text-center\"\u003e\u003ca href=\"#tutorial\" data-modal=\"tutorial_edit\" class=\"button large modal-invoke tutorial-link\" role=\"button\"\u003eView Tutorial\u003c/a\u003e \u003cspan class=\"separator\"\u003e- or -\u003c/span\u003e \u003ca href=\"#start\" class=\"button large start-play disabled\" role=\"button\"\u003eStart Transcribing\u003c/a\u003e\u003c/p\u003e\n\n\u003cp class=\"text-center\"\u003e\u003ca href=\"#play-all\" class=\"button large play-all disabled\" role=\"button\"\u003ePlay All\u003c/a\u003e\u003c/p\u003e\n","transcription_conventions.md":"\u003ctable class=\"table-conventions\"\u003e\n  \u003cthead\u003e\n    \u003ctr\u003e\n      \u003cth colspan=\"2\"\u003eTranscription Conventions\u003c/th\u003e\n      \u003cth\u003eExamples\u003c/th\u003e\n    \u003c/tr\u003e\n  \u003c/thead\u003e\n  \u003ctbody\u003e\n    \u003ctr\u003e\n      \u003ctd\u003eLanguage\u003c/td\u003e\n      \u003ctd\u003eEnglish (Australian)\u003c/td\u003e\n      \u003ctd\u003e“Colour” not “Color”, “Organise” not “Organize”\u003c/td\u003e\n    \u003c/tr\u003e\n    \u003ctr\u003e\n      \u003ctd\u003eContractions\u003c/td\u003e\n      \u003ctd\u003eTranscribe as you hear them\u003c/td\u003e\n      \u003ctd\u003e“Shoulda”, “Didn’t”\u003c/td\u003e\n    \u003c/tr\u003e\n    \u003ctr\u003e\n      \u003ctd\u003eNumbers\u003c/td\u003e\n      \u003ctd\u003eTranscribe as numerals\u003c/td\u003e\n      \u003ctd\u003e“11 West 40th Street”\u003cbr /\u003e“She was 40 years old.”\u003c/td\u003e\n    \u003c/tr\u003e\n    \u003ctr\u003e\n      \u003ctd\u003eFilled Pauses \u0026amp; Hesitations\u003c/td\u003e\n      \u003ctd\u003eTranscribe as you hear them\u003c/td\u003e\n      \u003ctd\u003e“ah”, “eh”, “um”\u003c/td\u003e\n    \u003c/tr\u003e\n    \u003ctr\u003e\n      \u003ctd\u003eNoise\u003c/td\u003e\n      \u003ctd\u003eTranscribe in brackets; use descriptive language\u003c/td\u003e\n      \u003ctd\u003e“And then we [door slam]”, “So cold! [Brrrrr]”\u003c/td\u003e\n    \u003c/tr\u003e\n    \u003ctr\u003e\n      \u003ctd\u003ePartial words\u003c/td\u003e\n      \u003ctd\u003eIf someone stops speaking in the middle of a word, transcribe as much of the word as they say; follow it with a dash\u003c/td\u003e\n      \u003ctd\u003e“Tes- Testing”, “Absolu- Absolutely”\u003c/td\u003e\n    \u003c/tr\u003e\n    \u003ctr\u003e\n      \u003ctd\u003eHard-to-understand\u003c/td\u003e\n      \u003ctd\u003eFor speech that is difficult or impossible to understand, use question marks before and after\u003c/td\u003e\n      \u003ctd\u003e“And she told me that ?I should just leave?”, “Her name was ?inaudible?”\u003c/td\u003e\n    \u003c/tr\u003e\n    \u003ctr\u003e\n      \u003ctd\u003eTruncated Words\u003c/td\u003e\n      \u003ctd\u003eSometimes words may seem to be repeated from the end of one line to the start of the next. Transcribe these as you hear them and use your best judgment\u003c/td\u003e\n      \u003ctd\u003e\u003c/td\u003e\n    \u003c/tr\u003e\n  \u003c/tbody\u003e\n\u003c/table\u003e\n"}};