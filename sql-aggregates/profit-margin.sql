WITH "cteRevenue" AS (
  SELECT "films"."title" AS "Title",
         "films"."filmId" AS "filmID",
         "films"."description" AS "Description",
         "films"."rating" AS "Rating",
         SUM("payments"."amount") AS "Revenue"
    FROM "films"
    JOIN "inventory" USING ("filmId")
    JOIN "rentals" USING ("inventoryId")
    JOIN "payments" USING ("rentalId")
  GROUP BY "films"."filmId"
),

"cteCost" AS (
  SELECT "films"."title" AS "Title",
         "films"."filmId" AS "filmID",
         SUM("films"."replacementCost") AS "Cost"
    from "films"
    JOIN "inventory" USING ("filmId")
  GROUP BY "films"."filmId"
)

SELECT "cteRevenue"."Title",
       "cteRevenue"."Description",
       "cteRevenue"."Rating",
       "cteRevenue"."Revenue" - "cteCost"."Cost" AS "Total Profit"
  from "cteRevenue"
  JOIN "cteCost" USING ("filmID")
 ORDER BY "Total Profit" DESC
 LIMIT 5;
