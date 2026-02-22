function startScan(){
  document.getElementById("scan").classList.remove("hidden");

  setTimeout(()=>{
    document.getElementById("scan").classList.add("hidden");
    document.getElementById("data").classList.remove("hidden");


    document.getElementById("browser").textContent = navigator.userAgent;
    document.getElementById("platform").textContent = navigator.platform;
    document.getElementById("language").textContent = navigator.language;


    document.getElementById("screen").textContent = screen.width + " x " + screen.height;


    document.getElementById("cpu").textContent = navigator.hardwareConcurrency || "N/A";
    document.getElementById("ram").textContent = navigator.deviceMemory ? navigator.deviceMemory + " GB" : "N/A";


    if(navigator.getBattery){
      navigator.getBattery().then(b=>{
        document.getElementById("battery").textContent = Math.round(b.level*100) + "%";
      });
    } else {
      document.getElementById("battery").textContent = "N/A";
    }

    fetch("https://api.ipify.org?format=json")
      .then(res=>res.json())
      .then(data=>{
        document.getElementById("ip").textContent = data.ip;
      });


    document.getElementById("online").textContent = navigator.onLine ? "Online" : "Offline";


    document.getElementById("dnt").textContent = navigator.doNotTrack === "1" ? "Enabled" : "Disabled";

    document.getElementById("orientation").textContent = screen.orientation ? screen.orientation.type : "N/A";


    document.getElementById("pixelratio").textContent = window.devicePixelRatio;

  },1500);
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude.toFixed(3);
      const lon = position.coords.longitude.toFixed(3);
  
      document.getElementById("location").textContent = `Lat: ${lat}, Lon: ${lon}`;
    },
    (error) => {
      document.getElementById("location").textContent = "Permission denied";
    }
  );
} else {
  document.getElementById("location").textContent = "Not supported";
}

fetch("https://ipapi.co/json/")
  .then(res => res.json())
  .then(data => {
   
    const locationStr = `${data.region} / ${data.city}`;
    document.getElementById("location").textContent = locationStr;
  })
  .catch(err => {
    document.getElementById("location").textContent = "Unavailable";
  });
  // Touch Screen
document.getElementById("touch").textContent = ('ontouchstart' in window) ? "Yes" : "No";

// Connection Type
document.getElementById("connection").textContent = (navigator.connection && navigator.connection.effectiveType) 
  ? navigator.connection.effectiveType 
  : "Unknown";

// Device Memory
document.getElementById("devicememory").textContent = navigator.deviceMemory 
  ? navigator.deviceMemory + " GB" 
  : "Unknown";

// Local Time
document.getElementById("localtime").textContent = new Date().toLocaleString();

// Connection Speed (approx, in Mbps)
document.getElementById("speed").textContent = (navigator.connection && navigator.connection.downlink) 
  ? navigator.connection.downlink + " Mbps" 
  : "Unknown";




  function typeEffect(el, text) {
  let i = 0;
  const interval = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 70);
}

typeEffect(document.getElementById("browser"), navigator.userAgent);






const creepyMessages = [
  "Why did you leave?",
  "You cannot hide",
  "Come back",
  "Still watching"
];

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    const msg = creepyMessages[Math.floor(Math.random() * creepyMessages.length)];
    document.getElementById("alertText").textContent = msg;
    document.getElementById("creepyAlert").classList.remove("hidden");
  }
});

function closeAlert() {
  document.getElementById("creepyAlert").classList.add("hidden");
}