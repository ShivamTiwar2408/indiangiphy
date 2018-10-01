const express = require('express');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('static'));
app.post('/slackgify' , (req, res) => {
    res.send({
        "attachments": [
            {
                "image_url": "https://curvy-penguin-6.localtunnel.me/tenor-nacho-bc.gif",
                // "actions": [
                //     {
                //         "name": "send",
                //         "text": "Send",
                //         "type": "button",
                //         "value": "send"
                //     },
                //     {
                //         "name": "shuffle",
                //         "text": "Shuffle",
                //         "type": "button",
                //         "value": "shuffle"
                //     },
                //     {
                //         "name": "cancel",
                //         "text": "Cancel",
                //         "type": "button",
                //         "value": "cancel"
                //     }
                // ]
            }
        ]
    });
});

app.post('/file' , (req, res) => {
    var tag = req.body.tag;
    res.send({tags : [tag]});//dummy code
});

app.post('/upload' , (req, res) => { 
});

app.listen(process.env.PORT || 3000 , (err , res)=> {
    if (err){
        console.error(err);
    }else{
        console.info('app running at http://localhost:' + (process.env.PORT || 3000));
    }
});
module.exports = app;