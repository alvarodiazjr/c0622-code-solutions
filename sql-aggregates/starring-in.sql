SELECT "genres"."name" AS "Genres",
       COUNT("films") AS "# of Films"
  FROM "actors"
  JOIN "castMembers" USING ("actorId")
  JOIN "films" USING ("filmId")
  JOIN "filmGenre" USING ("filmId")
  JOIN "genres" USING ("genreId")
 WHERE "actors"."actorId" = 178
 GROUP BY "genres"."genreId";
