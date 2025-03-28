const catalog = [
  {
    "ref": "101SS25001",
    "description": "T-Shirt básica",
    "size": "P a GG",
    "colors": "Amarelo, Azul noite",
    "price": 99,
    "discount": 69.3
  },
  {
    "ref": "101SS25002",
    "description": "T-Shirt com bolso",
    "size": "PP a G",
    "colors": "Preto, Nude",
    "price": 125,
    "discount": 87.5
  },
  {
    "ref": "101SS25003",
    "description": "T-Shirt Oversized",
    "size": "P M G",
    "colors": "Preta, Off white",
    "price": 125,
    "discount": 125
  },
  {
    "ref": "102SS25006",
    "description": "Regata canelada",
    "size": "PP a GG",
    "colors": "Verde",
    "price": 99,
    "discount": 49.5
  },
  {
    "ref": "102SS25006",
    "description": "Regata canelada",
    "size": "PP a GG",
    "colors": "Preta, Off white",
    "price": 99,
    "discount": 99
  },
  {
    "ref": "102SS25008",
    "description": "Regata nadador ribana estonada",
    "size": "PP a GG",
    "colors": "Verde claro, Coral",
    "price": 99,
    "discount": 99
  },
  {
    "ref": "103SS25010",
    "description": "Top amarração",
    "size": "P M G",
    "colors": "Natural, Verde",
    "price": 159,
    "discount": 79.5
  },
  {
    "ref": "103SS25011",
    "description": "Top faixa canelado",
    "size": "PP P M G",
    "colors": "Preto, Off White, Coral",
    "price": 89,
    "discount": 62.3
  },
  {
    "ref": "103SS25012",
    "description": "Top alças canelado",
    "size": "PP P M G",
    "colors": "Preto, Off White, Coral, Verde",
    "price": 99,
    "discount": 69.3
  },
  {
    "ref": "103SS25013",
    "description": "Top tubinho",
    "size": "PP P M GG",
    "colors": "Preto, Off White",
    "price": 99,
    "discount": 69.3
  },
  {
    "ref": "103SS25016",
    "description": "Top recorte",
    "size": "PP a G",
    "colors": "Preto, Branco",
    "price": 159,
    "discount": 79.5
  },
  {
    "ref": "103SS25017",
    "description": "Top alças",
    "size": "PP a G",
    "colors": "Amarelo, Laranja",
    "price": 169,
    "discount": 84.5
  },
  {
    "ref": "103SS25018",
    "description": "Cropped regata em linho",
    "size": "PP a GG",
    "colors": "Preto, Nude, Azul",
    "price": 189,
    "discount": 132.3
  },
  {
    "ref": "103SS25019",
    "description": "Cropped regata estampado",
    "size": "PP P M G",
    "colors": "Florir, Laelia",
    "price": 149,
    "discount": 74.5
  },
  {
    "ref": "103SS25020",
    "description": "Cropped ribana",
    "size": "PP a G",
    "colors": "Nude, Laranja",
    "price": 89,
    "discount": 62.3
  },
  {
    "ref": "103SS25021",
    "description": "Cropped manga curta corte a fio",
    "size": "PP P M G",
    "colors": "Preto, Natural",
    "price": 139,
    "discount": 139
  },
  {
    "ref": "103SS25022",
    "description": "Cropped corte a fio",
    "size": "P M G",
    "colors": "Azul noite, Verde claro",
    "price": 89,
    "discount": 62.3
  },
  {
    "ref": "103SS25023",
    "description": "Cropped regata estonado",
    "size": "P M G",
    "colors": "Amarelo, Verde folha",
    "price": 79,
    "discount": 39.5
  },
  {
    "ref": "103SS25024",
    "description": "Cropped malha canelada",
    "size": "PP a GG",
    "colors": "Preto, Off white",
    "price": 129,
    "discount": 64.5
  },
  {
    "ref": "103SS25025",
    "description": "Cropped regata malha canelada",
    "size": "P a GG",
    "colors": "Preto, Off white, Verde",
    "price": 99,
    "discount": 69.3
  },
  {
    "ref": "103SS25026",
    "description": "Cropped Malhão",
    "size": "PP a GG",
    "colors": "Preto, Areia",
    "price": 129,
    "discount": 129
  },
  {
    "ref": "103SS25027",
    "description": "Cropped manga japonesa",
    "size": "PP P M G",
    "colors": "Nude, Laranja",
    "price": 99,
    "discount": 69.3
  },
  {
    "ref": "103SS25028",
    "description": "Cropped Tricô",
    "size": "P a G",
    "colors": "Preto, Nude",
    "price": 249,
    "discount": 124.5
  },
  {
    "ref": "103SS25029",
    "description": "Cropped Tricô com gola",
    "size": "P a G",
    "colors": "Preta, Areia",
    "price": 219,
    "discount": 109.5
  },
  {
    "ref": "103SS25030",
    "description": "Cropped ombro só",
    "size": "PP a G",
    "colors": "Preto, Verde",
    "price": 99,
    "discount": 49.5
  },
  {
    "ref": "105SS25031",
    "description": "Blusa alças malha",
    "size": "PP a GG",
    "colors": "Laranja, Azul noite",
    "price": 119,
    "discount": 59.5
  },
  {
    "ref": "105SS25032",
    "description": "Blusa malha estonada",
    "size": "P a GG",
    "colors": "Preto, Verde claro",
    "price": 119,
    "discount": 59.5
  },
  {
    "ref": "105SS25033",
    "description": "Blusa manga japonesa",
    "size": "P a GG",
    "colors": "Preto, Areia",
    "price": 129,
    "discount": 129
  },
  {
    "ref": "105SS25034",
    "description": "Blusa tricô",
    "size": "P M G",
    "colors": "Preta, Off white",
    "price": 229,
    "discount": 114.5
  },
  {
    "ref": "105SS25035",
    "description": "Blusa alças estampada",
    "size": "PP a GG",
    "colors": "Prosperidade, Conexões",
    "price": 179,
    "discount": 125.3
  },
  {
    "ref": "105SS25036",
    "description": "Blusa tricô",
    "size": "P a G",
    "colors": "Preta, Amarela",
    "price": 229,
    "discount": 114.5
  },
  {
    "ref": "106SS25040",
    "description": "Colete",
    "size": "P M G",
    "colors": "Preto, Branco",
    "price": 259,
    "discount": 181.3
  },
  {
    "ref": "106SS25042",
    "description": "Kimono curto estampado",
    "size": "Único",
    "colors": "Laelia, Florir",
    "price": 199,
    "discount": 139.3
  },
  {
    "ref": "106SS25043",
    "description": "Kimono estonado",
    "size": "Único",
    "colors": "Verde, Laranja, Nude",
    "price": 259,
    "discount": 259
  },
  {
    "ref": "106SS25044",
    "description": "Kimono liso manga curta",
    "size": "Único",
    "colors": "Preto, Off white",
    "price": 265,
    "discount": 265
  },
  {
    "ref": "106SS25045",
    "description": "Kimono estampado com mangas",
    "size": "Único",
    "colors": "Prosperidade, Conexões",
    "price": 219,
    "discount": 219
  },
  {
    "ref": "106SS25047",
    "description": "Camisa",
    "size": "P M G",
    "colors": "Branca, Nude",
    "price": 399,
    "discount": 399
  },
  {
    "ref": "109SS25050",
    "description": "Jaqueta quebra vento eco",
    "size": "P M G",
    "colors": "Preto, Areia, Verde",
    "price": 469,
    "discount": 469
  },
  {
    "ref": "110SS25054",
    "description": "Calça reta em malha",
    "size": "PP a GG",
    "colors": "Verde claro, Amarelo",
    "price": 249,
    "discount": 249
  },
  {
    "ref": "110SS25056",
    "description": "Calça reta linho com elástico",
    "size": "PP P M G",
    "colors": "Preta, Branca",
    "price": 399,
    "discount": 399
  },
  {
    "ref": "110SS25057",
    "description": "Calça cargo linho",
    "size": "PP P M G",
    "colors": "Preta, Terracota",
    "price": 429,
    "discount": 214.5
  },
  {
    "ref": "110SS25058",
    "description": "Calça reta linho com bolsos",
    "size": "PP a GG",
    "colors": "Militar, Coral",
    "price": 429,
    "discount": 214.5
  },
  {
    "ref": "110SS25059",
    "description": "Calça pantalona estonada",
    "size": "PP a GG",
    "colors": "Verde, Laranja, Nude",
    "price": 269,
    "discount": 188.3
  },
  {
    "ref": "110SS25060",
    "description": "Calça pantalona linho leve",
    "size": "PP a GG",
    "colors": "Preta, Natural",
    "price": 399,
    "discount": 279.3
  },
  {
    "ref": "110SS25062",
    "description": "Calça pantalona lisa",
    "size": "PP P M G",
    "colors": "Preto, Branco",
    "price": 409,
    "discount": 286.3
  },
  {
    "ref": "110SS25063",
    "description": "Calça pantalona estampada",
    "size": "PP P M G",
    "colors": "Conexões, Prosperidade",
    "price": 329,
    "discount": 164.5
  },
  {
    "ref": "110SS25066",
    "description": "Calça reta Rami",
    "size": "PP a GG",
    "colors": "Preta, Nude",
    "price": 429,
    "discount": 300.3
  },
  {
    "ref": "110SS25067",
    "description": "Calça kargo em sarja",
    "size": "34 A 44",
    "colors": "Verde militar, Caqui",
    "price": 319,
    "discount": 319
  },
  {
    "ref": "110SS25068",
    "description": "Calça wide leg em sarja",
    "size": "34 A 44",
    "colors": "Amarela, Off white",
    "price": 319,
    "discount": 319
  },
  {
    "ref": "113SS25071",
    "description": "Vestido curto alças",
    "size": "PP P M G",
    "colors": "Verde folha, Coral",
    "price": 169,
    "discount": 84.5
  },
  {
    "ref": "113SS25072",
    "description": "Vestido curto T-Shirt",
    "size": "PP a GG",
    "colors": "Verde claro, Laranja",
    "price": 179,
    "discount": 89.5
  },
  {
    "ref": "113SS25075",
    "description": "Vestido curto estonado",
    "size": "PP a GG",
    "colors": "Preto, Verde lima",
    "price": 199,
    "discount": 99.5
  },
  {
    "ref": "113SS25076",
    "description": "Vestido curto estampado",
    "size": "PP P M G",
    "colors": "Laelia, Prosperidade",
    "price": 279,
    "discount": 139.5
  },
  {
    "ref": "113SS25077",
    "description": "Vestido curto estampado",
    "size": "PP P M G",
    "colors": "Memórias, Conexões",
    "price": 289,
    "discount": 144.5
  },
  {
    "ref": "113SS25078",
    "description": "Vestido curto liso",
    "size": "PP P M G",
    "colors": "Preto, Laranja",
    "price": 359,
    "discount": 179.5
  },
  {
    "ref": "113SS25079",
    "description": "Vestido curto frente única liso",
    "size": "PP P M G",
    "colors": "Natural, Azul",
    "price": 349,
    "discount": 174.5
  },
  {
    "ref": "113SS25080",
    "description": "Vestido midi regata",
    "size": "PP a GG",
    "colors": "Preto, Verde claro, Laranja",
    "price": 199,
    "discount": 99.5
  },
  {
    "ref": "113SS25081",
    "description": "Vestido midi ribana",
    "size": "PP a GG",
    "colors": "Azul noite, Nude",
    "price": 219,
    "discount": 219
  },
  {
    "ref": "113SS25082",
    "description": "Vestido midi manga japonesa",
    "size": "PP a GG",
    "colors": "Areia, Verde claro",
    "price": 199,
    "discount": 199
  },
  {
    "ref": "113SS25083",
    "description": "Vestido midi alças",
    "size": "PP P M G",
    "colors": "Preto, Amarelo",
    "price": 449,
    "discount": 224.5
  },
  {
    "ref": "113SS25085",
    "description": "Vestido Midi liso",
    "size": "PP P M G",
    "colors": "Preto, Laranja",
    "price": 429,
    "discount": 214.5
  },
  {
    "ref": "113SS25087",
    "description": "Vestido Midi liso",
    "size": "PP P M G",
    "colors": "Off white e Nude",
    "price": 399,
    "discount": 199.5
  },
  {
    "ref": "113SS25088",
    "description": "Vestido midi estampado",
    "size": "PP a GG",
    "colors": "Florir, Laelia",
    "price": 299,
    "discount": 149.5
  },
  {
    "ref": "113SS25089",
    "description": "Vestido longo torcido",
    "size": "PP a GG",
    "colors": "Preto, Verde folha",
    "price": 249,
    "discount": 124.5
  },
  {
    "ref": "113SS25090",
    "description": "Vestido longo linho",
    "size": "PP P M G",
    "colors": "Preto e Laranja",
    "price": 449,
    "discount": 224.5
  },
  {
    "ref": "113SS25091",
    "description": "Vestido longo linho",
    "size": "PP P M G",
    "colors": "Preto e Branco",
    "price": 439,
    "discount": 219.5
  },
  {
    "ref": "113SS25092",
    "description": "Vestido midi estampado",
    "size": "PP P M G",
    "colors": "Florir, Laelia",
    "price": 329,
    "discount": 164.5
  },
  {
    "ref": "113SS25093",
    "description": "Vestido longo estampado",
    "size": "PP a GG",
    "colors": "Florir, Laelia",
    "price": 329,
    "discount": 164.5
  },
  {
    "ref": "113SS25094",
    "description": "Vestido longo estampado",
    "size": "PP a GG",
    "colors": "Memórias, Conexões",
    "price": 349,
    "discount": 174.5
  },
  {
    "ref": "113SS25095",
    "description": "Vestido longo t-shirt",
    "size": "PP a GG",
    "colors": "Preto, Nude",
    "price": 219,
    "discount": 219
  },
  {
    "ref": "113SS25096",
    "description": "Vestido longo alças estonado",
    "size": "PP a GG",
    "colors": "Azul noite, Laranja",
    "price": 229,
    "discount": 229
  },
  {
    "ref": "113SS25097",
    "description": "Vestido longo bolsos estonado",
    "size": "PP a GG",
    "colors": "Verde folha, Amarelo",
    "price": 249,
    "discount": 249
  },
  {
    "ref": "113SS25098",
    "description": "Vestido longo regata estonado",
    "size": "PP a GG",
    "colors": "Preto, Laranja",
    "price": 229,
    "discount": 114.5
  },
  {
    "ref": "114SS25100",
    "description": "Macacão linho",
    "size": "PP a G",
    "colors": "Preto, Verde militar",
    "price": 449,
    "discount": 224.5
  },
  {
    "ref": "114SS25101",
    "description": "Macacão decote V",
    "size": "PP a GG",
    "colors": "Preto, Branco",
    "price": 439,
    "discount": 439
  },
  {
    "ref": "114SS25103",
    "description": "Macacão alças",
    "size": "PP P M G",
    "colors": "Preto, Laranja",
    "price": 459,
    "discount": 229.5
  },
  {
    "ref": "114SS25104",
    "description": "Macacão reto",
    "size": "PP a GG",
    "colors": "Off white, Verde claro",
    "price": 459,
    "discount": 229.5
  },
  {
    "ref": "114SS25106",
    "description": "Macacão malhão",
    "size": "PP a GG",
    "colors": "Azul noite, Areia",
    "price": 289,
    "discount": 289
  },
  {
    "ref": "114SS25109",
    "description": "Macacão malha estonado",
    "size": "PP a GG",
    "colors": "Nude, Verde claro",
    "price": 229,
    "discount": 229
  },
  {
    "ref": "115SS25115",
    "description": "Short pregas linho",
    "size": "PP a GG",
    "colors": "Branco, Verde folha",
    "price": 269,
    "discount": 134.5
  },
  {
    "ref": "115SS25116",
    "description": "Short elástico linho",
    "size": "PP a GG",
    "colors": "Off White, Coral",
    "price": 249,
    "discount": 124.5
  },
  {
    "ref": "115SS24117",
    "description": "Short barra arredondada liso",
    "size": "P M G",
    "colors": "Natural, Verde",
    "price": 219,
    "discount": 219
  },
  {
    "ref": "115SS25120",
    "description": "Short liso linho",
    "size": "PP a GG",
    "colors": "Preto, Azul, Nude",
    "price": 269,
    "discount": 269
  },
  {
    "ref": "115SS25122",
    "description": "Short viscose estampada",
    "size": "PP a GG",
    "colors": "Memórias, Conexões",
    "price": 219,
    "discount": 109.5
  },
  {
    "ref": "115SS25123",
    "description": "Short Moletom",
    "size": "PP a GG",
    "colors": "Laranja, Azul noite",
    "price": 179,
    "discount": 89.5
  },
  {
    "ref": "116SS25130",
    "description": "Saia curta linho",
    "size": "PP a G",
    "colors": "Off White, Coral",
    "price": 269,
    "discount": 134.5
  },
  {
    "ref": "116SS25132",
    "description": "Saia midi linho estonada",
    "size": "PP P M G",
    "colors": "Laranja, Verde, nude",
    "price": 239,
    "discount": 119.5
  },
  {
    "ref": "116SS25133",
    "description": "Saia Midi estampada",
    "size": "PP a GG",
    "colors": "Laelia, Florir",
    "price": 239,
    "discount": 119.5
  },
  {
    "ref": "116SS25134",
    "description": "Saia Midi linho",
    "size": "PP a GG",
    "colors": "Preta, Amarela",
    "price": 359,
    "discount": 359
  },
  {
    "ref": "116SS25135",
    "description": "Saia Midi estampada",
    "size": "PP a G",
    "colors": "Laelia, Florir",
    "price": 299,
    "discount": 149.5
  },
  {
    "ref": "116SS25137",
    "description": "Saia longa estampada",
    "size": "PP a GG",
    "colors": "Memórias, Conexões",
    "price": 269,
    "discount": 134.5
  },
  {
    "ref": "116SS25138",
    "description": "Saia longa botões",
    "size": "PP a GG",
    "colors": "Preta, Verde militar, Areia",
    "price": 259,
    "discount": 259
  },
  {
    "ref": "116SS25139",
    "description": "Saia midi barra arredondada",
    "size": "PP a GG",
    "colors": "Azul noite, Verde claro",
    "price": 189,
    "discount": 189
  },
  {
    "ref": "120SS25180",
    "description": "Biquini top faixa",
    "size": "P M G",
    "colors": "Off White, Preto",
    "price": 339,
    "discount": 237.3
  },
  {
    "ref": "120SS25181",
    "description": "Biquini bicolor",
    "size": "P M G",
    "colors": "Preto, Verde",
    "price": 339,
    "discount": 237.3
  },
  {
    "ref": "120SS25182",
    "description": "Biquini cortininha",
    "size": "P M G",
    "colors": "Verde, Off white",
    "price": 319,
    "discount": 223.3
  },
  {
    "ref": "120SS25183",
    "description": "Maiô",
    "size": "P M G",
    "colors": "Preto, Verde, Off white",
    "price": 359,
    "discount": 251.3
  },
  {
    "ref": "201SS25202",
    "description": "T-Shirt Árvore",
    "size": "P M G GG XGG",
    "colors": "Preta, Branca, Verde folha, Azul indigo",
    "price": 135,
    "discount": 99
  },
  {
    "ref": "201SS25203",
    "description": "T-Shirt Etiqueta",
    "size": "P M G GG XGG",
    "colors": "Preto, Off white, Bege, Cinza, Laranja",
    "price": 139,
    "discount": 99
  },
  {
    "ref": "201SS25205",
    "description": "T-Shirt Nunca pare de remar",
    "size": "P M G GG XGG",
    "colors": "Areia",
    "price": 135,
    "discount": 99
  },
  {
    "ref": "201SS25206",
    "description": "T-Shirt Bananeira",
    "size": "P M G GG XGG",
    "colors": "Laranja",
    "price": 135,
    "discount": 99
  },
  {
    "ref": "201SS25207",
    "description": "T-Shirt Coqueiros",
    "size": "P M G GG XGG",
    "colors": "Azul noite",
    "price": 135,
    "discount": 99
  },
  {
    "ref": "201SS25208",
    "description": "T-Shirt Rótulo",
    "size": "P M G GG XGG",
    "colors": "Preta",
    "price": 135,
    "discount": 99
  },
  {
    "ref": "201SS25209",
    "description": "T-Shirt Guarda",
    "size": "P M G GG XGG",
    "colors": "Branca",
    "price": 135,
    "discount": 99
  },
  {
    "ref": "201SS25210",
    "description": "T-Shirt Thing Green",
    "size": "P M G GG XGG",
    "colors": "Off White",
    "price": 135,
    "discount": 99
  },
  {
    "ref": "201SS25211",
    "description": "T-Shirt Mata atlântica",
    "size": "P M G GG XGG",
    "colors": "Verde militar",
    "price": 135,
    "discount": 99
  },
  {
    "ref": "201SS25212",
    "description": "T-Shirt Never change",
    "size": "P M G GG XGG",
    "colors": "Preta",
    "price": 135,
    "discount": 99
  },
  {
    "ref": "201SS25213",
    "description": "T-Shirt Pura vida",
    "size": "P M G GG XGG",
    "colors": "Branca",
    "price": 135,
    "discount": 99
  },
  {
    "ref": "201SS25214",
    "description": "T-Shirt Barco",
    "size": "P M G GG XGG",
    "colors": "Bege",
    "price": 135,
    "discount": 99
  },
  {
    "ref": "201SS25215",
    "description": "T-Shirt Remos",
    "size": "P M G GG XGG",
    "colors": "Grafite",
    "price": 135,
    "discount": 99
  },
  {
    "ref": "201SS25216",
    "description": "T-Shirt Quilha",
    "size": "P M G GG XGG",
    "colors": "Amarela",
    "price": 135,
    "discount": 99
  },
  {
    "ref": "201SS25217",
    "description": "T-Shirt Cacto",
    "size": "P M G GG XGG",
    "colors": "Nude",
    "price": 135,
    "discount": 99
  },
  {
    "ref": "201SS25218",
    "description": "T-Shirt Folha",
    "size": "P M G GG XGG",
    "colors": "Verde claro",
    "price": 135,
    "discount": 99
  },
  {
    "ref": "201SS25219",
    "description": "T-Shirt Brasão",
    "size": "P M G GG XGG",
    "colors": "Cinza",
    "price": 135,
    "discount": 99
  },
  {
    "ref": "201SS25220",
    "description": "T-Shirt Sup",
    "size": "P M G GG XGG",
    "colors": "Gelo",
    "price": 135,
    "discount": 99
  },
  {
    "ref": "201SS25221",
    "description": "T-Shirt corte a fio malha orgânica",
    "size": "P M G GG XGG",
    "colors": "Off White, Verde, Preto",
    "price": 149,
    "discount": 149
  },
  {
    "ref": "201SS25226",
    "description": "T-shirt oversized lisa",
    "size": "P M G GG",
    "colors": "Areia, Azul noite, Verde militar,Preta",
    "price": 135,
    "discount": 135
  },
  {
    "ref": "201SS25227",
    "description": "T-Shirt malha orgânica",
    "size": "P M G GG XGG",
    "colors": "Off White, Amarela",
    "price": 149,
    "discount": 149
  },
  {
    "ref": "201SS25228",
    "description": "T-Shirt malha pima",
    "size": "P M G GG",
    "colors": "Preta, Bege, Azul, Off white, Avelã",
    "price": 199,
    "discount": 199
  },
  {
    "ref": "201SS25229",
    "description": "T-Shirt malha linho",
    "size": "P M G GG",
    "colors": "Preta, Natural",
    "price": 189,
    "discount": 189
  },
  {
    "ref": "201SS25230",
    "description": "Pack classic t-shirts",
    "size": "P M G GG XGG",
    "colors": "",
    "price": 299,
    "discount": 299
  },
  {
    "ref": "202SS25240",
    "description": "Regata corte a fio",
    "size": "P M G GG XGG",
    "colors": "Preto, Areia, Cinza",
    "price": 115,
    "discount": 57.5
  },
  {
    "ref": "202SS25241",
    "description": "Regata debrum",
    "size": "P M G GG XGG",
    "colors": "Grafite, Verde militar",
    "price": 115,
    "discount": 57.5
  },
  {
    "ref": "204SS25234",
    "description": "T-Shirt Manga Longa malhão leve",
    "size": "P M G GG",
    "colors": "Preto, Areia, Grafite",
    "price": 169,
    "discount": 169
  },
  {
    "ref": "204SS25235",
    "description": "T-Shirt manga Longa corte a fio",
    "size": "P M G GG",
    "colors": "Preta, Natural",
    "price": 229,
    "discount": 114.5
  },
  {
    "ref": "206SS25260",
    "description": "Camisa Linho manga curta",
    "size": "P M G GG XGG",
    "colors": "Preta, Areia, Verde Militar, Avelã",
    "price": 369,
    "discount": 369
  },
  {
    "ref": "206SS25261",
    "description": "Camisa Memórias",
    "size": "P M G GG XGG",
    "colors": "Única",
    "price": 299,
    "discount": 299
  },
  {
    "ref": "206SS25262",
    "description": "Camisa Conexões",
    "size": "P M G GG XGG",
    "colors": "Única",
    "price": 299,
    "discount": 299
  },
  {
    "ref": "206SS25263",
    "description": "Camisa Laelia",
    "size": "P M G GG XGG",
    "colors": "Única",
    "price": 299,
    "discount": 299
  },
  {
    "ref": "206SS25264",
    "description": "Camisa Florir",
    "size": "P M G GG XGG",
    "colors": "Única",
    "price": 299,
    "discount": 149.5
  },
  {
    "ref": "206SS25265",
    "description": "Camisa Linho manga longa",
    "size": "P M G GG",
    "colors": "Preta, Areia",
    "price": 399,
    "discount": 399
  },
  {
    "ref": "209SS25157",
    "description": "Jaqueta quebra vento eco",
    "size": "P M G GG",
    "colors": "Preta, Verde militar, Areia",
    "price": 479,
    "discount": 479
  },
  {
    "ref": "210SS25272",
    "description": "Calça linho",
    "size": "P M G GG",
    "colors": "Preta, Verde militar, Gelo, Natural",
    "price": 359,
    "discount": 359
  },
  {
    "ref": "210SS25273",
    "description": "Calça Cânhamo",
    "size": "P M G GG",
    "colors": "Preta, Caqui",
    "price": 379,
    "discount": 379
  },
  {
    "ref": "211SS25279",
    "description": "Bermuda Cânhamo",
    "size": "P M G GG",
    "colors": "Preta, Caqui",
    "price": 319,
    "discount": 319
  },
  {
    "ref": "211SS25280",
    "description": "Bermuda Viés",
    "size": "P M G GG XGG",
    "colors": "Preta, Grafite, Gelo",
    "price": 179,
    "discount": 179
  },
  {
    "ref": "211SS25381",
    "description": "Bermuda malhão estonada",
    "size": "P M G GG",
    "colors": "Grafite, Areia",
    "price": 229,
    "discount": 229
  },
  {
    "ref": "211SS25282",
    "description": "Bermuda sarja",
    "size": "P M G GG",
    "colors": "Grafite, Caqui",
    "price": 289,
    "discount": 289
  },
  {
    "ref": "211SS25283",
    "description": "Bermuda Malhão desfibrado",
    "size": "P M G GG",
    "colors": "Preta, Verde, Off white",
    "price": 249,
    "discount": 249
  },
  {
    "ref": "211SS25285",
    "description": "Bermuda Linho",
    "size": "P M G GG",
    "colors": "Preta, Verde militar, Camel, Gelo, Natural, Terracota",
    "price": 299,
    "discount": 299
  },
  {
    "ref": "211SS25286",
    "description": "Bermuda corte a fio",
    "size": "P M G GG XGG",
    "colors": "Preta, Grafite, Verde, Bege, Azul indigo",
    "price": 179,
    "discount": 179
  },
  {
    "ref": "212SS25289",
    "description": "Boardshort Liso",
    "size": "38 a 48",
    "colors": "Preto, Verde, Terra",
    "price": 289,
    "discount": 289
  },
  {
    "ref": "212SS25293",
    "description": "Boardshort recorte lateral",
    "size": "38 a 48",
    "colors": "Verde, Avelã",
    "price": 289,
    "discount": 202.3
  },
  {
    "ref": "212SS25294",
    "description": "Boardshorts com fita bordada",
    "size": "38 a 48",
    "colors": "Preto",
    "price": 289,
    "discount": 202.3
  },
  {
    "ref": "212SS25295",
    "description": "Boardshorts mescla",
    "size": "38 a 48",
    "colors": "Grafite, Areia, Verde",
    "price": 299,
    "discount": 299
  },
  {
    "ref": "212SS25296",
    "description": "Boardshort mescla recorte lateral",
    "size": "38 a 48",
    "colors": "Coral",
    "price": 299,
    "discount": 209.3
  },
  {
    "ref": "212SS25297",
    "description": "Boardshort Memórias",
    "size": "38 a 48",
    "colors": "Terra",
    "price": 299,
    "discount": 209.3
  },
  {
    "ref": "212SS25298",
    "description": "Boardshort com viés",
    "size": "38 a 48",
    "colors": "Avelã",
    "price": 289,
    "discount": 202.3
  },
  {
    "ref": "212SS25301",
    "description": "Boardshort estampado cós de elástico",
    "size": "P M G GG XGG",
    "colors": "Grafite",
    "price": 299,
    "discount": 209.3
  },
  {
    "ref": "212SS25327",
    "description": "Boardshort cós elástico liso",
    "size": "P M G GG XGG",
    "colors": "Preto, Verde, Terra",
    "price": 249,
    "discount": 249
  },
  {
    "ref": "211SS25280",
    "description": "Bermuda Viés",
    "size": "P M G GG XGG",
    "colors": "Verde militar,  Azul Marinho",
    "price": 179,
    "discount": 125.3
  },
  {
    "ref": "211SS25286",
    "description": "Bermuda corte a fio",
    "size": "P M G GG XGG",
    "colors": "Verde, Bege, Azul indigo",
    "price": 179,
    "discount": 125.3
  },
  {
    "ref": "319SS25351",
    "description": "Boné Five panel",
    "size": "Rip Stop",
    "colors": "Único",
    "price": null,
    "discount": 139
  },
  {
    "ref": "319SS25352",
    "description": "Boné Trucker",
    "size": "Sarja",
    "colors": "Único",
    "price": null,
    "discount": 129
  },
  {
    "ref": "319SS25353",
    "description": "Chapéu",
    "size": "Rip Stop",
    "colors": "Único",
    "price": null,
    "discount": 179
  },
  {
    "ref": "319SS25354",
    "description": "Boné surf",
    "size": "Rip Stop",
    "colors": "Único",
    "price": null,
    "discount": 179
  },
  {
    "ref": "319SS25356",
    "description": "Cooler bag",
    "size": "",
    "colors": "Único",
    "price": null,
    "discount": 449
  },
  {
    "ref": "319SS25359",
    "description": "Mochila lona",
    "size": "Lona",
    "colors": "Único",
    "price": null,
    "discount": 489
  },
  {
    "ref": "319SS25360",
    "description": "Bolsa Lona",
    "size": "Lona",
    "colors": "Único",
    "price": null,
    "discount": 319
  },
  {
    "ref": "319SS25361",
    "description": "Shoulder bag",
    "size": "Lona",
    "colors": "Único",
    "price": null,
    "discount": 249
  },
  {
    "ref": "319SS25362",
    "description": "Necessaire",
    "size": "Lona",
    "colors": "Único",
    "price": null,
    "discount": 269
  },
  {
    "ref": "319SS25363",
    "description": "Bolsa Perto do mar",
    "size": "Sarja",
    "colors": "Único",
    "price": null,
    "discount": 109
  },
  {
    "ref": "319SS25364",
    "description": "Bolsa Nunca pare de remar",
    "size": "Sarja",
    "colors": "Único",
    "price": null,
    "discount": 109
  },
  {
    "ref": "319SS25365",
    "description": "Bolsa Praias",
    "size": "Sarja",
    "colors": "Único",
    "price": null,
    "discount": 109
  },
  {
    "ref": "319SS25366",
    "description": "Bolsa Feito com alma",
    "size": "Sarja",
    "colors": "Único",
    "price": null,
    "discount": 109
  },
  {
    "ref": "319SS25367",
    "description": "Bolsa Vida leve",
    "size": "Sarja",
    "colors": "Único",
    "price": null,
    "discount": 109
  },
  {
    "ref": "319SS25361",
    "description": "Meia cano médio",
    "size": "Malha",
    "colors": "Único",
    "price": null,
    "discount": 59
  },
  {
    "ref": "319SS25370",
    "description": "Caneca Perto do mar",
    "size": "Cerâmica",
    "colors": "",
    "price": null,
    "discount": 79
  },
  {
    "ref": "319SS25371",
    "description": "Caneca Logo",
    "size": "Cerâmica",
    "colors": "",
    "price": null,
    "discount": 79
  },
  {
    "ref": "319SS25372",
    "description": "Caneca Nunca pare de remar",
    "size": "Cerâmica",
    "colors": "",
    "price": null,
    "discount": 79
  },
  {
    "ref": "319SS25373",
    "description": "Caneca Assinatura",
    "size": "Cerâmica",
    "colors": "",
    "price": null,
    "discount": 79
  },
  {
    "ref": "319SS25374",
    "description": "Caneca Vida leve",
    "size": "Cerâmica",
    "colors": "",
    "price": null,
    "discount": 79
  },
  {
    "ref": "319SS25380",
    "description": "Chinelo 2 tiras",
    "size": "Couro",
    "colors": "34 A 39",
    "price": null,
    "discount": 369
  },
  {
    "ref": "319SS25381",
    "description": "Sandália tiras",
    "size": "Couro",
    "colors": "34 A 39",
    "price": null,
    "discount": 349
  },
  {
    "ref": "319SS25382",
    "description": "Sandália diagonal",
    "size": "Couro",
    "colors": "34 A 39",
    "price": null,
    "discount": 349
  },
  {
    "ref": "319SS25383",
    "description": "Sandália com velcro",
    "size": "Couro",
    "colors": "34 A 39",
    "price": null,
    "discount": 369
  },
  {
    "ref": "319SS25384",
    "description": "Sandália salto",
    "size": "Couro",
    "colors": "34 A 39",
    "price": null,
    "discount": 399
  },
  {
    "ref": "319SS25385",
    "description": "Sandalia cruzada",
    "size": "Couro",
    "colors": "34 A 39",
    "price": null,
    "discount": 319
  },
  {
    "ref": "319SS25386",
    "description": "Sandália bicolor",
    "size": "Couro",
    "colors": "34 A 39",
    "price": null,
    "discount": 319
  },
  {
    "ref": "319SS25392",
    "description": "Guarda Sol",
    "size": "Lona",
    "colors": "Único",
    "price": null,
    "discount": 419
  },
  {
    "ref": "319SS25393",
    "description": "Canga",
    "size": "Viscose",
    "colors": "Único",
    "price": null,
    "discount": 199
  },
  {
    "ref": "319SS25398",
    "description": "Sandália Birken",
    "size": "PVC",
    "colors": "33/34 a 43/44",
    "price": null,
    "discount": 149
  },
  {
    "ref": "319fw24331",
    "description": "Garrafa",
    "size": "-",
    "colors": "U",
    "price": null,
    "discount": 159
  },
  {
    "ref": "519vt512",
    "description": "Tênis Redley Colab",
    "size": "-",
    "colors": "34 - 44",
    "price": null,
    "discount": 239
  },
  {
    "ref": "519vt513",
    "description": "Tênis Redley Wave",
    "size": "-",
    "colors": "34 - 44",
    "price": null,
    "discount": 239
  }
];