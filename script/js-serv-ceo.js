document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('seo-contact-form');

    form.addEventListener('submit', function(event) {
        // Previne o envio padrão do formulário
        event.preventDefault();

        // Validação básica dos campos
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefone = document.getElementById('telefone').value.trim();

        if (nome === '') {
            alert('Por favor, preencha seu nome completo.');
            document.getElementById('nome').focus();
            return;
        }

        if (email === '') {
            alert('Por favor, preencha seu email.');
            document.getElementById('email').focus();
            return;
        }

        // Validação de formato de email simples
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Por favor, insira um email válido.');
            document.getElementById('email').focus();
            return;
        }

        if (telefone === '') {
            alert('Por favor, preencha seu telefone (WhatsApp).');
            document.getElementById('telefone').focus();
            return;
        }

        // Se todas as validações passaram, você pode processar o formulário.
        // Em um cenário real, você enviaria esses dados para um servidor
        // usando Fetch API ou XMLHttpRequest.
        // Por exemplo:
        // const formData = new FormData(form);
        // fetch('/api/submit-form', {
        //     method: 'POST',
        //     body: formData
        // })
        // .then(response => response.json())
        // .then(data => {
        //     alert('Formulário enviado com sucesso! Entraremos em contato em breve.');
        //     form.reset(); // Limpa o formulário
        // })
        // .catch(error => {
        //     console.error('Erro ao enviar formulário:', error);
        //     alert('Ocorreu um erro ao enviar o formulário. Tente novamente mais tarde.');
        // });

        // Para este exemplo, apenas um alert e reset
        alert('Seu pedido de análise gratuita foi enviado com sucesso! Entraremos em contato em breve.');
        form.reset();
        console.log('Dados do formulário enviados (simulado):', {
            nome: nome,
            email: email,
            telefone: telefone,
            empresa: document.getElementById('empresa').value.trim(),
            site: document.getElementById('site').value.trim(),
            objetivo: document.getElementById('objetivo').value.trim(),
            receberNovidades: document.getElementById('receber-novidades').checked
        });
    });
});