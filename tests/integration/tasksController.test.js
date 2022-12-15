const request = require("supertest");
const app = require("../../server");

const TaskModel = require('../../models/tasks')

describe("Task Controller",()=>{
    describe("create a task",()=>{
        it("should return 201 and task created",async()=>{
            const response = await request(app)
            .post("api/v1/tasks")
            .set("content-type", "application/json")
            .send({
                name : 'task used for testing'
            })

            expect(response.status).toBe(201)
            expect(response.body).toHaveProperty(tasks)
        })
    })
})