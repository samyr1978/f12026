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
        link: "https://www.formula1.com/en/drivers/pierre-gasly", pos: '', pts: ''},
    
    {nome: "Franco Colapinto", nacionalidade: " Argentina", equipe: "Alpine ", 
        link: "https://www.formula1.com/en/drivers/franco-colapinto", pos: '', pts: ''},
            
    {nome: "Fernando Alonso", nacionalidade: "Espanha", equipe: "Aston Martin", 
        link: "https://www.formula1.com/en/drivers/fernando-alonso", pos: '', pts: ''},
            
    {nome: "Lance Stroll", nacionalidade: "Canadá", equipe: "Aston Martin", 
        link: "https://www.formula1.com/en/drivers/lance-stroll", pos: '', pts: ''},
            
    {nome: "Nico Hulkenberg", nacionalidade: "Alemanha", equipe: "Audi", 
        link: "https://www.formula1.com/en/drivers/nico-hulkenberg", pos:'', pts: ''},
    
    {nome: "Gabriel Bortoleto", nacionalidade: "Brasil", equipe: "Audi", 
        link: "https://www.formula1.com/en/drivers/gabriel-bortoleto", pos: '', pts: ''},
            
    {nome: "Sergio Perez", nacionalidade: "México", equipe: "Cadillac", 
        link: "https://www.formula1.com/en/drivers/sergio-perez", pos: '', pts: ''},
            
    {nome: "Valteri Bottas", nacionalidade: "Finlândia", equipe: "Cadillac", 
        link: "https://www.formula1.com/en/drivers/valtteri-bottas", pos: '', pts: ''},
            
    {nome: "Charles Leclerc", nacionalidade: "Monaco", equipe: "Ferrari", 
        link: "https://www.formula1.com/en/drivers/charles-leclerc", pos: '', pts: ''},
            
    {nome: "Lewis Hamilton", nacionalidade: "Inglaterra", equipe: "Ferrari", 
        link: "https://www.formula1.com/en/drivers/lewis-hamilton", pos: '', pts: ''},
            
    {nome: "Estaban Ocon", nacionalidade: "França", equipe: "Haas F1 Team", 
        link: "https://www.formula1.com/en/drivers/esteban-ocon", pos: '', pts: ''},
            
    {nome: "Oliver Bearman", nacionalidade: "Inglaterra", equipe: "Haas F1 Team", 
        link: "https://www.formula1.com/en/drivers/oliver-bearman", pos: '', pts: ''},
            
    {nome: "Lando Norris", nacionalidade: "Inglaterra", equipe: "McLaren", 
        link: "https://www.formula1.com/en/drivers/lando-norris", pos: '', pts: ''},
            
    {nome: "Oscar Piastri", nacionalidade: "Austrália", equipe: "McLaren", 
        link: "https://www.formula1.com/en/drivers/oscar-piastri", pos: '', pts: ''},
            
    {nome: "George Russell", nacionalidade: "Inglaterra", equipe: "Mercedes", 
        link: "https://www.formula1.com/en/drivers/george-russell", pos: '', pts: ''},
            
    {nome: "Kimi Antonelli", nacionalidade: "Itália", equipe: "Mercedes", 
        link: "https://www.formula1.com/en/drivers/kimi-antonelli", pos: '', pts: ''},
            
    {nome: "Liam Lawson", nacionalidade: "Nova Zelândia", equipe: "Racing Bulls", 
        link: "https://www.formula1.com/en/drivers/liam-lawson", pos: '', pts: ''},
            
    {nome: "Arvid Lindblad", nacionalidade: "Inglaterra", equipe: "Racing Bulls", 
        link: "https://www.formula1.com/en/drivers/arvid-lindblad", pos: '', pts: ''},
            
    {nome: "Max Verstappen", nacionalidade: "Holanda", equipe: "Red Bull Racing", 
        link: "https://www.formula1.com/en/drivers/max-verstappen", pos: '', pts: ''},
            
    {nome: "Isack Hadjar", nacionalidade: "França", equipe: "Red Bull Racing", 
        link: "https://www.formula1.com/en/drivers/isack-hadjar", pos: '', pts: ''},
            
    {nome: "Carlos Sainz", nacionalidade: "Espanha", equipe: "Williams", 
        link: "https://www.formula1.com/en/drivers/carlos-sainz", pos: '', pts: ''},
            
    {nome: "Alexander Albon", nacionalidade: "Tailândia", equipe: "Williams", 
        link: "https://www.formula1.com/en/drivers/alexander-albon", pos: '', pts: ''}
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
            link: "https://www.formula1.com/en/teams/mclaren", pts: ''},
            
        {equipe: "Mercedes", 
            link: "https://www.formula1.com/en/teams/mercedes", pts: ''},
            
        {equipe: "Red Bull Racing",
            link: "https://www.formula1.com/en/teams/red-bull-racing", pts: ''},
            
        {equipe: "Ferrari", 
            link: "https://www.formula1.com/en/teams/ferrari", pts: ''},
            
        {equipe: "Williams", 
            link: "https://www.formula1.com/en/teams/williams", pts: ''},
            
        {equipe: "Racing Bulls", 
            link: "https://www.formula1.com/en/teams/racing-bulls", pts: ''},
            
        {equipe: "Aston Martin", 
            link: "https://www.formula1.com/en/teams/aston-martin", pts: ''},
            
        {equipe: "Haas F1 Team", 
            link: "https://www.formula1.com/en/teams/haas", pts: ''},
            
        {equipe: "Alpine", 
            link: "https://www.formula1.com/en/teams/alpine", pts: ''},
            
        {equipe: "Audi", 
            link: "https://www.formula1.com/en/teams/audi", pts: ''},
            
        {equipe: "Cadillac", 
            link: "https://www.formula1.com/en/teams/cadillac", pts: ''}
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
