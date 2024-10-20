import { categoriaActiva } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { handleRenderList } from "../views/store";


const handleFilterProductsByCategory = (categoryIn) => {
    const products = handleGetProductLocalStorage();

    switch (categoryIn) {
        case categoriaActiva:
            handleRenderList(products);
            break;
        case "Todo":
            handleRenderList(products);
            break;
        case "Hamburguesas":
        case "Papas":
        case "Bebidas":
            const result = products.filter((el) => el.categories === categoryIn);
            handleRenderList(result);
        default:
            break;
        case "MayorPrecio":
            const resultPrecioMayor = products.sort((a,b) => b.precio - a.precio);
            handleRenderList(resultPrecioMayor);
            break;
        case "MenorPrecio":
            const resultPreciomenor = products.sort((a,b) => a.precio - b.precio);
            handleRenderList(resultPreciomenor);
            break;
    };
};


// Render de la vista de categorias // 
export const renderCategories = () => {
    const ulList = document.getElementById("listFilter");
    ulList.innerHTML = `
    <li id="Todo">Todos los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Bebidas">Bebidas</li>
    <li id="MayorPrecio">Mayor Precio</li>
    <li id="MenorPrecio">Menor Precio</li>
    `;

    const liElements = ulList.querySelectorAll("li");
    liElements.forEach((liElement) => {
        liElement.addEventListener("click", () => {
            handleClick(liElement);
        });
    });

    const handleClick = (elemento) => {
        handleFilterProductsByCategory(elemento.id);
        liElements.forEach((el) => {
            if (el.classList.contains("liActive")) {
                el.classList.remove("liActive");
            } else {
                if (elemento === el) {
                    el.classList.add("liActive");
                };
            };
        });
    } ;
};