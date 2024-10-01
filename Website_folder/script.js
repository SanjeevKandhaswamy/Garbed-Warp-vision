function runSimulation() {
    const editorContent = document.getElementById('code-editor').value;
    document.getElementById('output').innerHTML = `<pre>${editorContent}</pre>`;
}
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
    });
});
