function updateTime() {
    let nowDate = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    document.getElementById("hour").innerHTML = nowDate.getHours();
    document.getElementById("mins").innerHTML = nowDate.getMinutes();
    document.getElementById("sec").innerHTML = nowDate.getSeconds();
    const fullDate = dayNames[nowDate.getDay()] + ", " + nowDate.getDate() + " " + monthNames[nowDate.getMonth()] + ", " + nowDate.getFullYear();
        document.getElementById("fullDate").innerHTML = fullDate;
    }

    // Update time every second (1000 milliseconds)
    setInterval(updateTime, 1000);

    // Initial update to display the time immediately
    updateTime();