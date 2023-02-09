CREATE OR ALTER  PROCEDURE getOneTodo(@taskId VARCHAR(50))
AS
BEGIN
SELECT * FROM tasks WHERE tasksId= @taskId AND isDeleted ='0'
END