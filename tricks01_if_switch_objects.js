function getCalorias(fruta) {
  if (fruta == "fresa") {
    return "65 calorias";
  } else if (fruta == "mango") {
    return "57 calorias";
  } else if (fruta == "manzana") {
    return "52 calorias";
  } else if (fruta == "platano") {
    return "90 calorias";
  } else {
    return "N/A";
  }
}

let frutaIn = "fresa";
let calorias = getCalorias(frutaIn);
console.log(`fruta: ${frutaIn}, calorias: ${calorias}`);

function getCaloriasOK(fruta) {
  const calorias = {
    fresa: "65 calorias",
    mango: "57 calorias",
    manzana: "52 calorias",
    platano: "90 calorias",
  };
  return calorias[fruta] || "N/A";
}

calorias = getCalorias(frutaIn);
console.log(`fruta: ${frutaIn}, calorias: ${calorias}`);