function parseTime(timeStr) {
  // Converts "1300" (1:00 PM) to minutes since midnight (e.g., 780)
    const hours = parseInt(timeStr.slice(0, -2), 10);
    const minutes = parseInt(timeStr.slice(-2), 10);
    return hours * 60 + minutes;
  }
  
  function formatTime(minutes) {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${h.toString().padStart(2, '0')}${m.toString().padStart(2, '0')}`;
  }
  
  function calculateRotations() {
    const start = parseTime(document.getElementById('startTime').value);
    const end = parseTime(document.getElementById('endTime').value);
    const numRotations = parseInt(document.getElementById('rotations').value, 10);
  
    if (isNaN(start) || isNaN(end) || isNaN(numRotations) || numRotations <= 0 || end <= start) {
      document.getElementById('results').innerHTML = '<p style="color:red">Please enter valid values.</p>';
      return;
    }
  
    const totalMinutes = end - start;
    const rotationLength = totalMinutes / numRotations;
  
    let resultHTML = `<p>Each rotation is ${rotationLength.toFixed(2)} minutes long.</p>`;
    resultHTML += '<ol>';
    for (let i = 0; i < numRotations; i++) {
      const rotStart = start + i * rotationLength;
      const rotEnd = start + (i + 1) * rotationLength;
      resultHTML += `<li>${formatTime(Math.floor(rotStart))} to ${formatTime(Math.floor(rotEnd))}</li>`;
    }
    resultHTML += '</ol>';
  
    document.getElementById('results').innerHTML = resultHTML;
  }
  