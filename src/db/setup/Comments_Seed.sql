CREATE TABLE COMMENTS (
    comment_id SERIAL PRIMARY KEY,
    question_id INTEGER
    REFERENCES questions(question_id),
    user_id INTEGER
    REFERENCES users(user_id),
    timestamp TEXT,
    comment VARCHAR(500)
)