-- Create a new stored procedure called 'InsertOrUpdate' in schema 'dbo'
-- Drop the stored procedure if it already exists
-- USE todos


IF EXISTS (
SELECT *
    FROM INFORMATION_SCHEMA.ROUTINES
WHERE SPECIFIC_SCHEMA = N'dbo'
    AND SPECIFIC_NAME = N'InsertOrUpdate'
)
DROP PROCEDURE dbo.InsertOrUpdate
GO
-- Create the stored procedure in the specified schema
CREATE PROCEDURE dbo.InsertOrUpdate
  
     @tasksId  VARCHAR(50), @title VARCHAR(100)=NULL , @description VARCHAR(100)=NULL, @date VARCHAR(50)=NULL

AS
BEGIN

SELECT * FROM tasks

IF EXISTS(SELECT * FROM tasks WHERE tasksId =@tasksId AND isDeleted='0')
BEGIN
UPDATE tasks SET title=@title, [description]=@description 

WHERE tasksId=@tasksId

END
ELSE
BEGIN
INSERT INTO tasks (tasksId,title,description,date)
VALUES( @tasksId, @title, @description, @date)
END
END

