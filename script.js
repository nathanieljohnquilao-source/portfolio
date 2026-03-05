// 1. Navigation Controller
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active classes
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.content-tab').forEach(t => t.classList.remove('active'));

        // Add active classes
        btn.classList.add('active');
        const target = btn.getAttribute('data-target');
        document.getElementById(`content-${target}`).classList.add('active');

        // Log the action
        addLog(`> Accessing directory: /${target.toUpperCase()}... SUCCESS`);
    });
});

// 2. Real-time Clock
function updateClock() {
    const now = new Date();
    document.getElementById('clock').innerText = now.toTimeString().split(' ')[0];
}
setInterval(updateClock, 1000);

// 3. System Log Generator
function addLog(message) {
    const logOutput = document.getElementById('log-output');
    const newLog = document.createElement('div');
    newLog.innerText = message;
    logOutput.prepend(newLog); // New logs at the top
}

// 4. Initial Sequence
window.addEventListener('load', () => {
    addLog("> System Boot Sequence Complete.");
    addLog("> User Authenticated: 0x7482");
});
