shareButton.addEventListener(
    "click",
    async () => {
        if (navigator.share) {
            try {
                await navigator.share(
                    {
                        title: "ShoeBox OSS:",
                        text: "Check out ShoeBox OSS, a collection of open-source libraries!",
                        url: ""
                    }
                );
                console.log("Data was shared successfully");
            } catch (err) {
                if (err.name !== "AbortError") {
                    alert("This browser does not support the Share api. Try again from a Mobile device. Error: " + err)
                    console.error("Share failed:", err.message);
                } else {
                    openSharePopup()
                }
            }
        } else {
            openSharePopup()
        }
    }
);

function openSharePopup() {
    const popupWidth = 500;
    const popupHeight = 375;
    const popupLeft = (window.innerWidth - popupWidth) / 2;
    const popupTop = (window.innerHeight - popupHeight) / 2;

    const shareUrl = "share-options.html"; // Path to your share options page
    const sharePopup = window.open(
        shareUrl,
        "Share",
        `width=${popupWidth},height=${popupHeight},top=${popupTop},left=${popupLeft},resizable=yes,scrollbars=yes`
    );
}