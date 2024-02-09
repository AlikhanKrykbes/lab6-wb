document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('weather-form');
    const responseDiv = document.getElementById('response');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();
            responseDiv.innerHTML = `<p>Data successfully added: ${JSON.stringify(result)}</p>`;
        } catch (error) {
            responseDiv.innerHTML = `<p>Error: ${error.message}</p>`;
        }
    });
});
