const logger = require('./logger')

logger.info("Parte do Programa do Certo")
logger.info("Parte do Programa do Warning")
logger.info("Parte do Error")

function exemplo(){
 try{
    logger.info('teste do Winston Certo ....')
    throw new Error(' indo para error')
 }catch(erro){
    logger.error('teste do Winston errado ....', erro.message)

 }
}

exemplo();



