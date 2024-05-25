// Class Dynamo built to generate a pseudo-random slug for use in url
/* BRIEF
    This is my solution to preventing misuse of my API and protecting my keys.
    Key is used in an env variable but it needs to be in the header sent to MAL
    Sent request from server to MAL to prevent leaking the key but this the trick
    this generates a NEW slug each time the SINGLE request this server accepts is made
    this random slug that constantly changes is used in the url endpoint that triggers my API 
        to send the request to MAL
    Hopefully this prevents abuse
*/

class Dynammo {
    constructor() {
        this.str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        this.num = 0
    }

    create(length) {
        if (length === null || undefined) return
        
        if (length <= 0) {
            return new Error({message: "ERROR: LEN MUST BE 1 OR HIGHER"})
        } else if(length >= 100000) {
            return new Error({message: "ERROR: LEN MUST NOT BE HIGHER THAN 99999"})
        }

        let result = '';
        const characters = this.str;
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }
}

module.exports = Dynammo