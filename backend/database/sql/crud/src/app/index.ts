import express, { Application } from "express"
class App {
    app: Application
    constructor() {
        this.app = express()
    }

    run() {
        this.app.listen(process.env.port || 3000, () => {
            console.log(`app is listening on ${process.env.port}`)
        })
    }

}

export default App