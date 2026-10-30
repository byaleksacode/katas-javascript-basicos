const placesToTravel = [
  { id: 5, name: "Japan" }, { id: 11, name: "Venecia" }, { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" }, { id: 44, name: "Filipinas" }, { id: 59, name: "Madagascar" }
];

// Recorremos al revés para que al borrar no se salte ningún elemento
for (let i = placesToTravel.length - 1; i >= 0; i--) {
  if (placesToTravel[i].id === 11 || placesToTravel[i].id === 40) {
    placesToTravel.splice(i, 1);
  }
}

console.log(placesToTravel);
