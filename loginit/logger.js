const  { format, createLogger, transports} = require('winston');
const {combine, timestamp, label, printf, errors} = format

const logFormat =  printf(({level, message, label, timestamp, stack})=>{
    if (stack){
       return  `${timestamp}, [${label}] ${level}: ${message} - ${stack}`
    }
  return  `${timestamp}, [${label}] ${level}: ${message} - ${stack}`
});

const logger =  createLogger({
    level: 'info',
    format: combine(
     label({ label: 'my-app'}),
     timestamp(),
     errors({stack:true}),
     logFormat,
    ),
     transports: [
    new  transports.Console(),
    new  transports.File({filename: 'loginfoproject.log', level: 'info'}),
    new  transports.File({filename: 'logerrorproject.log', level: 'error'}),
    ]
})

module.exports = logger