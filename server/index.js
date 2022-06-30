let Twit = require('twit')
const CronJob = require("cron").CronJob;


let T = new Twit({
    consumer_key: '',
    consumer_secret: '',
    access_token: '',
    access_token_secret: '',
})

let id_tweet;
var mood = ['feliz :)', 'triste u.u', 'estresado :S', 'emputad@ >:c',
 ':3', ':V', '<3', '<3<3<3', ':*', 'inseguro :/', 'asi es :o', 'o.O', 
 'O.o', 'hola o/', 'o/', ':D', ':)))', ':/', ';)', 'culon ', 'epa :P', ':P'];

function tuit() {
    T.post('statuses/update', { status: mood[Math.floor(Math.random() * mood.length)]}, function (err, data, response) {
        console.log(data)
    })
}

const job = new CronJob("0, 15, 30, 45 * * * *", () => {
    console.log('running every minute 0, 15, 30, 45')
    tuit();
    console.log('tuiteado');
});

job.start();

/*
function buscar() {
    T.get('search/tweets', { q: 'chabelo', count:100 }, function (err, data, response) {
        //console.log(data)
        try {
            id_tweet = data.statuses[0].id_str;
            retuitear(id_tweet);
        } catch (error) {
            console.log(error);
        }
    })
}



function retuitear(tweet) {
    T.post('statuses/retweet/:id', { id: tweet }, function (err, data, response) {
        console.log(data)
    })
}

setInterval(tuitear, 10*1000);
*/
