SELECT "countries"."name" AS "Countries",
       COUNT("cities") AS "# of Cities"
  FROM "countries"
  JOIN "cities" USING ("countryId")
 GROUP BY "countries"."countryId";
