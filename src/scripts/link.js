// ブログとニュースの記事にある外部リンクを別タブで開く設定
const isExternalLink = (anchorElement) => anchorElement.hostname !== window.location.hostname;

document.querySelectorAll("a").forEach((link) => {
    if (isExternalLink(link)) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
    }
});
