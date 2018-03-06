CREATE TABLE questions (
    question_id SERIAL PRIMARY KEY,
    question TEXT,
    answerA TEXT,
    answerB TEXT,
    year TEXT,
    month TEXT,
    today TEXT
)

INSERT INTO questions (question, answerA, answerB)
VALUES ('Is it easier to take 1 to 1000 or to take 0 to 1?',
'1 to 1000',
'0 to 1'
)