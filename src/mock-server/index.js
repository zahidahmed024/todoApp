import { createServer } from "miragejs"

createServer({
    routes() {
        this.namespace = "/api";
        this.get("/users", () => [
            { id: "1", name: "Luke" },
            { id: "2", name: "Leia" },
            { id: "3", name: "Anakin" },
        ])
        this.post("/user", (schema, request) => {
            let requestJson = JSON.parse(request.requestBody)
            return {
                id: `${Date.now()}`,
                username: requestJson.username,
                token: `${requestJson.username + Date.now()}`,
            }
        })
        this.post("/member", (schema, request) => {
            let requestJson = JSON.parse(request.requestBody)
            return {
                id: `${Date.now()}`,
                name: requestJson.name,
                email: requestJson.email,
                tasks: [],
                // token: `${requestJson.name + Date.now()}`,
            }
        })
        this.post("/task", (schema, request) => {
            let requestJson = JSON.parse(request.requestBody)
            return {
                id: `${Date.now()}`,
                title: requestJson.title,
                description: requestJson.description,
                assignTo: requestJson.assignTo || '',
                createdAt: `${new Date().toISOString().slice(0, 10)}`,
                // token: `${requestJson.name + Date.now()}`,
            }
        })
    },
})