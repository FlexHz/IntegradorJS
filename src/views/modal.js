import { productoActivo, setProductoActivo } from "../../main";
import { handleDeleteProduct, handleSaveOrModifyElements } from "../services/product";


const buttonAccept = document.getElementById("acceptButton");
buttonAccept.addEventListener("click", () => {
    handleSaveOrModifyElements();
    console.log("Presionado aceptar");
});

const buttonCancel = document.getElementById("cancelButton");
buttonCancel.addEventListener("click",() => {
    closeModal();
});

export const openModal = () => {
    const modal = document.getElementById("modalPopUP");
    modal.style.display = "flex";
    const DeleteButton = document.getElementById("deletebutton");
    if (productoActivo) {
        DeleteButton.style.display = "block"
    } else {
        DeleteButton.style.display = "none"
    };

    if (productoActivo) {
        const nombre = document.getElementById("nombre"),
            imagen = document.getElementById("img"),
            precio = document.getElementById("precio"),
            categories = document.getElementById("categoria");
        imagen.value = productoActivo.imagen;
        categories.value = productoActivo.categories;
        precio.value = productoActivo.precio;
        nombre.value = productoActivo.nombre;
        
    };
};

export const closeModal = () => {
    const modal = document.getElementById("modalPopUP");
    modal.style.display = "none";
    setProductoActivo(null);
    resetModal();
};

const resetModal = () => {
    const nombre = document.getElementById("nombre"),
        imagen = document.getElementById("img"),
        precio = document.getElementById("precio"),
        categories = document.getElementById("categoria");
    imagen.value = "";
    categories.value = "Seleccione una categoria";
    precio.value = 0;
    nombre.value = "";
};

const deleteButton = document.getElementById("deletebutton");
deleteButton.addEventListener("click", () => {
    handlebuttonDelete();
})
const handlebuttonDelete = () => {
    handleDeleteProduct();
};