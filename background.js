const urlPatterns = [
  /^https?:\/\/(www\.)?youtube\.com\/shorts\/.*/i,
  /^https?:\/\/(www\.)?instagram\.com\/reels\/.*/i,
  /^https?:\/\/(www\.)?facebook\.com\/reel\/.*/i
];

let isEnable = true

const redirectShorts = (listener, filter) => {
  if ( isEnable && filter.url && urlPatterns.some(pattern => pattern.test(filter.url))) {
      browser.tabs.update(listener, { url: "https://google.com" });
    }
}

  browser.tabs.onUpdated.addListener(redirectShorts);

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'toggleBlock') {
      isEnable = !isEnable
      sendResponse({isEnable})
  }

  if (message.action === 'status') {
      sendResponse({isEnable})
  }
})


