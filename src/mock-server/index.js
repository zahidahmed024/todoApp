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
        }
        )
    },
})