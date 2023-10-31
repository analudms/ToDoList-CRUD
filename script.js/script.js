"use strict";

const openModal = () =>
  document.getElementById("modal").classList.add("active");

const closeModal = () =>
  document.getElementById("modal").classList.remove("active");

const tempClient = {
  nome: "Bruna",
  email: "bruna@gmail.com",
  celular: "31988556699",
  cidade: "Belo Horizonte"
};

const getLocalStorage = () =>
    JSON.parse(localStorage.getItem("dbClient")) ?? []; // ?? avalia e retorna o valor da expressão a direita se o valor a esquerda for null ou undefined

const setLocalStorage = (dbClient) =>
    localStorage.setItem("dbClient", JSON.stringify(dbClient));

//CRUD - create read update delete

// -------- DELETE --------

const deleteClient = (index) => {
    const dbClient = readClient()
    dbClient.splice(index, 1)
    setLocalStorage(dbClient)

}



// -------- UPDATE --------
const updateClient = (index, client) => {
    const dbClient = readClient()
    dbClient[index] = client
    setLocalStorage(dbClient)
}

// -------- READ --------
const readClient = () => getLocalStorage()
//pegando o que tem no local storage, transformando em json e armazenando na variável cliente / acrescentar no final com push / enviar pro local storage com dados e valores
// -------- CREATE --------
const createCliente = (client) => {
    const dbClient = getLocalStorage()
    dbClient.push(client);
    setLocalStorage(dbClient)
};

//Eventos
document
  .getElementById("registerCustomer")
  .addEventListener("click", openModal);

document.getElementById("modalClose").addEventListener("click", closeModal);
