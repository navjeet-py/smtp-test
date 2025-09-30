import net from "net";

const host = "smtp.gmail.com";
const port = 587;

console.log(`🌐 Testing connection to ${host}:${port}...`);

const socket = net.connect(port, host);

socket.setTimeout(5000);

socket.on("connect", () => {
  console.log(`✅ Connected to ${host}:${port}`);
  socket.end();
});

socket.on("timeout", () => {
  console.error(`⏳ Timeout: cannot reach ${host}:${port}`);
  socket.destroy();
});

socket.on("error", (err) => {
  console.error(`❌ Error: ${err.message}`);
});
