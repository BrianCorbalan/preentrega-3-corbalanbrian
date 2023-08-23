export const productos = [
  {
    id: 1,
    nombre: "Remera Sonic",
    precio: 1500,
    imagen: "../img/productos/remeras/sonic-remera.png",
    categoria:"Remeras",
    alt: "Remera sonic",
    link: "../pages/remera-sonic.html"
  },
  {
    id: 2,
    nombre: "Remera Zero",
    precio: 1500,
    imagen:"../img/productos/remeras/remera-destacada-zero.png",
    categoria:"Remeras",
    alt: "Remera Zero",
    link: "../pages/remera-zero.html"
  },
  {
    id: 3,
    nombre: "Remera Guardianes",
    precio: 1500,
    imagen:"../img/productos/remeras/remera-destacada-guardianes.png",
    categoria:"Remeras",
    alt: "Remera Guardianes",
    link: "../pages/remera-guardianes.html"
  },
  {
    id: 4,
    nombre: "Remera WandaVision",
    precio: 1500,
    imagen:"../img/productos/remeras/remera-destacada-wanda.png",
    categoria:"Remeras",
    alt: "Remera WandaVision",
    link: "../pages/remera-wanda.html"
  },
  {
    id: 5,
    nombre: "Remera Digimon",
    precio: 1500,
    imagen:"../img/productos/remeras/remera-destacada-digimon.png",
    categoria:"Remeras",
    alt: "Remera Digimon",
    link: "../pages/remera-digimon.html"
  },
];

export const buzos = [
  {
    id: 6,
    nombre: "Attack On Titan",
    precio: 3200,
    imagen:"../img/productos/buzos/buzo-destacada-attack.png",
    categoria:"Buzos",
    alt: "Buzo Attack On Titan",
    link: "../pages/buzo-attack.html"
  },
  {
    id: 7,
    nombre: "Attack On Titan 2023",
    precio: 3200,
    imagen:"../img/productos/buzos/buzo-destacada-attack-2023.png",
    categoria:"Buzos",
    alt: "Buzo Attack On Titan",
    link: "../pages/buzo-attack-new.html"
  },
  {
    id: 8,
    nombre: "Spiderman",
    precio: 3200,
    imagen:"../img/productos/buzos/buzo-destacada-spiderman.png",
    categoria:"Buzos",
    alt: "Buzo Spiderman",
    link: "../pages/buzo-spiderman.html"
  },
  {
    id: 9,
    nombre: "Demon Slayer",
    precio: 3200,
    imagen:"../img/productos/buzos/buzo-destacada-demon.png",
    categoria:"Buzos",
    alt: "Buzo Demon Slayer",
    link: "../pages/buzo-demon.html"
  },
  {
    id: 10,
    nombre: "Evangelion",
    precio: 3200,
    imagen:"../img/productos/buzos/buzo-destacada-evangelion.png",
    categoria:"Buzos",
    alt: "Buzo Evangelion",
    link: "../pages/buzo-evangelion.html"
  }
];



JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));
JSON.parse(localStorage.getItem("buzos")) || localStorage.setItem("buzos", JSON.stringify(buzos));

