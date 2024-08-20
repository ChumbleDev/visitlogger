document.getElementById('logVisitBtn').addEventListener('click', () => {
    const now = new Date();
    const visitLog = `Visit logged at: ${now.toLocaleString()}`;
    let visitLogs = JSON.parse(localStorage.getItem('visitLogs')) || [];
    visitLogs.push(visitLog);
    localStorage.setItem('visitLogs', JSON.stringify(visitLogs));
    alert('Visit logged successfully!');
});

document.getElementById('adminBtn').addEventListener('click', () => {
    const password = prompt('Enter the admin password:');
    if (password === '031314') {
        document.getElementById('adminSection').style.display = 'block';
        const visitLogs = JSON.parse(localStorage.getItem('visitLogs')) || [];
        const visitLogsList = document.getElementById('visitLogs');
        visitLogsList.innerHTML = '';
        visitLogs.forEach(log => {
            const listItem = document.createElement('li');
            listItem.textContent = log;
            visitLogsList.appendChild(listItem);
        });
    } else {
        alert('Incorrect password!');
    }
});
