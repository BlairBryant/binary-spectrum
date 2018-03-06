SELECT COUNT(a_vote) AS A_total, 
COUNT(b_vote) AS B_total 
FROM votes
WHERE question_id = $1