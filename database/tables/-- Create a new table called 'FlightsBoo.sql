-- Create a new table called 'FlightsBookings' in schema 'dbo'
-- Drop the table if it already exists
IF OBJECT_ID('dbo.FlightsBookings', 'U') IS NOT NULL
DROP TABLE dbo.FlightsBookings
GO
-- Create the table in the specified schema
CREATE TABLE dbo.FlightsBookings
(
    Id VARCHAR(50), -- primary key column
    Name [VARCHAR](100),
    Email [VARCHAR](100),
    Destinationn [VARCHAR](100),
    TravelDate [VARCHAR](100)
    -- specify more columns here
);
GO