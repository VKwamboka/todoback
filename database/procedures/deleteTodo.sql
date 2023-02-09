CREATE OR ALTER PROCEDURE deleteTodo(@taskId VARCHAR(50))
AS
BEGIN
UPDATE tasks SET isDeleted='1' WHERE tasksId = @taskId
END
GO