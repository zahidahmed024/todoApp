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

        //////member apis////

        this.post("/member", (schema, request) => {
            let requestJson = JSON.parse(request.requestBody)
            return {
                id: `${Date.now()}`,
                name: requestJson.name,
                email: requestJson.email,
                // token: `${requestJson.name + Date.now()}`,
            }
        })
        this.del("/member/:id", (schema, request) => {
            let id = request.params.id
            // schema.contacts.find(id).destroy()
            return {
                id: id,
                message: 'deleted successfully'
            }
        })
        this.put("/member/:id", (schema, request) => {
            let { id } = request.params
            let { name, email } = JSON.parse(request.requestBody)
            // schema.contacts.find(id).destroy()
            return {
                id: id,
                name: name,
                email: email,
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
                updatedAt: `${new Date().toISOString().slice(0, 10)}`,
            }
        })
        this.put("/task/:id", (schema, request) => {
            let { id } = request.params
            let { title, description, assignTo, createdAt } = JSON.parse(request.requestBody)
            return {
                id: id,
                title: title,
                description: description,
                assignTo: assignTo || '',
                createdAt: createdAt,
                updatedAt: `${new Date().toISOString().slice(0, 10)}`,
                // token: `${requestJson.name + Date.now()}`,
            }
        })
        this.delete("/task/:id", (schema, request) => {
            let id = request.params.id
            return {
                id: id,
                message: 'deleted successfully'
            }
        })
    },
})