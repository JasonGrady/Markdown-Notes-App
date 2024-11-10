// app.js

document.addEventListener('DOMContentLoaded',() => {
    const markdownInput = document.getElementById('markdown-input');
    const htmlOutput = document.getElementById('html-output');

    // carregar notas salvas
    markdownInput.value = localStorage.getItem('notes') || '';
    htmlOutput.innerHTML = marked.parse(markdownInput.value);

    //conversao em tempo real
    markdownInput.addEventListener('input', () => {
        const markdownText = markdownInput.value;
        htmlOutput.innerHTML = marked.parse(markdownText);
        localStorage.setItem('notes', markdownText);
    });
});