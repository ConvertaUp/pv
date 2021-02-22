let parametros_na_url_atual = window.location.search;

const botao = document.querySelectorAll('.button a');

botao.forEach(botao => {
    const botao_de_compra_url = botao.href;
    let parametros_adicionados = parametros_na_url_atual;

    if (parametros_na_url_atual.startsWith('?') && botao_de_compra_url.includes('?')) {
        parametros_adicionados = parametros_na_url_atual.replace('?', '&');
    }

    botao.href = botao_de_compra_url + parametros_adicionados;
});