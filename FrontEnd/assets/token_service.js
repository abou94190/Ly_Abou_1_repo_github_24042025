// fonction sauvegarde du token et userID
export function token_sauvegarde(data){

    localStorage.setItem('token', data.token);
    localStorage.setItem('userId', data.userId);

}

// fonction isconnected , verification du token

export function isconnected(){


}