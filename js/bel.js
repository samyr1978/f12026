// Captura a data de hoje
const data = new Date();

// Formata padrão brasileiro (dd/mm/aa)
const dataFormatada = data.toLocaleDateString('pt-BR');

// Insere

function atualizarContador() {
    // Define a data alvo
    const dataAlvo = new Date(2026, 6, 19, 10, 0, 0).getTime();
    const agora = new Date().getTime();
    const diferenca = dataAlvo - agora;
   
    // Cálculos de conversão
        const dias =  Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000); 
            
    // Exibe o resultado 
    // document.getElementById('regressiva').innerHTML = `${dias} dias, ${horas} hrs, ${minutos} min`;
}

// Atualiza a interface a cada 1 segundo (1000ms)
setInterval(atualizarContador, 60000);
atualizarContador();


let cronograma = [
    {tipo: 'Treino 1', data: '17 JUL', hora: '08:30', canal: 'Sportv | Globoplay | GE'},
    {tipo: 'Treino 2', data: '17 JUL', hora: '12:00', canal: 'Sportv | Globoplay | GE'},
    {tipo: 'Treino 3', data: '18 JUL', hora: '07:30', canal: 'Sportv | Globoplay | GE'},
    {tipo: 'Classificação', data: '18 JUL', hora: '11:00', canal: 'Sportv | Globoplay | GE'},
    {tipo: 'Corrida', data: '19 JUL', hora: '10:00', canal: 'Globo | Sportv | Globoplay | GE'}
]

// Cronograma
function funcTabelaCronograma() {
    const corpo = document.getElementById('corpoTabelaCronograma');
    const finalizados = ['Treino 1', 'Treino 2', 'Treino 3', 'Classificação', 'Corrida']        
    corpo.innerHTML = cronograma.map((p, i) =>`
        <tr>
           <td>${finalizados.includes(p.tipo) ? `<del style='background-color: yellow'>${p.tipo}</del>` : p.tipo}</td>
           <td>${p.data}</td>
           <td>${p.hora}</td>
           <td>${p.canal}</td>
        </tr>
    `).join('');    
}
funcTabelaCronograma();


// gridLargadaCorrida
let gridLargadaCorrida = [
    {nome: "Pierre Gasly", nacionalidade: "França", equipe: "Alpine", 
        link: "https://www.formula1.com/en/drivers/pierre-gasly", pos: '12', pts: ''},
    
    {nome: "Franco Colapinto", nacionalidade: " Argentina", equipe: "Alpine ", 
        link: "https://www.formula1.com/en/drivers/franco-colapinto", pos: '13', pts: ''},
            
    {nome: "Fernando Alonso", nacionalidade: "Espanha", equipe: "Aston Martin", 
        link: "https://www.formula1.com/en/drivers/fernando-alonso", pos: '21', pts: ''},
            
    {nome: "Lance Stroll", nacionalidade: "Canadá", equipe: "Aston Martin", 
        link: "https://www.formula1.com/en/drivers/lance-stroll", pos: '22', pts: ''},
            
    {nome: "Nico Hulkenberg", nacionalidade: "Alemanha", equipe: "Audi", 
        link: "https://www.formula1.com/en/drivers/nico-hulkenberg", pos:'14', pts: ''},
    
    {nome: "Gabriel Bortoleto", nacionalidade: "Brasil", equipe: "Audi", 
        link: "https://www.formula1.com/en/drivers/gabriel-bortoleto", pos: '9', pts: ''},
            
    {nome: "Sergio Perez", nacionalidade: "México", equipe: "Cadillac", 
        link: "https://www.formula1.com/en/drivers/sergio-perez", pos: '20', pts: ''},
            
    {nome: "Valteri Bottas", nacionalidade: "Finlândia", equipe: "Cadillac", 
        link: "https://www.formula1.com/en/drivers/valtteri-bottas", pos: '19', pts: ''},
            
    {nome: "Charles Leclerc", nacionalidade: "Monaco", equipe: "Ferrari", 
        link: "https://www.formula1.com/en/drivers/charles-leclerc", pos: '5', pts: ''},
            
    {nome: "Lewis Hamilton", nacionalidade: "Inglaterra", equipe: "Ferrari", 
        link: "https://www.formula1.com/en/drivers/lewis-hamilton", pos: '6', pts: ''},
            
    {nome: "Estaban Ocon", nacionalidade: "França", equipe: "Haas F1 Team", 
        link: "https://www.formula1.com/en/drivers/esteban-ocon", pos: '18', pts: ''},
            
    {nome: "Oliver Bearman", nacionalidade: "Inglaterra", equipe: "Haas F1 Team", 
        link: "https://www.formula1.com/en/drivers/oliver-bearman", pos: '16', pts: ''},
            
    {nome: "Lando Norris", nacionalidade: "Inglaterra", equipe: "McLaren", 
        link: "https://www.formula1.com/en/drivers/lando-norris", pos: '3', pts: ''},
            
    {nome: "Oscar Piastri", nacionalidade: "Austrália", equipe: "McLaren", 
        link: "https://www.formula1.com/en/drivers/oscar-piastri", pos: '7', pts: ''},
            
    {nome: "George Russell", nacionalidade: "Inglaterra", equipe: "Mercedes", 
        link: "https://www.formula1.com/en/drivers/george-russell", pos: '4', pts: ''},
            
    {nome: "Kimi Antonelli", nacionalidade: "Itália", equipe: "Mercedes", 
        link: "https://www.formula1.com/en/drivers/kimi-antonelli", pos: '1', pts: ''},
            
    {nome: "Liam Lawson", nacionalidade: "Nova Zelândia", equipe: "Racing Bulls", 
        link: "https://www.formula1.com/en/drivers/liam-lawson", pos: '11', pts: ''},
            
    {nome: "Arvid Lindblad", nacionalidade: "Inglaterra", equipe: "Racing Bulls", 
        link: "https://www.formula1.com/en/drivers/arvid-lindblad", pos: '8', pts: ''},
            
    {nome: "Max Verstappen", nacionalidade: "Holanda", equipe: "Red Bull Racing", 
        link: "https://www.formula1.com/en/drivers/max-verstappen", pos: '2', pts: ''},
            
    {nome: "Isack Hadjar", nacionalidade: "França", equipe: "Red Bull Racing", 
        link: "https://www.formula1.com/en/drivers/isack-hadjar", pos: '10', pts: ''},
            
    {nome: "Carlos Sainz", nacionalidade: "Espanha", equipe: "Williams", 
        link: "https://www.formula1.com/en/drivers/carlos-sainz", pos: '15', pts: ''},
            
    {nome: "Alexander Albon", nacionalidade: "Tailândia", equipe: "Williams", 
        link: "https://www.formula1.com/en/drivers/alexander-albon", pos: '17', pts: ''}
    ];

// Carrega os dados dos pilotos
function funcGridLargadaCorrida() {
    const corpo = document.getElementById('gridLargadaCorrida');
            
    // Ordena do maior para o menor ponto
    gridLargadaCorrida.sort((a, b) => {
        if (a.pos === '' && b.pos === '') return 0;
        if (a.pos === '') return 1;
        if (b.pos === '') return -1;
        
        return parseInt(a.pos) - parseInt(b.pos);
       
    }
)
    corpo.innerHTML = gridLargadaCorrida.map((p, i) =>`
        <tr>
            <td>${i + 1}</td>
            <td><a href = "${p.link}" target="_blank" style="text-decoration: none">${p.nome}&#x2197</a></td>
            <td>${p.nacionalidade}</td>
            <td>${p.equipe}</td>
            
        </tr>
    `).join('');    
}
funcGridLargadaCorrida();

// resultadoCorrida
let resultadoCorrida = [
    {nome: "Pierre Gasly", nacionalidade: "França", equipe: "Alpine", 
        link: "https://www.formula1.com/en/drivers/pierre-gasly", pos: '11', pts: '0'},
    
    {nome: "Franco Colapinto", nacionalidade: " Argentina", equipe: "Alpine ", 
        link: "https://www.formula1.com/en/drivers/franco-colapinto", pos: '10', pts: '1'},
            
    {nome: "Fernando Alonso", nacionalidade: "Espanha", equipe: "Aston Martin", 
        link: "https://www.formula1.com/en/drivers/fernando-alonso", pos: '19', pts: '0'},
            
    {nome: "Lance Stroll", nacionalidade: "Canadá", equipe: "Aston Martin", 
        link: "https://www.formula1.com/en/drivers/lance-stroll", pos: '20', pts: 'NC | DNF'},
            
    {nome: "Nico Hulkenberg", nacionalidade: "Alemanha", equipe: "Audi", 
        link: "https://www.formula1.com/en/drivers/nico-hulkenberg", pos:'13', pts: '0'},
    
    {nome: "Gabriel Bortoleto", nacionalidade: "Brasil", equipe: "Audi", 
        link: "https://www.formula1.com/en/drivers/gabriel-bortoleto", pos: '8', pts: '4'},
            
    {nome: "Sergio Perez", nacionalidade: "México", equipe: "Cadillac", 
        link: "https://www.formula1.com/en/drivers/sergio-perez", pos: '21', pts: 'NC | DNF'},
            
    {nome: "Valteri Bottas", nacionalidade: "Finlândia", equipe: "Cadillac", 
        link: "https://www.formula1.com/en/drivers/valtteri-bottas", pos: '18', pts: '0'},
            
    {nome: "Charles Leclerc", nacionalidade: "Monaco", equipe: "Ferrari", 
        link: "https://www.formula1.com/en/drivers/charles-leclerc", pos: '2', pts: '18'},
            
    {nome: "Lewis Hamilton", nacionalidade: "Inglaterra", equipe: "Ferrari", 
        link: "https://www.formula1.com/en/drivers/lewis-hamilton", pos: '4', pts: '12'},
            
    {nome: "Estaban Ocon", nacionalidade: "França", equipe: "Haas F1 Team", 
        link: "https://www.formula1.com/en/drivers/esteban-ocon", pos: '17', pts: '0'},
            
    {nome: "Oliver Bearman", nacionalidade: "Inglaterra", equipe: "Haas F1 Team", 
        link: "https://www.formula1.com/en/drivers/oliver-bearman", pos: '14', pts: '0'},
            
    {nome: "Lando Norris", nacionalidade: "Inglaterra", equipe: "McLaren", 
        link: "https://www.formula1.com/en/drivers/lando-norris", pos: '7', pts: '6'},
            
    {nome: "Oscar Piastri", nacionalidade: "Austrália", equipe: "McLaren", 
        link: "https://www.formula1.com/en/drivers/oscar-piastri", pos: '5', pts: '10'},
            
    {nome: "George Russell", nacionalidade: "Inglaterra", equipe: "Mercedes", 
        link: "https://www.formula1.com/en/drivers/george-russell", pos: '22', pts: 'NC | DNF'},
            
    {nome: "Kimi Antonelli", nacionalidade: "Itália", equipe: "Mercedes", 
        link: "https://www.formula1.com/en/drivers/kimi-antonelli", pos: '1', pts: '25'},
            
    {nome: "Liam Lawson", nacionalidade: "Nova Zelândia", equipe: "Racing Bulls", 
        link: "https://www.formula1.com/en/drivers/liam-lawson", pos: '12', pts: '0'},
            
    {nome: "Arvid Lindblad", nacionalidade: "Inglaterra", equipe: "Racing Bulls", 
        link: "https://www.formula1.com/en/drivers/arvid-lindblad", pos: '9', pts: '2'},
            
    {nome: "Max Verstappen", nacionalidade: "Holanda", equipe: "Red Bull Racing", 
        link: "https://www.formula1.com/en/drivers/max-verstappen", pos: '3', pts: '15'},
            
    {nome: "Isack Hadjar", nacionalidade: "França", equipe: "Red Bull Racing", 
        link: "https://www.formula1.com/en/drivers/isack-hadjar", pos: '6', pts: '8'},
            
    {nome: "Carlos Sainz", nacionalidade: "Espanha", equipe: "Williams", 
        link: "https://www.formula1.com/en/drivers/carlos-sainz", pos: '16', pts: '0'},
            
    {nome: "Alexander Albon", nacionalidade: "Tailândia", equipe: "Williams", 
        link: "https://www.formula1.com/en/drivers/alexander-albon", pos: '15', pts: '0'}
    ];

// Carrega os dados dos pilotos
function funcResultadoCorrida() {
    const corpo = document.getElementById('resultadoCorrida');
            
    // Ordena do maior para o menor ponto
    resultadoCorrida.sort((a, b) => {
        if (a.pos === '' && b.pos === '') return 0;
        if (a.pos === '') return 1;
        if (b.pos === '') return -1;
        
        return parseInt(a.pos) - parseInt(b.pos);
       
    }
)
    corpo.innerHTML = resultadoCorrida.map((p, i) =>`
        <tr>
            <td>${i + 1}</td>
            <td><a href = "${p.link}" target="_blank" style="text-decoration: none">${p.nome}&#x2197</a></td>
            <td>${p.nacionalidade}</td>
            <td>${p.equipe}</td>
            <td>${p.pts}</td>
        </tr>
    `).join('');    
}
funcResultadoCorrida();



