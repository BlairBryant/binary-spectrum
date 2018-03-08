CREATE TABLE questions (
    question_id SERIAL PRIMARY KEY,
    question TEXT,
    answerA TEXT,
    answerB TEXT,
    year INTEGER,
    month INTEGER,
    today INTEGER
)

INSERT INTO questions (question, answerA, answerB, year, month, today)
VALUES ('Is it easier to take 1 to 1000 or to take 0 to 1?',
'1 to 1000',
'0 to 1',
2018,
2,
5
)

INSERT INTO questions (question, answerA, answerB, year, month, today)
VALUES ('Is progress achieved more in bursts or marginally? Exponentially with plateaus or linearly?',
'In bursts/Exponentially with plateaus',
'Marginally/Linearly',
2018,
2,
8
)