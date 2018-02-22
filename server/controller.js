let userId = 2;
let commentId = 3;

module.exports = {
    login: (req, res, next) => {
        const db = req.app.get('db');

        const {username, password} = req.body;
        db.login(username, password).then(user => res.status(200).send(user));

    },
    register: (req, res, next) => {
        const db = req.app.get('db');
        const newId = userId;
        const {username, password} = req.body;
        console.log(newId, username, password)
        db.register(newId, username, password).then(() => res.status(200).send());
        userId++
    },
    getQuestions: (req, res, next) => {
        const db = req.app.get('db');

    
        const{params} = req;
        db.getQuestions([params.id]).then(questions => res.status(200).send(questions));
    },
    answerA: (req, res, next) => {
        const db = req.app.get('db');

        const{body} = req;
        db.answerA(body.id).then(() => res.status(200).send());
    },
    answerB: (req, res, next) => {
        const db = req.app.get('db');

        const{body} = req;
        db.answerB(body.id).then(() => res.status(200).send());
    },
    getComments: (req, res, next) => {
        const db = req.app.get('db');

        db.getComments().then(comments => res.status(200).send(comments))
    },
    deleteComment: (req, res, next) => {
        const db = req.app.get('db');
        const{params} = req;
        db.deleteComment(params.id).then(comments => res.status(200).send(comments))
    },
    addComment: (req, res, next) => {
    const db = req.app.get('db');

    const newId = commentId
    const{username, comment, voted} = req.body;
    db.addComment(newId, username, comment, voted).then(() => res.status(200).send()) 
    commentId++
    }

}