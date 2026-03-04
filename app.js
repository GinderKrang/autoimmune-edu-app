// Save log to localStorage
document.getElementById('saveLogBtn').addEventListener('click', function() {
  const pain = document.getElementById('pain').value;
  const sleep = document.getElementById('sleep').value;
  const stress = document.getElementById('stress').value;

  if(!pain || !sleep || !stress){
    alert("Please fill all fields");
    return;
  }

  const log = {
    date: new Date().toLocaleDateString(),
    pain: +pain,
    sleep: +sleep,
    stress: +stress
  };

  let logs = JSON.parse(localStorage.getItem('dailyLogs')) || [];
  logs.push(log);
  localStorage.setItem('dailyLogs', JSON.stringify(logs));

  alert("Log saved!");

  displayLogs();
});

// Display previous logs
function displayLogs(){
  const container = document.getElementById('logsContainer');
  container.innerHTML = '';
  const logs = JSON.parse(localStorage.getItem('dailyLogs')) || [];
  logs.forEach(l => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `<strong>${l.date}</strong> - Pain: ${l.pain}, Sleep: ${l.sleep}, Stress: ${l.stress}`;
    container.appendChild(div);
  });
}

// Initial display
displayLogs();
