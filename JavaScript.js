//Eventos Inicio

document.addEventListener('DOMContentLoaded', () => {//serve para ser executado só depois de todo o HTML estar carregado  
    const participarButtons = document.querySelectorAll('.participar-btn'); // Todos os botões "Inscrever-me"
    const modalBackdrop = document.getElementById('modal'); // O fundo escuro do pop-up
    const eventTitleSpan = document.getElementById('event-title');   // O título dentro do pop-up
    const closeButton = document.getElementById('close-btn');       // Botão "Fechar"
    const participarForm = document.getElementById('participar-form'); // O formulário
    const mensagemSucesso = document.getElementById('msg-sucesso'); // Mensagem de sucesso

    let currentEventName = ''; 

    participarButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            currentEventName = event.currentTarget.getAttribute('data-event-name');
            
            eventTitleSpan.textContent = currentEventName;
            
            modalBackdrop.classList.remove('hidden');
            
            mensagemSucesso.classList.add('hidden');
            participarForm.classList.remove('hidden'); 
        });
    });

    const closeModal = () => {
        modalBackdrop.classList.add('hidden');
        participarForm.reset();
    };

    closeButton.addEventListener('click', closeModal);

    modalBackdrop.addEventListener('click', (event) => {
        if (event.target === modalBackdrop) {
            closeModal();
        }
    });

    participarForm.addEventListener('submit', (event) => {
        event.preventDefault();
            
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        
        console.log(`--- Novo Registo ---`);
        console.log(`Evento: ${currentEventName}`);
        console.log(`Nome: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`--------------------`);

        participarForm.classList.add('hidden');
        mensagemSucesso.classList.remove('hidden');

        
    });
});

//Eventos Fim