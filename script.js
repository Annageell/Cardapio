document.addEventListener("DOMContentLoaded", function () {
    const menuList = document.getElementById("menu-lista");

    // Array de pratos italianos com preço e descrição
    const pratosItalianos = [
        { nome: "Pizza Margherita", preco: "R$ 25,00", descricao: "Molho de tomate, mussarela e manjericão." },
        { nome: "Lasanha à Bolonhesa", preco: "R$ 30,00", descricao: "Camadas de massa com carne moída e molho bechamel." },
        { nome: "Espaguete Carbonara", preco: "R$ 22,00", descricao: "Espaguete com ovo, queijo parmesão e pancetta." }
    ];

    // Adiciona os itens do cardápio dinamicamente
    pratosItalianos.forEach(prato => {
        const item = document.createElement("li");
        item.innerHTML = `
            <h2>${prato.nome}</h2>
            <p><strong>Preço:</strong> ${prato.preco}</p>
            <p><strong>Descrição:</strong> ${prato.descricao}</p>
        `;
        menuList.appendChild(item);
    });
});