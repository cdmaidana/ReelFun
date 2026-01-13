export const productos = [
  {
    idProducto: 1, 
    tipo: 'reel',
    titulo: 'Reel LINNHUE RR-AE2000',
    desc: 'Reel Carrete de Pesca LINNHUE RR-AE2000 9 Niveles de Magnético',
    precio: '33.999',
    img: '/img/prod/LINNHUE-RR-AE2000.webp'
  },
  {
    idProducto: 2, 
    tipo: 'reel',
    titulo: 'Reel Frontal Amberjack 7000',
    desc: 'Reel Frontal Amberjack 7000 12 Rul Pesca Variada 10kg Drag Color Negro Y Dorado 7000',
    precio: '36.575',
    img: '/img/prod/Amberjack-7000.webp'
  },
  {
    idProducto: 3, 
    tipo: 'reel',
    titulo: 'Reel Huevito Caster Legend Pro 110',
    desc: 'Reel Huevito Caster Legend Pro 110 Baitcasting 10 Rulemanes Color Gris - Manija Derecha',
    precio: '108.289',
    img: '/img/prod/CasterLegendPro110.webp'
  },
  {
    idProducto: 4, 
    tipo: 'cana',
    titulo: 'Caña Caster Sniper',
    desc: 'Caña Caster Sniper 4.20m 3 Tramos Lance Costa Mar 100-200g',
    precio: '89.475',
    img: '/img/prod/CasterSniper3Tramos.webp'
  },
  {
    idProducto: 5, 
    tipo: 'anzuelo',
    titulo: 'Caja Anzuelos',
    desc: 'Caja Con 300 Anzuelos Pesca Variada #9 Al #16',
    precio: '24.500',
    img: '/img/prod/cajaAnzuelosVariada.webp'
  },
  {
    idProducto: 6, 
    tipo: 'anzuelo',
    titulo: 'Blister Anzuelos Pesca',
    desc: 'Blister Anzuelos Pesca Variada #9 Al #16',
    precio: '24.500',
    img: '/img/prod/blisterAnzuelosVariada.webp'
  },
  {
    idProducto: 7, 
    tipo: 'plomada',
    titulo: 'Plomada Municion Partida',
    desc: 'Plomada Municion Partida Pesca Caja Organizadora 50 Unidades',
    precio: '24.500',
    img: '/img/prod/plomadaMunicionPartida.webp'
  },
  {
    idProducto: 8, 
    tipo: 'plomada',
    titulo: 'Plomada Corrediza',
    desc: 'Plomos Plomadas Corrediza 20grs 40grs Surtidas Rio Pack X10',
    precio: '6.999',
    img: '/img/prod/plomadasCorrediza20.webp'
  },
  {
    idProducto: 9, 
    tipo: 'cana',
    titulo: 'Caña Shimano Stimula 6.6',
    desc: 'Caña Shimano Stimula 6.6 Pies 6-10lbs 2 Tramos Spinning',
    precio: '60.705',
    img: '/img/prod/canashimanostimula66.webp'
  },
  {
    idProducto: 10, 
    tipo: 'cana',
    titulo: 'Caña Okuma Morena Power 2.10',
    desc: 'Caña Okuma Morena Power 2.10 1 Tr Trolling Rotativo 15-45 Lb',
    precio: '234.710',
    img: '/img/prod/canamorenapowerokuma.webp'
  }
];

export const stock = [
  {
    idProducto: 1,
    stock:10, 
  },
  {
    idProducto: 2,
    stock:10, 
  },
  {
    idProducto: 3,
    stock:10, 
  },
  {
    idProducto: 4,
    stock:10, 
  },
  {
    idProducto: 5,
    stock:10, 
  },
  {
    idProducto: 6,
    stock:10, 
  },
  {
    idProducto: 7,
    stock:10, 
  },
  {
    idProducto: 8,
    stock:10, 
  },
  {
    idProducto: 9,
    stock:10, 
  },
  {
    idProducto: 10,
    stock:10, 
  }
];

export const especificaciones = [
  {
    idProducto: 1,
    especificaciones: {
      tipo: 'rotativo',
      ladoManija: 'derecho',
      magnetico: '9 niveles de magnético ajustable',
      iman: 'imanes de neodimio N42',
      relTransmision: '6.3:1',
      salidaAgua: 'cilíndrica de cerámica, suave y resistente',
      fuerzaDescarga: '8 kg',
      peso: '197g',
      alarmaPique: 'si',
      capLinea: '0,26mm-140m; 0,28mm-120m; 0,30mm-110m',
      material: 'metal CNC, eva, aluminio, nailon reforzado'
    }
  },
  {
    idProducto: 2,
    especificaciones: {
      tipo: 'frontal',
      fuerzaDescarga: '10 kg',
      rulemanes: '12',
      relTransmision: '5.2:1',
      material: 'polímero de alto impacto',
      perfil: 'Alto',
      capLinea: '0.40mm-200mts',
      freno: 'Multidisco',
      alarmaPique: 'si'
    }
  },
  {
    idProducto: 3,
    especificaciones: {
      tipo: 'rotativo',
      fuerzaDescarga: '8.16 kg',
      rulemanes: '10',
      relTransmision: '7.2:1',
      material: 'Grafito',
      perfil: 'Bajo',
      capLinea: 'multifilamento 0.18/100, monofilamento 0.30/120',
      freno: 'Magnético',
      alarmaPique: 'si'
    }
  },
  {
    idProducto: 4,
    especificaciones: {
      peso: '70g',
      resistencia: '100–200g',
      accion: 'rápida',
      largo: '4.2 m',
      material: 'fibra de vidrio',
      mango: 'corcho',
      guias: 'cerámica',
      tramos: '3'
    }
  },
  {
    idProducto: 5,
    especificaciones: {
      marca: 'Anmuka',
      medida: '3',
      cantidad: '300',
      envase: 'caja',
      material: 'Acero inoxidable'
    }
  },
  {
    idProducto: 6,
    especificaciones: {
      marca: 'Kamakura',
      medida: '2',
      cantidad: '2',
      envase: 'blister',
      material: 'Acero al carbono'
    }
  },
  {
    idProducto: 7,
    especificaciones: {
      marca: 'X-Fish',
      forma: 'Redonda',
      medida: '1g',
      cantidad: '50',
      envase: 'blister'
    }
  },
  {
    idProducto: 8,
    especificaciones: {
      marca: 'Red Fish',
      forma: 'corrediza',
      medida: '40g',
      cantidad: '10',
      envase: 'blister'
    }
  },
  {
    idProducto: 9,
    especificaciones: {
      peso: '120g',
      resistencia: '10lbs',
      accion: 'rápida',
      largo: '1.98 m',
      material: 'grafito',
      mango: 'corcho',
      guias: 'cerámica',
      tramos: '2'
    }
  },
  {
    idProducto: 10,
    especificaciones: {
      peso: '120g',
      resistencia: '15–40lbs',
      accion: 'rápida',
      largo: '2.1 m',
      material: 'grafito',
      mango: 'EVA',
      guias: 'óxido de aluminio',
      tramos: '1',
      potencia: 'Pesada',
      cantidadGuias: '9'
    }
  }
];