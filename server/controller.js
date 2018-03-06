module.exports = {
    userCheck: (req, res) => {
        const db = req.app.get('db')

        db.userCheck([req.user.user_id]).then(vote => res.status(200).send(vote))
        .catch(() => res.status(500).send())
    },
    getQuestion: (req, res) => {
        const db = req.app.get('db');
        let date = new Date(Date.now())
        let today = date.getDate()
        let month = date.getMonth()
        let year = date.getFullYear()
        // console.log(year, month, today)
        db.getQuestion([year, month, today]).then(question => res.status(200).send(question))
        .catch(() => res.status(500).send())
    },
    aVote: (req, res) => {
        const db = req.app.get('db');

        db.aVote([req.body.questionId, req.user.user_id]).then(() => res.status(200).send())
        .catch(() => res.status(500).send())
    },
    bVote: (req, res) => {
        const db = req.app.get('db');

        db.bVote([req.body.questionId, req.user.user_id]).then(() => res.status(200).send())
        .catch(() => res.status(500).send())
    },
    getPercent: (req, res) => {
        const db = req.app.get('db')

        db.getPercent([req.params.id]).then(AandB => res.status(200).send(AandB))
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