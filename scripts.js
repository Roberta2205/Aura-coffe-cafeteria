document.addEventListener('DOMContentLoaded', function () {
    const botaoHome = document.getElementById('botao-home'); 
    const h1TextHome = document.getElementById('h1-text-home');
    const botaoServicos = document.getElementById('botao-servicos');
    const sectionServicos = document.getElementById('section-servicos');
    const botaoSobre = document.getElementById('botao-sobre');
    const sobreNos = document.getElementById('sobre-nos');
    const buttonPedidos = document.getElementById('button-pedidos');
    const footer = document.getElementById('footer');

    h1TextHome.style.display = 'none';

    botaoHome.addEventListener('click', function() {
        if (h1TextHome.style.display === 'none' || h1TextHome.style.display === '') {
            h1TextHome.style.display = 'block';
        } else {
            h1TextHome.style.display = 'none';
        }
    });

    botaoServicos.addEventListener('click', function() {
                    sectionServicos.style.display = 'block';
                    sectionServicos.scrollIntoView({ behavior: 'smooth' });
                });


    botaoSobre.addEventListener('click', function() {
                sobreNos.style.display = 'flex';
                sobreNos.scrollIntoView({ behavior: 'smooth' });
                });


    buttonPedidos.addEventListener('click', function() {
                footer.style.display = 'block';
                footer.scrollIntoView({ behavior: 'smooth' });
                });
});


