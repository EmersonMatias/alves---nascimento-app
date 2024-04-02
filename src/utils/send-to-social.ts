export function sendToWpp() {
    const mensagem = encodeURIComponent(`Olá, gostaria de falar com um advogado.`)
    return window.open(`https://wa.me/5516991773439?text=${mensagem}`, '_blank');
}

export function sendToWppMarcelo() {
    const mensagem = encodeURIComponent(`Olá, Marcelo. Gostaria de tirar uma dúvida.`)
    return window.open(`https://wa.me/5517992001646?text=${mensagem}`, '_blank');
}

export function sendToWppArmando() {
    const mensagem = encodeURIComponent(`Olá, Armando. Gostaria de tirar uma dúvida.`)
    return window.open(`https://wa.me/5516991427421?text=${mensagem}`, '_blank');
}

export function sendToLinkedinArmando() {
    return window.open(`https://www.linkedin.com/in/armando-vanderlei-nascimento-686772169/?originalSubdomain=br`, '_blank');
}

export function sendToLinkedinMarcelo() {
    return window.open(`https://www.linkedin.com/in/marcelo-antonio-alves-filho-26a558140/?originalSubdomain=br`, '_blank');
}

export function sendToGmailArmando() {

}


export function sendToGmailMarcelo(){
    return window.open(`https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRCZnfvpvFsmVpsrCBqCdmKtVTcNVvbSLMRdgLLlSVGDzzlzzdLRGRZNmrdNVnxVBKxjnC`, '_blank');
}

export function sendToGmail(){
    return window.open(`https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRCZnfvpvFsmVpsrCBqCdmKtVTcNVvbSLMRdgLLlSVGDzzlzzdLRGRZNmrdNVnxVBKxjnC`, '_blank');

}

export function sendToFacebook(){
    return window.open(`https://www.facebook.com/people/Alves-Nascimento-Advocacia/61552579748675/`, '_blank');
  
}

export function sendToInstagram() {
    return window.open(`https://www.instagram.com/alvesenascimentoadvocacia/`, '_blank');
}