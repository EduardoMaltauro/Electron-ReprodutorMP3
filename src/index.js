const {app, BrowserWindow} = require("electron")

 app.whenReady()
    .then(() => {
        const janela = new BrowserWindow({
            height: 600,
            width: 800,
            autoHideMenuBar: true,
            resizable: false
        })
        janela.loadFile("./public/index.html")
    })