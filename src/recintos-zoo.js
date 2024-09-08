
    class RecintosZoo {

    analisaRecintos(animal, quantidade) {
    }

}

export { RecintosZoo as RecintosZoo };

const recintos = {
    1: { bioma: 'savana', tamanhoTotal: 10, animaisExistentes: { macacos: 3 } },
    2: { bioma: 'floresta', tamanhoTotal: 5, animaisExistentes: {} },
    3: { bioma: 'savana e rio', tamanhoTotal: 7, animaisExistentes: { gazelas: 1 } },
    4: { bioma: 'rio', tamanhoTotal: 8, animaisExistentes: {} },
    5: { bioma: 'savana', tamanhoTotal: 9, animaisExistentes: { leões: 1 } }
};

// animais
const animais = {
    leão: { tamanho: 3, bioma: 'savana' },
    leopardo: { tamanho: 2, bioma: 'savana' },
    crocodilo: { tamanho: 3, bioma: 'rio' },
    macaco: { tamanho: 1, bioma: 'savana ou floresta' },
    gazela: { tamanho: 2, bioma: 'savana' },
    hipopotamo: { tamanho: 4, bioma: 'savana ou rio' }
};

// Função para verificar se um recinto é viável para novos animais
function verificarRecintoViavel(recinto, animal, quantidade) {
    const recintoInfo = recintos[recinto];
    
    if (!recintoInfo) {
        return "Recinto inválido";
    }

    const { bioma, tamanhoTotal, animaisExistentes } = recintoInfo;
    
    if (!animais[animal]) {
        return "Animal inválido";
    }
    
    const { tamanho, bioma: biomaAnimal } = animais[animal];
    
    // Verifica se o bioma é compatível
    if (!bioma.includes(biomaAnimal)) {
        return "Não há recinto viável";
    }
    
    // Calcula o espaço ocupado
    let espacoOcupado = quantidade * tamanho;

    const espacoLivre = tamanhoTotal - espacoOcupado;  // armazena o calculo do espaço livre
    
    // Verifica o espaço disponível
    if (espacoLivre < 0) { 
        return "Não há recinto viável";
    }
    
    // Verifica regras específicas
    if (animal === 'macaco' && quantidade < 2) { //se o animal for macaco e quantidade menor que 2
        return "Não há recinto viável";
    }
    
    if (animal === 'hipopotamo' && bioma !== 'savana e rio') { //se o animal for hipopotamo e bioma for diferente de savana e rio
        return "Não há recinto viável";
    }
    
    if ((animal === 'leão' || animal === 'leopardo') && Object.keys(animaisExistentes).length > 0) { //se o animal for leão ou leopardo e não houver outros animais no recinto
        return "Não há recinto viável";
    }
    
    if (espacoLivre >= 0) {
        return `Recinto nro ${recinto} (espaço livre: ${espacoLivre} total: ${tamanhoTotal})`; // informa o numero do recinto, os espaços livres e o tamanho total
    }
    
    return "Não há recinto viável";
}

    function perguntar() {
        console.log('Qual o tipo de animal? ', (animal) => {
            console.log('Qual a quantidade? ', (quantidade) => {
                const quantidadeNumero = parseInt(quantidade);
                if (isNaN(quantidadeNumero)) {
                    console.log("Quantidade inválida. Por favor, insira um número.");
                    rl.close();
                    return;
                }
                const resultado = processarAnimais(animal.toLowerCase(), quantidadeNumero);
                console.log(resultado);
                close();
            });
        });
       
} perguntar();


