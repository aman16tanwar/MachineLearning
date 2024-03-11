
--  CREATE OR REPLACE MODEL `project_id.dataset_id.model_name`
--  OPTIONS(
-- model_type ='ARIMA_PLUS',
-- time_series_timestamp_col='DATE',
-- time_series_data_col='Purchase_revenue',
-- auto_arima=TRUE,
-- data_frequency='AUTO_FREQUENCY',
-- decompose_time_series=TRUE


--  ) AS

--  SELECT 

-- DATE(PARSE_TIMESTAMP("%Y%m%d", CAST(Date AS STRING))) AS DATE,

-- SUM(Total_revenue) AS Purchase_revenue
--  FROM `wr-skibig3.Arima.scienceworld_forecast` 
--  GROUP BY Date

-- The following code has to run after the above code has been run successfully

SELECT *
FROM ML.EXPLAIN_FORECAST(MODEL `project_id.dataset_id.model_name`,
    STRUCT(90 AS horizon, 0.8 AS confidence_level));
