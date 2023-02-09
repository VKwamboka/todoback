CREATE OR ALTER PROCEDURE getTodos
AS
BEGIN
SELECT title, description, date FROM tasks WHERE  isDeleted='0'

END