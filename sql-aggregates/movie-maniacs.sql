SELECT "customers"."firstName" AS "First Name",
       "customers"."lastName" AS "Last Name",
       SUM("payments"."amount") AS "Total Payments"
  FROM "customers"
  JOIN "payments" USING ("customerId")
 GROUP BY "customers"."customerId"
 ORDER BY "Total Payments" DESC;
