// Laço de repetição

// let nomes = ["Ana Clara","Denise Martins","Rayssa Giovanelly","Roger Alcantra"];

// nomes.forEach(nome => {
//     console.log(nome)
// });

// Enquanto
// Enquanto a condição for verdadeira, o laço continuará se repetindo
// let nome = prompt("Digite o nome do usuário:")
// while(nome !== "Thiago"){
//     console.log("Insira o nome correto:");
//     nome = prompt("Digite o nome do usuário novamente:")
// }


let tarefas = ["Estudar", "Lavar a louça", "Ir para aula"];
let opcao = Number(prompt("Escolha uma opção a seguir:"))

while (opcao !== 0) {
    opcao = Number(prompt(
        "== MINHA TODO LIST ==\n" +
        "Escolha uma opção:\n" +
        "1 - Cadastrar tarefa\n" +
        "2 - Listar tarefas\n" +
        "3 - Buscar tarefa\n" +
        "4 - Atualizar tarefa\n" +
        "5 - Excluir tarefa\n" +
        "6 - Filtrar tarefas\n" +
        "7 - Adicionar tarefa no início\n" +
        "8 - Remover tarefa do início\n" +
        "9 - Remover tarefa do final\n" +
        "0 - Sair"
    ));

    switch (opcao) {
        // Cadastrar tarefa
        case 1: {
            let nova = prompt("Digite a tarefa:");

            if (nova && nova.trim() !== "") {
                tarefas.push(nova);
                alert("Tarefa cadastrada!");
            } else {
                alert("Digite uma tarefa válida!");
            }
            break;
        }

        // Listar tarefas
        case 2:
            if (tarefas.length === 0) {
                alert("Lista vazia!");
            } else {
                let lista = "";
                tarefas.forEach((tarefa, i) => {
                    lista += (i + 1) + " - " + tarefa + "\n";
                });
                alert(lista);
            }
            break;

        // Buscar tarefa
        case 3: {
            let busca = prompt("Digite a tarefa para buscar:");

            if (tarefas.includes(busca)) {
                alert("Tarefa encontrada!");
            } else {
                alert("Tarefa não encontrada!");
            }
            break;
        }

        // Atualizar tarefa
        case 4: {
            let antiga = prompt("Digite a tarefa atual:");
            let indice = tarefas.indexOf(antiga);

            if (indice !== -1) {
                let atualizada = prompt("Digite o novo nome:");

                if (atualizada && atualizada.trim() !== "") {
                    tarefas[indice] = atualizada;
                    alert("Tarefa atualizada!");
                } else {
                    alert("Digite um nome válido!");
                }
            } else {
                alert("Tarefa não encontrada!");
            }
            break;
        }

        // Excluir tarefa
        case 5: {
            let excluir = prompt("Digite a tarefa para excluir:");
            let posicao = tarefas.findIndex(t => t === excluir);

            if (posicao !== -1) {
                tarefas.splice(posicao, 1);
                alert("Tarefa excluída!");
            } else {
                alert("Tarefa não encontrada!");
            }
            break;
        }

        // Filtrar tarefas
        case 6: {
            let texto = prompt("Digite uma letra ou palavra:");

            if (texto === null) break;

            let resultado = tarefas.filter(t =>
                t.toLowerCase().includes(texto.toLowerCase())
            );

            if (resultado.length > 0) {
                alert(resultado.join("\n"));
            } else {
                alert("Nenhuma tarefa encontrada!");
            }
            break;
        }

        // Adicionar tarefa no início
        case 7: {
            let primeira = prompt("Digite a tarefa para adicionar no início:");

            if (primeira && primeira.trim() !== "") {
                tarefas.unshift(primeira);
                alert("Tarefa adicionada no início!");
            }
            break;
        }

        // Remover tarefa do início
        case 8:
            if (tarefas.length > 0) {
                alert("Removida: " + tarefas.shift());
            } else {
                alert("Lista vazia!");
            }
            break;

        // Remover tarefa do final
        case 9:
            if (tarefas.length > 0) {
                alert("Removida: " + tarefas.pop());
            } else {
                alert("Lista vazia!");
            }
            break;

        case 0:
            alert("Até logo!");
            break;

        default:
            alert("Opção inválida!");
    }
}



