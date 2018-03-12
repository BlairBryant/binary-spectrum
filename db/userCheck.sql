SELECT * FROM votes
JOIN questions on votes.question_id = questions.question_id
WHERE user_id = $1 AND year = $2 AND month = $3 AND today = $4