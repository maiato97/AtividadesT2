// Atividades(2) Módulo01 - +praTi
const prompt = require("prompt-sync")()

//1. Acessando propriedades de um objeto com for in.
function exercicio01() {
    console.log("\nExercício 01: Iterar sobre as propriedades do objeto e exibir seus valores no console:")
    let carro = {
        marca: 'Fiat',
        modelo: 'Palio',
        ano: 2020,
        cor: "Preto"
    }

    for(let key in carro){
        console.log(carro[key])
    }
}

//2. Verificando Propriedades
function exercicio02() {
    console.log("\nExercício 02: Verificar se objeto contém propriedade 'editora' e adiciona-la no objeto:")
    let livro = {
        titulo: "Twilight",
        Autor: "Stephenie Meyer",
        anoPublicacao: 2005,
        genero: "Romance"
    }
    console.log(livro)

    let opcao = prompt("Aperte ENTER para adicionar a propriedade 'editora' ao objeto...")

    if (opcao === ""){
        let temEditora = false

        for(let key in livro){
            if(key === "editora"){
                temEditora = true
                break
            }
        }

        if(!temEditora){
            console.log("Adicionando editora...")
            livro.editora = "Megan Tingley Books"
        }
    }
    console.log(livro)
}

//3. Filtrando Propriedades de Objetos
function exercicio03(){
    console.log("\nExercício 03: Criar uma função que retorna um novo objeto contendo apenas as propriedades cujo valor seja maior que um valor específico:")
    let produto = {
        nome: "Smartphone",
        preco: 1500,
        peso: 200, // em gramas
        quantidade: 50,
        garantia: 12, // em meses
        avaliacao: 4.5
    }
    console.log(produto)

    function filtrarPropriedadesEmNovoObjeto(objeto, valorMin){
        let novoObjeto = {}

        for(let propriedade in objeto){
            if(objeto[propriedade] > valorMin){
                novoObjeto[propriedade] = objeto[propriedade]
            }
        }
        return novoObjeto
    }

    console.log("Criando novo objeto com propriedades maiores que 100...")

    let resultado = (filtrarPropriedadesEmNovoObjeto(produto, 100))
    console.log(resultado)
}

//4. Iterando Sobre Arrays de Objetos
function exercicio04(){
    console.log("\nExercício 04: Criar um array de objetos pessoa e iterar usando for of: ")
    let arrayPessoas = [
        {
            nome: "Carol",
            idade: 27,
            cidade: "Porto Alegre"
        },
        {
            nome: "João",
            idade: 42,
            cidade: "Sapucaia do Sul"
        },
        {
            nome: "Maria",
            idade: 13,
            cidade: "Caxias do Sul"
        }
    ]

    for (let pessoa of arrayPessoas){
        console.log(`Nome: ${pessoa.nome}, idade: ${pessoa.idade}, cidade: ${pessoa.cidade}`)
    }
}

//5. Calculando Valores em Arrays de Objetos
function exercicio05(){
    console.log("\nExercício 05: Criar um array de objetos pessoa e calcular media de suas notas: ")
    let arrayAlunos = [
        {nome: "Carol", nota1: 9, nota2: 7},
        {nome: "Marina", nota1: 10, nota2: 6},
        {nome: "Jean", nota1: 5, nota2: 3}
    ]
    console.log(arrayAlunos)

    let opcao = prompt("Aperte ENTER para calcular a media das notas dos alunos...")
    if(opcao === ""){
        for (let aluno of arrayAlunos){
            let media = (aluno.nota1 + aluno.nota2) / 2

            console.log(`Nome: ${aluno.nome}, Média: ${media.toFixed(2)}`)
        }
    }
}

//6. Filtrando Arrays de Objetos
function exercicio06(){
    console.log("\nExercício 06: Criar array de funcionarios e filtrar apenas aqueles com salario maior que um valor específico: ")
    let funcionarios = [
        {nome: "Maria", cargo: "Secretária", salario: 1500},
        {nome: "Paula", cargo: "Diretora", salario: 12000},
        {nome: "Andre", cargo: "Assistente", salario: 2200},
        {nome: "Eduardo", cargo: "Dev Pleno", salario: 5000},
        {nome: "Carol", cargo: "Dev Júnior", salario: 2600}
    ]
    console.log(funcionarios)

    let opcao = prompt("Aperte ENTER para filtrar funcionários com salário acima de R$2500...")
    if(opcao === ""){
        for(let funcionario of funcionarios){
            if(funcionario.salario > 2500){
                console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: R$${funcionario.salario} `)
            }
        }
    }
}

//7. Modificando Objetos em um Array
function exercicio07(){
    console.log("\nExercício 07: Criar array de objetos produtos e aplicar desconto 10% com ForEach: ")
    let produtos = [
        {nome: "Smartphone", preco: 2200, desconto: 0},
        {nome: "Notebook", preco: 3050, desconto: 0},
        {nome: "Headset", preco: 259, desconto: 0},
        {nome: "Computador", preco: 7800, desconto: 0},
        {nome: "Teclado", preco: 120, desconto: 0},
        {nome: "Mouse", preco: 50, desconto: 0}
    ]
    console.log(produtos)

    produtos.forEach(function(produto){
        produto.desconto = 0.10
        produto.preco = produto.preco - (produto.preco * produto.desconto)
    })

    let opcao = prompt("Aperte ENTER para visualizar o preço dos produtos com 10% de desconto...")
    if(opcao === ""){
        produtos.forEach(function(produto) {
            console.log('Nome: ', produto.nome, ', Preço com desconto: ', produto.preco.toFixed(2));
        });
    }
}

//8. Criando Novos Arrays a Partir de Objetos
function exercicio08(){
    console.log("\nExercício 08: Criar array de objetos filmes e filtrar apenas os seus titulos com ForEach: ")
    let filmes = [
        {nome: "Crepúsculo", diretor:"Catherine Hardwicke", anoLancamento: 2008},
        {nome: "Lua Nova", diretor:"Chris Weitz", anoLancamento: 2009},
        {nome: "Eclipse", diretor:"David Slade", anoLancamento: 2010},
        {nome: "Amanhecer Pt.1", diretor:"Bill Condon", anoLancamento: 2011},
        {nome: "Amanhecer Pt.2", diretor:"Bill Condon", anoLancamento: 2012}
    ]
    console.log(filmes)

    let titulos = []

    filmes.forEach(function(filme){
        titulos.push(filme.nome)
    })

    let opcao = prompt("Aperte Enter para visualizar apenas os títulos dos filmes...")
    if(opcao === ""){
        console.log(titulos)
    }
}

//9. Contabilizando Elementos com uma Condição
function exercicio09(){
    console.log("\nExercício 09: Criar array de objetos clientes e mostrar apenas clientes acima de 30 anos: ")
    let clientes = [
        { nome: "Ana Souza", idade: 28, cidade: "São Paulo" },
        { nome: "Carlos Pereira", idade: 35, cidade: "Rio de Janeiro" },
        { nome: "Fernanda Lima", idade: 22, cidade: "Belo Horizonte" },
        { nome: "João Silva", idade: 40, cidade: "Curitiba" },
        { nome: "Mariana Santos", idade: 31, cidade: "Porto Alegre" }
    ]
    console.log(clientes)

    let maisDe30 = []

    clientes.forEach(function(cliente){
        if (cliente.idade > 30){
            maisDe30.push(cliente)
        }
    })

    let opcao = prompt("Aperte ENTER para mostrar apenas clientes com mais de 30 anos...")
    if(opcao === ""){
        console.log(maisDe30)
    }
}

//10. Criando Relatórios com Objetos e Arrays
function exercicio10(){
    console.log("\nExercício 10: Criar um array de objetos vendas e calcular valor total de produtos: ")
    let vendas = [
        { produto: "Notebook", quantidade: 2, valor: 3000 },
        { produto: "Smartphone", quantidade: 5, valor: 1500 },
        { produto: "Tablet", quantidade: 3, valor: 1200 },
        { produto: "Monitor", quantidade: 1, valor: 800 },
        { produto: "Teclado", quantidade: 10, valor: 100 }
    ]
    console.log(vendas)

    let totalVendas = 0

    vendas.forEach(function(venda) {
        let totalPorProduto = venda.quantidade * venda.valor;
        console.log("Produto: ", venda.produto, ", Valor total: R$ ", totalPorProduto.toFixed(2));
    })

    vendas.forEach(function(venda){
        totalVendas += venda.quantidade * venda.valor
    })

    let opcao = prompt("\nAperte ENTER para visualizar o total de todos os produtos...")
    if(opcao === ""){
        console.log("\nValor total das vendas: R$ " + totalVendas.toFixed(2))
    }
}

//11. Agrupando Elementos com forEach
function exercicio11(){
    console.log("Exercício 11: Criar array de objetos pedidos e agrupar total de produtos por cliente: ")
    let pedidos = [
        { cliente: "Ana Souza", produto: "Notebook", quantidade: 1 },
        { cliente: "Ana Souza", produto: "Smartphone", quantidade: 3 },
        { cliente: "Carlos Pereira", produto: "Tablet", quantidade: 2 },
        { cliente: "Carlos Pereira", produto: "Teclado", quantidade: 1 },
        { cliente: "Fernanda Lima", produto: "Monitor", quantidade: 2 },
        { cliente: "Fernanda Lima", produto: "Webcam", quantidade: 1 },
        { cliente: "João Silva", produto: "Fone de Ouvido", quantidade: 5 },
        { cliente: "Mariana Santos", produto: "Impressora", quantidade: 1 },
        { cliente: "Mariana Santos", produto: "Hub USB", quantidade: 2 }
    ]
    console.log(pedidos)

    let totalPorCliente = {}

    pedidos.forEach(function(pedido) {
        if (totalPorCliente[pedido.cliente]) {
          totalPorCliente[pedido.cliente] += pedido.quantidade;
        } else {
          totalPorCliente[pedido.cliente] = pedido.quantidade;
        }
    })

    let opcao = prompt("Aperte Enter para mostrar o total de produtos por cliente...")
    if(opcao === ""){
        console.log(totalPorCliente)
    }
}

//12. Atualizando um Array de Objetos
function exercicio12(){
    console.log("Exercício 12: Criar array de objetos estoque com minimo e atualizar a quantidade de produtos que estão abaixo do minimo do estoque: ")
    let estoque = [
        { produto: "Notebook", quantidade: 4, minimo: 5 },
        { produto: "Smartphone", quantidade: 20, minimo: 10 },
        { produto: "Tablet", quantidade: 2, minimo: 7 },
        { produto: "Monitor", quantidade: 8, minimo: 4 },
        { produto: "Teclado", quantidade: 4, minimo: 10 },
        { produto: "Mouse", quantidade: 30, minimo: 15 },
        { produto: "Impressora", quantidade: 5, minimo: 3 },
        { produto: "Cadeira Ergonômica", quantidade: 2, minimo: 6 }
    ]
    console.log(estoque)

    let opcao = prompt("Aperte Enter para atualizar o estoque dos itens abaixo do mínimo...")
    if(opcao === ""){
        estoque.forEach(function(estoque){
            if (estoque.quantidade < estoque.minimo) {
                while (estoque.quantidade < estoque.minimo){
                    estoque.quantidade *= 2
                }
                console.log(`Produto: ${estoque.produto}, Quantidade atualizada: ${estoque.quantidade}`)
            }
        })
    }
}

//13. Implementando um Carrinho de Compras
function exercicio13(){
    console.log("Exercício 13: Criar objeto carrinho com itens em array de objetos e calcular valor total do carrinho: ")
    let carrinho = {
        itens: [
            { produto: "Arroz", quantidade: 2, precoUnitario: 22.90 },
            { produto: "Feijão", quantidade: 1, precoUnitario: 8.99 },
            { produto: "Macarrão", quantidade: 3, precoUnitario: 3.50 },
            { produto: "Óleo", quantidade: 2, precoUnitario: 6.19 },
            { produto: "Açúcar", quantidade: 1, precoUnitario: 2.99 },
            { produto: "Leite", quantidade: 4, precoUnitario: 3.5 },
            { produto: "Café", quantidade: 1, precoUnitario: 14.49 },
            { produto: "Manteiga", quantidade: 1, precoUnitario: 10.99 }
        ]
    }
    console.log(carrinho.itens)

    let valorTotal = 0
    carrinho.itens.forEach(function(item){
        valorTotal += item.quantidade * item.precoUnitario
    })

    let opcao = prompt("Aperte ENTER para totalizar a compra do carrinho...")
    if(opcao === ""){
        console.log("Valor total dos produtos: R$ ", valorTotal.toFixed(2))
    }
}

//14. Manipulando Objetos Complexos
function exercicio14(){
    console.log("Exercício 14: Criar objeto empresa com departamentos em arrays de objeto funcionario e iterar sobre eles: ")
    let empresa = {
        departamentos: [
            {
              nome: "Recursos Humanos",
              funcionarios: ["Ana Souza", "Carlos Pereira", "Fernanda Lima"]
            },
            {
              nome: "Tecnologia",
              funcionarios: ["João Silva", "Mariana Santos", "Roberto Oliveira"]
            },
            {
              nome: "Financeiro",
              funcionarios: ["Patrícia Costa", "Juliana Ferreira", "Eduardo Almeida"]
            },
            {
              nome: "Marketing",
              funcionarios: ["Luciana Silva", "Rafael Gomes", "Bruna Lima"]
            }
        ]
    }
    console.log(empresa.departamentos)

    let opcao = prompt("Aperte ENTER para listas todos os funcionários e seus respectivos departamentos...\n")
    if(opcao === ""){
        for (let i in empresa.departamentos) {
            let departamento = empresa.departamentos[i]

            // Iterando sobre os funcionários dentro de cada departamento
            for (let funcionario of departamento.funcionarios) {
            console.log(`Funcionário: ${funcionario} - Departamento: ${departamento.nome}`)
            }
        }
    }
}

//15. Filtrando e Somando Valores
function exercicio15(){
    console.log("Exercício 15: Criar array de objetos transações com entrada e saída e calcular saldo final: ")
    let transacoes = [
        { tipo: "entrada", valor: 1000 },
        { tipo: "saida", valor: 200 },
        { tipo: "entrada", valor: 500 },
        { tipo: "saida", valor: 300 },
        { tipo: "entrada", valor: 1500 },
        { tipo: "saida", valor: 400 }
    ]
    console.log(transacoes)

    let saldoFinal = 0
    transacoes.forEach(function(transacao){
        if(transacao.tipo === "entrada"){
            saldoFinal += transacao.valor
        } else if (transacao.tipo === "saida"){
            saldoFinal -= transacao.valor
        }
    })

    let opcao = prompt("Aperte ENTER para mostrar o valor final da conta...")
    if(opcao === ""){
        console.log("Saldo final: R$ ", saldoFinal.toFixed(2))
    }
}

//Função para seleção das funções(exercicios) em switch case
function menuOpcoes(ex){
    switch(ex){
        case 1:
            exercicio01()
            break;
        case 2:
            exercicio02()
            break;
        case 3:
            exercicio03()
            break;
        case 4:
            exercicio04()
            break;
        case 5:
            exercicio05()
            break;
        case 6:
            exercicio06()
            break;
        case 7:
            exercicio07()
            break;
        case 8:
            exercicio08()
            break;
        case 9:
            exercicio09()
            break;
        case 10:
            exercicio10()
            break;
        case 11:
            exercicio11()
            break;
        case 12:
            exercicio12()
            break;
        case 13:
            exercicio13()
            break;
        case 14:
            exercicio14()
            break;
        case 15:
            exercicio15()
            break;
    }
}

let ex, continuar

do{
    console.log(`\n**ATIVIDADES MÓDULO 01 +praTi**
        Exercicíos de 1 à 15
        Enunciado do exercício será mostrado no ato de sua execução.`
    )
    ex = parseInt(prompt("Digite qual exercício quer executar: "))

    if (ex >= 1 && ex <= 15) {
        menuOpcoes(ex)
    } else {
        console.log("Opção inválida. Por favor, digite um número entre 1 e 15.")
    }

    continuar = prompt("\nDeseja voltar ao menu?('s' ou 'n'): ")

    if (continuar === "s"){
        menuOpcoes()
    } else {
        console.log("Saindo...")
        return
    }

}while(ex <= 15)
