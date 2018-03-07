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

        db.getComments([req.params.id]).then(comments => res.status(200).send(comments))
        .catch(() => res.status(500).send())
    },
    getSessionUser: (req, res) => {
        res.status(200).send(req.user)
    },
    addComment: (req, res) => {
        const db = req.app.get('db');
        const {question_id, comment, votedAorB} = req.body
        const {user_id} = req.user
        if(votedAorB === 'A') {
            db.addComment([question_id , user_id, comment, 1, null]).then(comments => res.status(200).send(comments))
            .catch(() => res.status(500).send())
        } else {
            db.addComment([question_id , user_id, comment, null, 1]).then(comments => res.status(200).send(comments))
            .catch(() => res.status(500).send())
        }
    },
    editComment: (req, res) => {
        const db = req.app.get('db')

        db.editComment([req.body.editComment, req.body.comment_id, req.body.question_id]).then((comments) => res.status(200).send(comments))
        .catch(() => res.status(500).send())
    },
    deleteComment: (req, res) => {
        const db = req.app.get('db')

        db.deleteComment([req.params.id, req.body.question_id]).then((comments) => res.status(200).send(comments))
    }
        
        
    


}