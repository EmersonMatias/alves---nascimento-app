export function sendToWpp(){
    const mensagem = encodeURIComponent(`Olá, gostaria de falar com um advogado.`)
    return window.open(`https://wa.me/5516992031949?text=${mensagem}`, '_blank');
}

export function sendToWppMarcelo(){
    const mensagem = encodeURIComponent(`Olá, Marcelo. Gostaria de tirar uma dúvida.`)
    return window.open(`https://wa.me/5517992001646?text=${mensagem}`, '_blank');
}

export function sendToWppArmando(){
    const mensagem = encodeURIComponent(`Olá, Armando. Gostaria de tirar uma dúvida.`)
    return window.open(`https://wa.me/5516991427421?text=${mensagem}`, '_blank');
}

export function sendToLinkedinArmando(){
    return window.open(`https://www.linkedin.com/in/armando-vanderlei-nascimento-686772169/?originalSubdomain=br`, '_blank');
}

export function sendToInstagram(){
    return window.open(`https://www.instagram.com/alvesenascimentoadvocacia/`, '_blank');
}