document.addEventListener("DOMContentLoaded", function () {
    const projetos = [
        {
            titulo: 'Portfólio básico',
            descricao: 'Descrição: um portifólio bem básico feito em uma aula de introdução a web em que falo um pouco sobre mim, sobre meus sonhos e objetivos.',
            imagem: 'portfolioAntigo.png',
            clientes: 'Clientes: Jean & CIA'
        },
        {
            titulo: 'Soli Deo Gloria',
            descricao: 'Descrição: meu primeiro HTML, extremamente básico. nele eu falo sobre o que significa Soli Deo Gloria, um dos 5 "solas" da reforma protestante.',
            imagem: 'imgSoli.jpg',
            clientes: 'Clientes: JPZ company, Jean & CIA'
        },
        {
            titulo: 'Exploração dos Fundamentos do CSS',
            descricao: 'Descrição: ma página criada com a intenção de servir para explorar os fundamentos do CSS e para praticar sua utilização na criação de páginas web. Usei uma pequena dose de humor nela.',
            imagem: 'imgPedro.jpg',
            clientes: 'Clientes: Supermercado Pedro Arnaldo'
        }

    ];

    //chamando elementos para alterar
    let conteudoExibido = document.getElementById('sect2')
    let listaProjetos = document.getElementById('listaProjetos')
    let tituloSect2 = document.getElementById('tituloSect2')
    let imagemSect2 = document.getElementById('imgSect2')
    let paragrafo2 = document.getElementById('paragrafoClientes')

    //loop
    projetos.forEach((projeto) => {
        let li = document.createElement('li')

        let novoBotao = document.createElement('button')

        novoBotao.textContent = projeto.titulo

        novoBotao.addEventListener("click", function () {
            tituloSect2.textContent = projeto.titulo
            paragrafoSect2.textContent = projeto.descricao
            imagemSect2.setAttribute('src', projeto.imagem)
            paragrafo2.textContent = projeto.clientes

            conteudoExibido.style.display = "block"; // Exibe a section
        });

        li.appendChild(novoBotao);
        listaProjetos.appendChild(li);
    });

    // Adiciona um evento para ocultar a section ao clicar fora dela
    window.onclick = function (event) {
        if (event.target == conteudoExibido) {
            conteudoExibido.style.display = "none";
        }
    };
});
