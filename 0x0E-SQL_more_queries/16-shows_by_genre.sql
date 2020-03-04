-- Write a script that lists all shows, and all genres linked to that show, from the database hbtn_0d_tvshows.
SELECT s.`title`, g.`name` FROM `tv_shows` AS s LEFT JOIN `tv_show_genres` AS s ON s.`id` = s.`show_id` LEFT JOIN `tv_genres` AS g ON s.`genre_id` = g.`id` ORDER BY s.`title`, g.`name`;
