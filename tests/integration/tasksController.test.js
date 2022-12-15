const request = require("supertest");
const { response } = require("../../app");
const app = require("../../app");

const TaskModel = require("../../models/tasks");

describe("Task Controller", () => {
  describe("create task", () => {
    it("should return 201 and the task created", async () => {
      const response = await request(app)
        .post("/api/v1/tasks")
        .set("content-type", "application/json")
        .send({
          name: "task testing",
          completed: "true",
        });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty("tasks");
    });
  });

  describe("get all tasks", () => {
    it("should return 200 and all tasks", async () => {
      const response = await request(app)
        .get("/api/v1/tasks")
        .set("content-type", "application/json");

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("tasks");
    });

 
  });
});
