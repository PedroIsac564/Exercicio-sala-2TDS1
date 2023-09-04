console.log("JS está ok.");

function cadastrarJogo() {
    let titulo = document.getElementById("input-titulo").value;
    let preco = document.getElementById("input-preco").value;
    let descricao = document.getElementById("input-descricao").value;
    let plataforma = document.getElementById("input-plataforma").value;
    let imgLink = document.getElementById("input-imgLink").value;


    console.log(titulo);
    console.log(preco);
    console.log(descricao);
    console.log(plataforma);
    console.log(imgLink);

    if (titulo == "" || preco == "" || descricao == "" || plataforma == "" || imgLink == "") {
        console.log("Os inputs não estão preenchidos");
        envieMsg('Preencha todos os campos', 'erro');
        return true;
    } else if (!isURLValida(imgLink)) {
        envieMsg("URL da imagem invalido!", "error")
    } else {
        console.log("Os inputs estão preenchidos");
        envieMsg('Cadastrado', 'sucesso')
        return false;
    }
}

function envieMsg(msg, tipoMsg) {
    let msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = '';

    let msgParaTela = `
    <p class='${tipoMsg}'>${msg}</p>
    `
    msgDiv.innerHTML = msgParaTela;

    setTimeout(function () {
        msgDiv.innerHTML = '';
    }, 3000)
}

class Jogo {
    constructor(titulo, preco, descricao, plataforma, imgLink) {
        this.titulo = titulo;
        this.preco = preco;
        this.descricao = descricao;
        this.plataforma = plataforma;
        this.imgLink = imgLink;
    }
}

const jogoTeste = new Jogo("Teste", "precotest", "descricaoteste", "plataformateste", "imglinkteste")

console.log(jogoTeste);

function comporJogo() {
    let titulo = document.getElementById("input-titulo").value;
    let preco = document.getElementById("input-preco").value;
    let descricao = document.getElementById("input-descricao").value;
    let plataforma = document.getElementById("input-plataforma").value;
    let imgLink = document.getElementById("input-imgLink").value;

    const jogo = new Jogo(titulo, preco, descricao, plataforma, imgLink)
    console.log(jogo);

    bibliotecaJogos.adicionar(jogo);
    console.log(bibliotecaJogos);

    renderizarConteudo();
}


class ListaJogos {
    constructor() {
        this.listaJogosArray = [];
    }
    adicionar(parametro) {
        //this.listaJogosArray.push(parametro)

        if (cadastrarJogo() == false) {
            this.listaJogosArray.push(parametro);
        }
    }

}

//const listaTeste = new ListaJogos();
//console.log(listaTeste);

const bibliotecaJogos = new ListaJogos();
console.log(bibliotecaJogos);

function Limparinputs() {
    document.getElementById("input-titulo").value = "";
    document.getElementById("input-preco").value = "";
    document.getElementById("input-descricao").value = "";
    document.getElementById("input-plataforma").value = "";
    document.getElementById("input-imgLink").value = "";
}

function renderizarConteudo() {
    const listaHTML = document.getElementById("conteiner-lista");
    listaHTML.innerHTML = "";

    let array = bibliotecaJogos.listaJogosArray;

    array.forEach(jogo => {
        const jogoDiv = `
        <div class = 'jogoDetalhe'>
            <p>Titulo: ${jogo.titulo}</p>
            <p>Preco: R$${jogo.preco}</p>
            <p>Descrição: ${jogo.descricao}</p>
            <p>Plataforma: ${jogo.plataforma}</p>
            <img src="${jogo.imgLink}" alt="${jogo.titulo}"/>
            <button id = "botaoRemove">Remover</button>
        </div>
        `;
        listaHTML.innerHTML += jogoDiv;
    });
}

function isURLValida(url) {
    if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        return true;
    } else {
        return false;
    }
}
