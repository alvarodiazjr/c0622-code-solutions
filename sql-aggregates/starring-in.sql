SELECT "genres"."name" AS "Genres",
       COUNT("films") AS "# of Films"
  FROM "actors"
  JOIN "castMembers" USING ("actorId")
  JOIN "films" USING ("filmId")
  JOIN "filmGenre" USING ("filmId")
  JOIN "genres" USING ("genreId")
 WHERE "actors"."firstName" = 'Lisa' AND "actors"."lastName" = 'Monroe'
 GROUP BY "genres"."genreId";
