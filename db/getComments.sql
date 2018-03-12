-- SELECT users.user_id, question_id, username, comment_id, comment, a, b FROM users
-- JOIN comments ON users.user_id = comments.user_id
-- WHERE question_id = $1
-- ORDER BY users.user_id

SELECT users.user_id, question_id, username, comments.comment_id, comment, a, b, (SELECT count(smile) from smiles where smiles.comment_id = comments.comment_id) as smiletotal
FROM users
JOIN comments ON users.user_id = comments.user_id
WHERE question_id = $1
ORDER BY smiletotal DESC