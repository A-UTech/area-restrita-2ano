import './Dashboard.css';

const Dashboard = () => {

    const formatDate = () => {
        const meses = [
            'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
            'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
        ];
        
        const hoje = new Date();
        const dia = hoje.getDate();
        const mes = meses[hoje.getMonth()];
        const ano = hoje.getFullYear();
        
        return `${dia} de ${mes}, ${ano}`;
    };

    return (
        <div className="dashboard-container">
            <div className='dashboard-header'>
                <h5>Dashboard</h5>
                <p>{formatDate()}</p>
            </div>
            <div>
                <iframe 
                    title="DashBoardAreaRestrita" 
                    width="600" height="373.5" 
                    src="https://app.powerbi.com/view?r=eyJrIjoiMDliOTgyMmMtOWI0MS00N2U1LWE1ZWEtYmMwY2UxYjdlYjAzIiwidCI6ImIxNDhmMTRjLTIzOTctNDAyYy1hYjZhLTFiNDcxMTE3N2FjMCJ9" 
                    frameborder="0" 
                    allowFullScreen="true"></iframe>
            </div>
        </div>
    );
}

export default Dashboard;