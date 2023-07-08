interface Window {
    SC: SC
}



interface SC {
    Widget: (id: string) => SCWidget
}

enum Events {
    // AUDIO
    LOAD_PROGRESS = "load_progress",
    PLAY_PROGRESS = "play_progress",
    PLAY = "play",
    PAUSE = "pause",
    FINISH = "finish",
    SEEK = "seek",
    // UI
    READY = "ready",
    CLICK_DOWNLOAD = "click_download",
    CLICK_BUY = "click_buy",
    OPEN_SHARE_PANEL = "open_share_panel",
    ERROR = "error",

}

// https://developers.soundcloud.com/docs/api/html5-widget#playground
interface SCWidget {
    play: () => void;
    pause: () => void;
    bind: (events: Events, callback: (...args) => void) => void;
}