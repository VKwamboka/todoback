-- Create a new table called 'tasks' in schema 'dbo'
-- Drop the table if it already exists
IF OBJECT_ID('dbo.tasks', 'U') IS NOT NULL
DROP TABLE dbo.tasks
GO
-- Create the table in the specified schema
CREATE TABLE dbo.tasks
(
    tasksId [VARCHAR](100) UNIQUE, -- primary key column
    title [VARCHAR](100),
    description [VARCHAR](100),
    date [VARCHAR](50) ,
    isDeleted VARCHAR(10) DEFAULT '0'
    -- specify more columns here
);
GO

