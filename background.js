    // Context Menu
    chrome.contextMenus.create({
        "title": "Generate QR Code",
        "contexts": ["all"],
        "onclick": function qr(info, tab) {
            chrome.tabs.create({ url: "https://chart.googleapis.com/chart?cht=qr&chl=" + encodeURIComponent(tab.url) + "&chs=180x180&choe=UTF-8&chld=L|2" });
        }
    });
