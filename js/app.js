const projectData = {
    1: {
        title: "01. FinOps Budget Enforcement",
        image: "assets/images/01_finops_budget.png",
        problem: "O time de Finanças sofria com alarmes tardios de estouro de custos. Não havia mecanismo automático que gerasse bloqueio preventivo (hard limit) nas contas de prototipação da AWS.",
        impact: "Desenhamos uma automação serverless de Governança. Se o orçamento mapeado cruza o Budget Threshold, um EventBridge trigga uma Lambda que aplica diretamente na AWS Organizations uma SCP (Service Control Policy), cortando imediatamente novos gastos e notificando auditoria.",
        repo: "01-finops-budget-enforcement/README.md"
    },
    2: {
        title: "02. Cost Explorer Report",
        image: "assets/images/02_cost_report.png",
        problem: "Visibilidade de custos obscura entre diferentes contas gerava dezenas de horas manuais para TI exportar, limpar e enviar os gastos.",
        impact: "Criação de um datadrop automático. Todo dia 1º, a automação cruza o Organizations com a API de Cost Explorer da AWS, calcula Custos vs Créditos, constrói um relatório consolidado no Amazon S3 e envia um Presigned URL de longa duração via SNS direto à caixa do diretor financeiro.",
        repo: "02-cost-report-automation/README.md"
    },
    3: {
        title: "03. Sophos Inventory Reconciliation",
        image: "assets/images/03_sophos_inventory.png",
        problem: "Silos de dados impossibilitavam saber quais máquinas corporativas do inventário interno estavam efetivamente rodando e conectadas à malha de segurança central da Sophos.",
        impact: "Engenharia de verificação cruzada extraindo dados de APIs proprietárias. O processador lambda roda queries do inventário original vs Sophos API, criando buckets analíticos e gerando relatórios responsivos diários apontando as falhas de blindagem da nuvem de modo acionável.",
        repo: "03-sophos-reconciliation/README.md"
    },
    4: {
        title: "04. Terraform PoC Factory",
        image: "assets/images/04_terraform_poc.png",
        problem: "Início lento e caótico para novos projetos de Data Science tentando testar AWS Bedrock sem esbarrar nas permissões governamentais e custos fantasmas.",
        impact: "Fábrica padronizada de Sandbox usando Infrastructure as Code (Terraform). Os ambientes já nascem blindados, em redes VPC sem acesso externo arbitrário, munidos de rotinas nativas programadas para desligar as instâncias EC2 aos finais de expediente (FinOps by design).",
        repo: "04-terraform-poc-factory/README.md"
    },
    5: {
        title: "05. Secure Data Ingestion",
        image: "assets/images/05_secure_data.png",
        problem: "Risco altíssimo à LGPD ao permitir que clientes realizem uploads manuais ou envios de base de testes PII contendo sensibilidade (CPFs, Dados Financeiros).",
        impact: "Construção de uma autêntica 'Quarentena de Dados'. Arquitetura blindada usando Amazon Cognito como porteiro para S3 de Zona Vermelha. As instâncias analíticas posteriores (Zona Verde) só possuem leitura permitida após processadores robóticos censurarem a PI da carga recebida.",
        repo: "05-secure-data-ingestion/README.md"
    },
    6: {
        title: "06. Multi-Account VPN",
        image: "assets/images/06_multi_account_vpn.png",
        problem: "Conectividade de rede complexa entre a Conta Consumidora e Servidores Fechados do cliente que não utilizavam túneis convencionais e sem portas de SSH abertas.",
        impact: "Uso disruptivo de AWS Systems Manager (SSM) para provisionamento de scripts internos de VPN Linux (Libreswan) mapeados por IKEv2 operando endpoints HTTP sem exposição pública de superfície de controle da sub-rede privada.",
        repo: "06-vpn-connectivity/README.md"
    }
};

// Funções Globais do Modal
function openModal(id) {
    const data = projectData[id];
    if(!data) return;

    // Popula Dados
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-img').src = data.image;
    document.getElementById('modal-problem').textContent = data.problem;
    document.getElementById('modal-impact').textContent = data.impact;
    document.getElementById('modal-github-link').href = data.repo;

    // Trava Rolar a Página
    document.body.style.overflow = 'hidden';

    // Dispara CSS
    const modal = document.getElementById('project-modal');
    modal.classList.add('open');
}

function closeModal(event, force = false) {
    const modal = document.getElementById('project-modal');
    // Só fecha se clicou fora da caixa, ou no X
    if(force || event.target === modal) {
        modal.classList.remove('open');
        document.body.style.overflow = 'unset';
    }
}


document.addEventListener('DOMContentLoaded', () => {

    // Efeito suave de revelação no Scroll usando Intersection Observer
    const reveals = document.querySelectorAll('.reveal');
    
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(element => {
        revealOnScroll.observe(element);
    });

    // Animação super sutil das partículas estáticas ao mover o mouse
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;

        const orb = document.querySelector('.glow-orb');
        if(orb) {
            orb.style.transform = `translate(${mouseX * 100}px, ${mouseY * 100}px)`;
        }
    });

    // Adiciona evento de tecla Esc para fechar o modal
    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape') closeModal(e, true);
    });

});
