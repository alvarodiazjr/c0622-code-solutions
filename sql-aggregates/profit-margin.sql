WITH "cteRevenue" AS (
  SELECT "films"."title" AS "Title",
         "films"."description" AS "Description",
         "films"."rating" AS "Rating",
         "films"."filmId" AS "filmID",
         SUM("payments"."amount") AS "Revenue"
    FROM "films"
    JOIN "inventory" USING ("filmId")
    JOIN "rentals" USING ("inventoryId")
    JOIN "payments" USING ("rentalId")
  GROUP BY "films"."filmId"
),

"cteCost" AS (
  SELECT "films"."filmId" AS "filmID",
         SUM("films"."replacementCost") AS "Cost"
    FROM "films"
    JOIN "inventory" USING ("filmId")
  GROUP BY "films"."filmId"
)

SELECT "Title",
       "Description",
       "Rating",
       "Revenue" - "Cost" AS "Total Profit"
  FROM "cteRevenue"
  JOIN "cteCost" USING ("filmID")
 ORDER BY "Total Profit" DESC
 LIMIT 5;
