class ListaPessoas {
    constructor() {
        this.listaPessoasArray = [];
    }
    adicionar(parametro) {
        if (cadastrarPessoa() == false) {
            this.listaPessoasArray.push(parametro);
        }
    }
    getPersonById(id) {
        const found = this.listaPessoasArray.find((pessoa1) => pessoa1.id > id);
        return found;
    }
}

const bibliotecaContatos = new ListaPessoas();
console.log(bibliotecaContatos);

function cadastrarPessoa() {
    let nome = document.getElementById("input-nome").value;
    let telefixo = document.getElementById("input-telefixo").value;
    let celular = document.getElementById("input-celular").value;
    let imgLink = document.getElementById("input-imgLink").value;
    let data = document.getElementById("input-data").value;
    let email = document.getElementById("input-email").value;
    let cep = document.getElementById("input-cep").value;
    let cidade = document.getElementById("input-cidade").value;
    let instagram = document.getElementById("input-instagram").value;
    let github = document.getElementById("input-github").value;

    console.log(nome);
    console.log(telefixo);
    console.log(celular);
    console.log(imgLink);
    console.log(data);
    console.log(email);
    console.log(cep);
    console.log(cidade);
    console.log(instagram);
    console.log(github);

    if (nome == "" || telefixo == "" || celular == "" || imgLink == "" || data == "" || email == "" || cep == "" || cidade == "" || instagram == "" || github == "") {
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

class Pessoa {
    constructor(nome, telefixo, celular, imgLink, data, email, cep, cidade, instagram, github) {
        this.nome = nome;
        this.telefixo = telefixo;
        this.celular = celular;
        this.imgLink = imgLink;
        this.data = data;
        this.email = email;
        this.cep = cep;
        this.cidade = cidade;
        this.instagram = instagram;
        this.github = github;
        this.id = this.gerarId();
    }
    gerarId() {
        let id = bibliotecaContatos.listaPessoasArray.length + 1;
        return id;
    }
    getZodiacSign() {
        let birthdate = new Date(this.birthdate);
        let day = birthdate.getDate();
        let month = birthdate.getMonth() + 1;
        console.log("Passou pelo getSigno() da class User");

        if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
            return "Capricórnio ♑";
        } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
            return "Aquário ♒";
        } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
            return "Peixes ♓";
        } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
            return "Áries ♈";
        } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
            return "Touro ♉";
        } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
            return "Gêmeos ♊";
        } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
            return "Câncer ♋";
        } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
            return "Leão ♌";
        } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
            return "Virgem ♍";
        } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
            return "Libra ♎";
        } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
            return "Escorpião ♏";
        } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
            return "Sagitário ♐";
        }
    }
}

function comporPessoa() {
    let nome = document.getElementById("input-nome").value;
    let telefixo = document.getElementById("input-telefixo").value;
    let celular = document.getElementById("input-celular").value;
    let imgLink = document.getElementById("input-imgLink").value;
    let email = document.getElementById("input-email").value;
    let data = document.getElementById("input-data").value;
    let cep = document.getElementById("input-cep").value;
    let cidade = document.getElementById("input-cidade").value;
    let instagram = document.getElementById("input-instagram").value;
    let github = document.getElementById("input-github").value;

    const pessoa = new Pessoa(nome, telefixo, celular, imgLink, data, email, cep, cidade, instagram, github);
    console.log(pessoa);

    bibliotecaContatos.adicionar(pessoa);
    console.log(bibliotecaContatos);

    renderizarPessoa();
    Limparinputs();
}

function Limparinputs() {
    document.getElementById("input-nome").value = "";
    document.getElementById("input-telefixo").value = "";
    document.getElementById("input-celular").value = "";
    document.getElementById("input-imgLink").value = "";
    document.getElementById("input-data").value = "";
    document.getElementById("input-email").value = "";
    document.getElementById("input-cep").value = "";
    document.getElementById("input-cidade").value = "";
    document.getElementById("input-instagram").value = "";
    document.getElementById("input-github").value = "";
}



function gerarLinkWhatsapp(celular) {
    let link = "https://api.whatsapp.com/send?phone=55";
    + celular;
    return link;
}

function gerarLinkInstagram(instagram) {
    let linkInsta = "https://instagram.com/@";
    + instagram;
    return linkInsta
}

function gerarLinkGithub(github) {
    let linkGithub = "https://github.com/"
        + github;
    return linkGithub
}

function isURLValida(url) {
    if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        return true;
    } else {
        return false;
    }
}

function detalhesContatoAdicionado(id) {

    const person = bibliotecaContatos.getPersonById(id);

    let detalhePessoa = `
    <div id='detalhe'>
    <p>Detalhe</p>
    <div><img src="${person.imgLink}"></div>
    <h1>${person.nome}</h1>
    <p>Identificador:${person.id}</p>
    <p>Celular: ${person.celular}</p>
    <p>Telefone: ${person.telefixo}</p>
    <p>Data Nascimento: ${person.data}</p>
    <p>Idade: ${person.data}</p>
    <p>Signo: ${person.getZodiacSign()}
    <p>Email: ${person.email}</p>
    <p>CEP: ${person.cep}</p>
    <p>Cidade: ${person.cidade}</p>
    <p>Instagram: ${person.instagram}</p>
    <p>GitHub: ${person.github}</p>

<div>
    <img href="https://api.whatsapp.com/send?phone=55${person.celular}" alt="Whatsapp">
    <img href="https://instagram.com/@${person.instagram}" alt="Instagram">
    <img href="https://github.com/${person.github}" alt="Github">
</div>
    </div>
    `;
    document.getElementById("conteiner-pessoas").innerHTML = detalhePessoa;
}

function renderizarPessoa() {
    const listaHTML = document.getElementById("conteiner-pessoas");
    listaHTML.innerHTML = "";

    let array = bibliotecaContatos.listaPessoasArray;

    array.forEach(pessoa => {
        const pessoaDiv = `
        <div class = 'contatoDetalhe' onclick="detalhesContatoAdicionado('${pessoa.id}')">
            <div class='imgcontato'>
                <img id='img' src='${pessoa.imgLink}'/>
            </div>
            <div class = 'descricaoContato'>
                <h1>${pessoa.nome}</h1>
                <p>Telefone Fixo: ${pessoa.telefixo}</p>
                <p>Telefone Celular: ${pessoa.celular}</p>
            </div>
        </div>
        `;
        listaHTML.innerHTML += pessoaDiv;
    });
}