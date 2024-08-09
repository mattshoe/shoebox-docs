shareButton.addEventListener(
    "click",
    async () => {
        try {
            await navigator.share({ title: "ShoeBox OSS:", url: "" });
            console.log("Data was shared successfully");
        } catch (err) {
            if (err.name !== "AbortError") {
                alert("This browser does not support the Share api. Try again from a Mobile device. Error: " + err)
                console.error("Share failed:", err.message);
            }
        }
    }
);