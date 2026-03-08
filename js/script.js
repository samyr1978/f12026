// Captura a data de hoje
const data = new Date();

// Formata padrão brasileiro (dd/mm/aa)
const dataFormatada = data.toLocaleDateString('pt-BR');

// Insere

function atualizarContador() {
    // Define a data alvo
    const dataAlvo = new Date(2026, 2, 13, 0, 30, 0).getTime();
    const agora = new Date().getTime();
    const diferenca = dataAlvo - agora;
   
    // Cálculos de conversão
        const dias =  Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000); 
            
    // Exibe o resultado 
    
}

// Atualiza a interface a cada 1 segundo (1000ms)
setInterval(atualizarContador, 60000);
atualizarContador();

// Dados dos Pilotos
let pilotos = [
    {nome: "Pierre Gasly", nacionalidade: "França", equipe: "Alpine", 
        link: "https://www.formula1.com/en/drivers/pierre-gasly", pos: '10', pts: '1'},
    
    {nome: "Franco Colapinto", nacionalidade: " Argentina", equipe: "Alpine ", 
        link: "https://www.formula1.com/en/drivers/franco-colapinto", pos: '14', pts: '0'},
            
    {nome: "Fernando Alonso", nacionalidade: "Espanha", equipe: "Aston Martin", 
        link: "https://www.formula1.com/en/drivers/fernando-alonso", pos: '20', pts: '0'},
            
    {nome: "Lance Stroll", nacionalidade: "Canadá", equipe: "Aston Martin", 
        link: "https://www.formula1.com/en/drivers/lance-stroll", pos: '22', pts: '0'},
            
    {nome: "Nico Hulkenberg", nacionalidade: "Alemanha", equipe: "Audi", 
        link: "https://www.formula1.com/en/drivers/nico-hulkenberg", pos:'19', pts: '0'},
    
    {nome: "Gabriel Bortoleto", nacionalidade: "Brasil", equipe: "Audi", 
        link: "https://www.formula1.com/en/drivers/gabriel-bortoleto", pos: '9', pts: '2'},
            
    {nome: "Sergio Perez", nacionalidade: "México", equipe: "Cadillac", 
        link: "https://www.formula1.com/en/drivers/sergio-perez", pos: '16', pts: '0'},
            
    {nome: "Valteri Bottas", nacionalidade: "Finlândia", equipe: "Cadillac", 
        link: "https://www.formula1.com/en/drivers/valtteri-bottas", pos: '21', pts: '0'},
            
    {nome: "Charles Leclerc", nacionalidade: "Monaco", equipe: "Ferrari", 
        link: "https://www.formula1.com/en/drivers/charles-leclerc", pos: '3', pts: '15'},
            
    {nome: "Lewis Hamilton", nacionalidade: "Inglaterra", equipe: "Ferrari", 
        link: "https://www.formula1.com/en/drivers/lewis-hamilton", pos: '4', pts: '12'},
            
    {nome: "Estaban Ocon", nacionalidade: "França", equipe: "Haas F1 Team", 
        link: "https://www.formula1.com/en/drivers/esteban-ocon", pos: '11', pts: '0'},
            
    {nome: "Oliver Bearman", nacionalidade: "Inglaterra", equipe: "Haas F1 Team", 
        link: "https://www.formula1.com/en/drivers/oliver-bearman", pos: '7', pts: '6'},
            
    {nome: "Lando Norris", nacionalidade: "Inglaterra", equipe: "McLaren", 
        link: "https://www.formula1.com/en/drivers/lando-norris", pos: '5', pts: '10'},
            
    {nome: "Oscar Piastri", nacionalidade: "Austrália", equipe: "McLaren", 
        link: "https://www.formula1.com/en/drivers/oscar-piastri", pos: '18', pts: '0'},
            
    {nome: "George Russell", nacionalidade: "Inglaterra", equipe: "Mercedes", 
        link: "https://www.formula1.com/en/drivers/george-russell", pos: '1', pts: '25'},
            
    {nome: "Kimi Antonelli", nacionalidade: "Itália", equipe: "Mercedes", 
        link: "https://www.formula1.com/en/drivers/kimi-antonelli", pos: '2', pts: '18'},
            
    {nome: "Liam Lawson", nacionalidade: "Nova Zelândia", equipe: "Racing Bulls", 
        link: "https://www.formula1.com/en/drivers/liam-lawson", pos: '13', pts: '0'},
            
    {nome: "Arvid Lindblad", nacionalidade: "Inglaterra", equipe: "Racing Bulls", 
        link: "https://www.formula1.com/en/drivers/arvid-lindblad", pos: '8', pts: '4'},
            
    {nome: "Max Verstappen", nacionalidade: "Holanda", equipe: "Red Bull Racing", 
        link: "https://www.formula1.com/en/drivers/max-verstappen", pos: '6', pts: '8'},
            
    {nome: "Isack Hadjar", nacionalidade: "França", equipe: "Red Bull Racing", 
        link: "https://www.formula1.com/en/drivers/isack-hadjar", pos: '17', pts: '0'},
            
    {nome: "Carlos Sainz", nacionalidade: "Espanha", equipe: "Williams", 
        link: "https://www.formula1.com/en/drivers/carlos-sainz", pos: '15', pts: '0'},
            
    {nome: "Alexander Albon", nacionalidade: "Tailândia", equipe: "Williams", 
        link: "https://www.formula1.com/en/drivers/alexander-albon", pos: '12', pts: '0'}
    ];

// Carrega os dados dos pilotos
function funcPilotosCorrida() {
    const corpo = document.getElementById('tabelaPilotosCorrida');
            
    // Ordena do maior para o menor ponto
    pilotos.sort((a, b) => {
        if (a.pts === '' && b.pts === '') return 0;
        if (a.pts === '') return 1;
        if (b.pts === '') return -1;
        
        return parseInt(b.pts) - parseInt(a.pts);
       
    }
)
    corpo.innerHTML = pilotos.map((p, i) =>`
        <tr>
            <td>${i + 1}</td>
            <td><a href = "${p.link}" target="_blank" style="text-decoration: none">${p.nome}&#x2197</a></td>
            <td>${p.nacionalidade}</td>
            <td>${p.equipe}</td>
            <td>${p.pts}</td>
        </tr>
    `).join('');    
}
funcPilotosCorrida();




// Dados dos construtores
    let construtores = [
        {equipe: "McLaren", 
            link: "https://www.formula1.com/en/teams/mclaren", pts: '10'},
            
        {equipe: "Mercedes", 
            link: "https://www.formula1.com/en/teams/mercedes", pts: '43'},
            
        {equipe: "Red Bull Racing",
            link: "https://www.formula1.com/en/teams/red-bull-racing", pts: '8'},
            
        {equipe: "Ferrari", 
            link: "https://www.formula1.com/en/teams/ferrari", pts: '27'},
            
        {equipe: "Williams", 
            link: "https://www.formula1.com/en/teams/williams", pts: '0'},
            
        {equipe: "Racing Bulls", 
            link: "https://www.formula1.com/en/teams/racing-bulls", pts: '4'},
            
        {equipe: "Aston Martin", 
            link: "https://www.formula1.com/en/teams/aston-martin", pts: '0'},
            
        {equipe: "Haas F1 Team", 
            link: "https://www.formula1.com/en/teams/haas", pts: '6'},
            
        {equipe: "Alpine", 
            link: "https://www.formula1.com/en/teams/alpine", pts: '1'},
            
        {equipe: "Audi", 
            link: "https://www.formula1.com/en/teams/audi", pts: '2'},
            
        {equipe: "Cadillac", 
            link: "https://www.formula1.com/en/teams/cadillac", pts: '0'}
    ]

// Carrega os dados dos pilotos
function funcConstrutores() {
    const corpo = document.getElementById('tabelaConstrutores');
            
    // Ordena do maior para o menor ponto
    construtores.sort((a, b) => {
        if (a.pts === '' && b.pts === '') return 0;
        if (a.pts === '') return 1;
        if (b.pts === '') return -1;
        return parseInt(b.pts) - parseInt(a.pts);
    }
)
    corpo.innerHTML = construtores.map((p, i) =>`
        <tr>
            <td>${i+ 1}</td>
            <td><a href = "${p.link}" target="_blank" style="text-decoration: none">${p.equipe}&#x2197</a></td>
            <td>${p.pts}</td>
        </tr>
    `).join('');    
}
funcConstrutores();
