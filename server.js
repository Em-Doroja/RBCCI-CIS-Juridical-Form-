const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Serve index.html on root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`RBCCI CIS server running on port ${PORT}`);
});
```

---

## Your GitHub Repository Should Have These 3 Files:
```
your-repo/
├── index.html       ← your renamed HTML file
├── package.json     ← tells Railway it's a Node.js app
└── server.js        ← runs the Express web server
