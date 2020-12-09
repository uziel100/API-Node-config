require('./settings/index');
const app = require('./app');

app.listen(process.env.PORT, (err) => {
    if(err) console.log (err);
    console.log('Running in PORT: ' + process.env.PORT);
})