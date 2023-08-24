document.addEventListener('DOMContentLoaded', initiate);

function initiate() {
    const checkboxes = document.getElementsByClassName('item');
    for (const checkbox of checkboxes) {
        //listens for any checkbox being unchecked (closing pop-up)
        checkbox.getElementsByTagName('input')[0].addEventListener('change', e => !e.target.checked ? pauseVideos(e.target.parentElement.lastElementChild) : console.log("opened"));
    }
}

function pauseVideos(element) {
    //finds all child videos and pauses them
    let list = element.getElementsByTagName('video');
    for (const video of list) {
        video.pause();
    }

    //finds all child iframes and resets the src, thereby stopping them
    list = element.getElementsByTagName('iframe');
    for (const iframe of list) {
        const source = iframe.src;
        iframe.src = source;
    }
}