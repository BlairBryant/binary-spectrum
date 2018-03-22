cmd
ipconfig
IPv4 Address. . . . . . . . . . . : 192.168.1.81
192.168.1.81:3000

add the above to auth0 callback url

users = {
    userid: serial
    auth_id:
    username:
    
}

componentdidmount(){
    // When user hits QA page, run this first. If they have an Avote or BVote stored with
    // their id, then redirect to the next page.
    axios.get('url').then(res => {
        if (res.data) {
            redirect to Result page.
        }
        else nothing.
    })

}

questions = {
    questionID: serial
    question:
    answerA:
    answerB:
    AVotes: //references userID So send up userID in the body.
    BVotes: //references userID So send up userID in the body.
}


votes = {
    vote_id:
    
}

//when a user posts a comment, the res.data needs to have the username, a timestamp,
// and a likes counter that starts at 0.

comments = {
    commentid: serial
    questionID: ref
    userid: references users id
    timestamp:
}

likes = {
    likeid: serial
    commentID: ref
    userID: ref
    like: unique, userid
    dislike: unique, userid
}


Also code out what functions I need for each piece of state


const defaultSurvey = {
    id: -1,
    title: "",
    description: "",
    authorid: -1,
    questions: [
        {
          name: "",
          description: "",
          instructions: "",
          type: "",
          options: [
              {
                label: "",
                min: 0,
                max: 10
              }
            ]
        }
      ]
  }
  
  const defaultUser = {
    id: -1,
    username: "",
    email: "",
    surveyids: [
        -1
      ]
  }
  