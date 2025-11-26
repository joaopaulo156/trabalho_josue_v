document.addEventListener("DOMContentLoaded", function () {

    const btnAbreCarrinho = document.getElementById('abre-carrinho');
    const prodCarrinho = document.getElementById('prod-carrinho');
    const totalCarrinho = document.getElementById('total-carrinho');
    const contadorCarrinho = document.getElementById('contador-carrinho');

    let carrinho = [];

    const dadosProdutos = [
        { nome: "Camiseta Geek", preco: 79.90 },
        { nome: "Caneca Personalizada", preco: 39.90 },
        { nome: "Mouse Gamer", preco: 149.90 }
    ];

    // Botões adicionar ao carrinho
    const botoes = document.querySelectorAll('.btn-card');
    botoes.forEach(botao => {
        botao.addEventListener('click', (e) => {

            console.log(e.target)


            let id = Number(e.target.getAttribute('data-produto-id'));

            
            carrinho.push(dadosProdutos[id]);

            contadorCarrinho.innerText = carrinho.length;

        });
    });

    // Abrir carrinho
    btnAbreCarrinho.addEventListener('click', () => {

        prodCarrinho.innerHTML = "";
        let total = 0;

        carrinho.forEach((item) => {
            total += item.preco;

            prodCarrinho.innerHTML += `
                <tr>
                    <td>${item.nome}</td>
                    <td>R$ ${item.preco.toFixed(2)}</td>
                </tr>
            `;
        });

        totalCarrinho.innerText = total.toFixed(2);
    });

});
