//take in a birthday
//get their Sun
//generate two random messages
    //2023 prediction 
    // advice for the year



const getSun= (day, month) => {
    if ( month === 'March' && day >=21 || month === 'April' && day <= 19){
        return "Aries"
    }else if ( month === 'April' && day >=20||month === 'May' && day <= 20 ){
        return "Taurus"
    }else if ( month === 'May' && day >=21||month === 'June' && day <= 20 ){
        return "Gemini"
    }else if ( month === 'June' && day >=21||month === 'July' && day <= 22 ){
        return "Cancer"
    }else if ( month === 'July' && day >=23||month === 'August' && day <= 22 ){
        return "Leo"
    }else if ( month === 'August' && day >=23||month === 'September' && day <= 22 ){
        return "Virgo"
    }else if ( month === 'September' && day >=23||month === 'October' && day <= 22 ){
        return "Libra"
    }else if ( month === 'October' && day >=23||month === 'November' && day <= 21 ){
        return "Scorpio"
    }else if ( month === 'November' && day >=22||month === 'December' && day <= 21 ){
        return "Sagitarius"
    }else if ( month === 'December' && day >=22||month === 'January' && day <= 19 ){
        return "Capricorn"
    }else if ( month === 'January' && day >=20||month === 'February' && day <= 18 ){
        return "Aquarius"
    }else if ( month === 'February' && day >=19||month === 'March' && day <= 20 ){
        return "Taurus"
    }

}


const getMonthMessage = () => {
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'july', 'August', 'September', 'November', 'December']
    randMonth= Math.floor(Math.random() * months.length);
    if (randMonth === 0){
        return 'January will be full of new adventures ' + getSun
    }if (randMonth === 1){
        return 'February is all about creating systems that set you up for sucess ' + getSun
    }if (randMonth === 2){
        return 'March means tuning into your intuition ' + getSun
    }if (randMonth === 3){
        return 'April means charging forward towards your goals. Do not hold back ' + getSun
    }if (randMonth === 4){
        return 'When May comes, take some time to smell the roses ' + getSun
    }if (randMonth === 5){
        return 'June will be a time of celebration.  Connect with good friends and make memories ' + getSun
    } if (randMonth === 6){
        return 'With the sunshine of July comes natures abundance, soak in every blessing that comes your way ' + getSun
    }if (randMonth === 7){
        return 'August is all about stepping into your royal robes ' + getSun + ' where are you ready to shine?'
    }if (randMonth === 8){
        return 'After a wild summer September is time to get your ducks in a row  ' + getSun + ' Plan out how you are going to complete your final 2023 goals'
    }if (randMonth === 9){
        return 'October is your month ' + getSun + ' take stock of your harvest from this past year. What are you most proud of?'
    }if (randMonth === 10){
        return 'November will be all about gratitude and blessings' + getSun
    }if (randMonth === 11){
        return 'Savor the year past in December, and get ready for a fabulous New Year' + getSun
    }
}

// const getQuote = () =>{

// }


console.log (getSun(24, 'September'))
