CREATE TABLE Votes (
    vote_id SERIAL PRIMARY KEY,
    question_id INTEGER
    REFERENCES questions(question_id),
    user_id INTEGER
    REFERENCES users(user_id),
    a_vote INTEGER,
    b_vote INTEGER
)