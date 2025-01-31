async function generateImage() {
    const prompt = document.getElementById("prompt").value;
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<p>جاري توليد الصورة...</p>";
    
    const apiKey = "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";  // استبدلها بمفتاح API الخاص بك
    const response = await fetch("https://api.stability.ai/v2beta/stable-image/generate/core", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            prompt: prompt,
            output_format: "jpeg"
        })
    });

    if (!response.ok) {
        resultDiv.innerHTML = "<p>حدث خطأ أثناء توليد الصورة.</p>";
        return;
    }

    const data = await response.blob();
    const imageUrl = URL.createObjectURL(data);
    resultDiv.innerHTML = `<img src="${imageUrl}" alt="الصورة المولدة">`;
}
