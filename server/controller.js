module.exports = {
    getQuestion: (req, res) => {
        const db = req.app.get('db');

        const{params} = req;
        db.getQuestion(params.id).then(questions => res.status(200).send(questions))
        .catch(() => res.status(500).send())
    },
    aVote: (req, res) => {
        const db = req.app.get('db');

        const{body} = req;
        db.answerA(body.id).then(() => res.status(200).send())
        .catch(() => res.status(500).send())
    },
    bVote: (req, res) => {
        const db = req.app.get('db');

        const{body} = req;
        db.answerB(body.id).then(() => res.status(200).send())
        .catch(() => res.status(500).send())
    },
    resultGetQuestion: (req, res) => {
        const db = req.app.get('db');

        db.getQuestion(req.params.id.charAt(0)).then(questions => res.status(200).send(questions))
        .catch(() => res.status(500).send())
    },
    getPercent: (req, res) => {
        const db = req.app.get('db')

        db.getPercent(req.params.id.charAt(0)).then(AandB => res.status(200).send(AandB))
    },
    getComments: (req, res) => {
        const db = req.app.get('db');

        db.getComments().then(comments => res.status(200).send(comments))
        .catch(() => res.status(500).send())
    },
    addComment: (req, res) => {
        const db = req.app.get('db');

        db.addComment().then(comments => res.status(200).send(comments))
        .catch(() => res.status(500).send())
    },


}