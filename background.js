const urlPatterns = [
  /^https?:\/\/(www\.)?youtube\.com\/shorts\/.*/i,
  /^https?:\/\/(www\.)?instagram\.com\/reels\/.*/i,
  /^https?:\/\/(www\.)?facebook\.com\/reel\/.*/i
];

browser.tabs.onUpdated.addListener((listener, filter) => {
if (filter.url && urlPatterns.some(pattern => pattern.test(filter.url))) {
    browser.tabs.update(listener, { url: "https://google.com" });
  }
});
