/* ============================================================
   DADOS DOS DESTINOS
   ------------------------------------------------------------
   Todas as imagens abaixo são ILUSTRATIVAS (banco de imagens),
   não são fotos reais da Taciana. Para substituir por fotos
   reais, basta trocar as URLs em "gallery" e "cover" de cada
   destino — a estrutura do site permanece igual.
   ============================================================ */

const DESTINATIONS = [
  {
    id: "chile",
    name: "Chile",
    location: "Deserto do Atacama",
    text: "O silêncio absoluto do deserto mais árido do mundo, sob um céu que parece pintado à mão.",
    cover: "https://images.unsplash.com/photo-1749315222819-fed00ccb95b7?w=1200&q=80&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1749315222819-fed00ccb95b7?w=1600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1749315222819-fed00ccb95b7?w=1600&q=80&auto=format&fit=crop&crop=entropy"
    ]
  },

  {
    id: "milao",
    name: "Milão",
    location: "Itália",
    text: "As rendas de pedra do Duomo se acendem ao entardecer, num dos cartões-postais mais elegantes da Europa.",
    cover: "https://images.unsplash.com/photo-1575399877732-9363881b907e?w=1200&q=80&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1575399877732-9363881b907e?w=1600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1575399877732-9363881b907e?w=1600&q=80&auto=format&fit=crop&crop=entropy"
    ]
  },

  {
    id: "grecia",
    name: "Grécia",
    location: "Santorini",
    text: "Casas brancas, cúpulas azuis e o Mar Egeu se encontrando no horizonte — simplesmente inesquecível.",
    cover: "https://images.unsplash.com/photo-1560703649-e3055f28bcf8?w=1200&q=80&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1560703649-e3055f28bcf8?w=1600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560703649-e3055f28bcf8?w=1600&q=80&auto=format&fit=crop&crop=entropy"
    ]
  },

  {
    id: "dubai",
    name: "Dubai",
    location: "Emirados Árabes Unidos",
    text: "Onde o futuro e o deserto se encontram: arranha-céus impossíveis erguidos sobre a areia dourada.",
    cover: "https://images.unsplash.com/photo-1745750434535-5943ef2fd31a?w=1200&q=80&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1745750434535-5943ef2fd31a?w=1600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1745750434535-5943ef2fd31a?w=1600&q=80&auto=format&fit=crop&crop=entropy"
    ]
  },

  {
    id: "lisboa",
    name: "Lisboa",
    location: "Portugal",
    text: "Ladeiras de calçada portuguesa, azulejos e o bondinho amarelo cortando ruas de séculos de história.",
    cover: "https://images.unsplash.com/photo-1575373350254-9ab842370a47?w=1200&q=80&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1575373350254-9ab842370a47?w=1600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1575373350254-9ab842370a47?w=1600&q=80&auto=format&fit=crop&crop=entropy"
    ]
  },

  {
    id: "saoluis",
    name: "São Luís",
    location: "Maranhão, Brasil",
    text: "Do casario centenário aos Lençóis Maranhenses: dunas brancas e lagoas de um azul que parece irreal.",
    cover: "https://images.unsplash.com/photo-1561420052-e8a2aec15846?w=1200&q=80&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1561420052-e8a2aec15846?w=1600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1561420052-e8a2aec15846?w=1600&q=80&auto=format&fit=crop&crop=entropy"
    ]
  },

  {
    id: "madrid",
    name: "Madrid",
    location: "Espanha",
    text: "A energia da Gran Vía, os museus e uma vida noturna que só começa quando o sol se põe.",
    cover: "https://images.unsplash.com/photo-1543785734-4b6e564642f8?w=1200&q=80&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1543785734-4b6e564642f8?w=1600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543785734-4b6e564642f8?w=1600&q=80&auto=format&fit=crop&crop=entropy"
    ]
  },

  {
    id: "noronha",
    name: "Fernando de Noronha",
    location: "Pernambuco, Brasil",
    text: "Águas cristalinas, vida marinha exuberante e paisagens que explicam por que é considerado um paraíso.",
    cover: "https://images.unsplash.com/photo-1614722860207-909e0e8dfd99?w=1200&q=80&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1614722860207-909e0e8dfd99?w=1600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614722860207-909e0e8dfd99?w=1600&q=80&auto=format&fit=crop&crop=entropy"
    ]
  },

  {
    id: "alwadi",
    name: "Deserto de Al Wadi",
    location: "Emirados Árabes Unidos",
    text: "Dunas avermelhadas, camelos ao entardecer e a hospitalidade beduína no meio do silêncio do deserto.",
    cover: "https://images.unsplash.com/photo-1549944850-84e00be4203b?w=1200&q=80&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1549944850-84e00be4203b?w=1600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549944850-84e00be4203b?w=1600&q=80&auto=format&fit=crop&crop=entropy"
    ]
  },

  {
    id: "mesquita",
    name: "Mesquita Branca",
    location: "Abu Dhabi, Emirados Árabes",
    text: "Os arcos e cúpulas de mármore branco da Grande Mesquita Sheikh Zayed impressionam em qualquer horário do dia.",
    cover: "https://images.unsplash.com/photo-1741204472540-e213116cb3ef?w=1200&q=80&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1741204472540-e213116cb3ef?w=1600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1741204472540-e213116cb3ef?w=1600&q=80&auto=format&fit=crop&crop=entropy"
    ]
  },

  {
    id: "pamukkale",
    name: "Pamukkale",
    location: "Turquia",
    text: "\"Castelo de algodão\": piscinas naturais de travertino branco que parecem esculpidas na paisagem.",
    cover: "https://images.unsplash.com/photo-1744154374002-141f285577e6?w=1200&q=80&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1744154374002-141f285577e6?w=1600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1744154374002-141f285577e6?w=1600&q=80&auto=format&fit=crop&crop=entropy"
    ]
  }
];