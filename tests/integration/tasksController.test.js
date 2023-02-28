const request = require("supertest");
// const { response } = require("../../app"); 
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

  describe("get a task", () => {
    let task;
    beforeEach(async () => {
      task = await TaskModel.create({
        name: "task testid",
      });
    });
    
    it("should return 200 and a single task", async () => {
      const response = await request(app)
        .get(`/api/v1/tasks/${task.id}`)
        .set("content-type", "application/json");

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("task");
    });
  });



  describe("update a task", () => {
    let task;
    beforeEach(async () => {
      task = await TaskModel.create({
        name: "task2 testid",
      });
    });

    it("should return 404 if the task with the id doesnt exist", async () => {
      const taskId = "639c80ef98284bfdf111ad09";
      const response = await request(app).patch(`/api/v1/tasks/${taskId}`);

      expect(response.status).toBe(404);
      expect(response.body.msg).toEqual("this task does not exist");
    });
     

    it("should return 200 and the updated task", async () => {
      const response = await request(app)
        .patch(`/api/v1/tasks/${task.id}`)
        .send({ name: "newtask" });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("task");
    });
  });




  describe("delete a task", () => {
    let task;
    beforeEach(async () => {
      task = await TaskModel.create({
        name: "task2 testid",
      });
    });

    it("should return 404 if the task with the id doesnt exist", async () => {
      const taskId = "639c80ef98284bfdf111ad09";
      const response = await request(app).delete(`/api/v1/tasks/${taskId}`);

      expect(response.status).toBe(404);

      expect(response.body.msg).toEqual("this task does not exist");
    });

    it("should return 200 and the deleted task", async () => {
      const response = await request(app).delete(`/api/v1/tasks/${task.id}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("task");
    });
  });
});
