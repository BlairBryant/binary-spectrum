module.exports = {
    userCheck: (req, res) => {
        const db = req.app.get('db')
        let date = new Date(Date.now())
        let today = date.getDate()
        let month = date.getMonth()
        let year = date.getFullYear()

        db.userCheck([req.user.user_id, year, month, today]).then(vote => res.status(200).send(vote))
    },
    getQuestion: (req, res) => {
        const db = req.app.get('db');
        let date = new Date(Date.now())
        let today = date.getDate()
        let month = date.getMonth()
        let year = date.getFullYear()
        // console.log(year, month, today)
        db.getQuestion([year, month, today]).then(question => res.status(200).send(question))
    },
    aVote: (req, res) => {
        const db = req.app.get('db');

        db.aVote([req.body.questionId, req.user.user_id]).then(() => res.status(200).send())
    },
    bVote: (req, res) => {
        const db = req.app.get('db');

        db.bVote([req.body.questionId, req.user.user_id]).then(() => res.status(200).send())
    },
    getPercent: (req, res) => {
        const db = req.app.get('db')

        db.getPercent([req.params.id]).then(AandB => res.status(200).send(AandB))
    },
    getComments: (req, res) => {
        const db = req.app.get('db');

        db.getComments([req.params.id]).then(comments => res.status(200).send(comments))
    },
    getSessionUser: (req, res) => {
        res.status(200).send(req.user)
    },
    addComment: (req, res) => {
        const db = req.app.get('db');
        const { question_id, comment, votedAorB } = req.body
        const { user_id } = req.user
        if (votedAorB === 'A') {
            db.addComment([question_id, user_id, comment, 1, null]).then(comments => res.status(200).send(comments))
        } else {
            db.addComment([question_id, user_id, comment, null, 1]).then(comments => res.status(200).send(comments))
        }
    },
    editComment: (req, res) => {
        const db = req.app.get('db')

        db.editComment([req.body.editComment, req.body.comment_id, req.body.question_id]).then((comments) => res.status(200).send(comments))
    },
    deleteComment: (req, res) => {
        const db = req.app.get('db')

        db.deleteComment([req.params.id, req.body.question_id]).then((comments) => res.status(200).send(comments))
    },
    getSmiles: (req, res) => {
        const db = req.app.get('db')

        db.getSmiles([req.params.id]).then(smiles => res.status(200).send(smiles))
    },
    addSmile: (req, res) => {
        const db = req.app.get('db')
        const { comment_id } = req.body
        const { user_id } = req.user

        db.checkSmiles([comment_id, user_id]).then(userSmile => {
            if (userSmile.length === 0) {
                db.insertSmile([comment_id, user_id]).then(smiles => res.status(200).send(smiles))
            }
            else if (userSmile[0].smile === 1) {
                db.removeSmile([comment_id, user_id]).then(smiles => res.status(200).send(smiles))
            }
            else if (!userSmile[0].smile) {
                db.addSmile([comment_id, user_id]).then(smiles => res.status(200).send(smiles))
            }
        })
    },
    addFrown: (req, res) => {
        const db = req.app.get('db')
        const { comment_id } = req.body
        const { user_id } = req.user

        db.checkSmiles([comment_id, user_id]).then(userFrown => {
            if (userFrown.length === 0) {
                db.insertFrown([comment_id, user_id]).then(smiles => res.status(200).send(smiles))
            }
            else if (userFrown[0].frown === 1) {
                db.removeFrown([comment_id, user_id]).then(smiles => res.status(200).send(smiles))
            }
            else if (!userFrown[0].frown) {
                db.addFrown([comment_id, user_id]).then(smiles => res.status(200).send(smiles))
            }
        })
    },

}