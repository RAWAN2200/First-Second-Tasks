const texts = document.querySelector(".texts");

window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let t = document.createElement("t");

recognition.addEventListener("result", (e) => {
    texts.appendChild(t);
    const text = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
    p.innerText = text;
    if (e.results[0].isFinal) {
       p = document.createElement("t");
    }
 });
 recognition.addEventListener("end", () => {
    recognition.start();
});
recognition.start();
