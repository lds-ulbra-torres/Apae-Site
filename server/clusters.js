import cluster from "cluster"
import os from "os"

const CPUS = os.cpus()

if (cluster.isMaster) {
    CPUS.forEach(() => cluster.fork())
    
    cluster.on("listening", worker => console.log(`Cluster ${worker.process.pid} conectado`) )
    cluster.on("disconnect", worker => console.log(`Cluster ${worker.process.pid} desconectado`))
    cluster.on("exit", worker => {
        console.log(`Cluster ${worker.process.pid} saiu do ar`)
        cluster.fork()
        // Inicia novo cluster quando um cluster sai do ar
    })

} else {
    require("./server.js")
}