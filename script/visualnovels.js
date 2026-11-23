/* 
id: string
titulo: string
generos: array de string
desenvolvedor ["Dev1", "IdDev1", "Dev2", "IdDev2", ...]
ano_publicacao: int
adulto: booean

imagem: string
pagina: string

nota: int
data_analise: string
*/

const visualNovels = [
    { //1 subahibi
        id: "subarashiki-hibi",
        titulo: "Subarashiki Hibi",
        generos: ["Filosofia", "Drama", "Mistério"],
        desenvolvedor: ["KeroQ", "keroq"],
        ano_publicacao: 2010,
        adulto: true,
        
        imagem: "/image/subahibi.png",
        pagina: "/reviews/subarashiki-hibi.html",

        nota: 9,
        data_analise: "2026-11-10"
    },
    { //2 atori
        id: "atri-my-dear-moments",
        titulo: "Atri-My Dear Moments",
        generos: ["Romance", "Drama"],
        desenvolvedor: ["Fronting", "frontwing", "Makura", "makura"],
        ano_publicacao: 2020,
        adulto: false,
        
        imagem: "/image/atrimdm.png",
        pagina: "/reviews/subarashiki-hibi.html",

        nota: 10,
        data_analise: "2026-10-23"
    },
    {  // Gurizaia no Kajitsu - a fruta de grisaia
        id: "gurizaia-no-kajitsu",
        titulo: "Gurizaia no Kajitsu",
        generos: ["Drama", "Psicológico"],
        desenvolvedor: ["Fronting", "frontwing"],
        ano_publicacao: 2011,
        adulto: true,
        
        imagem: "/image/gurizaia.png",
        pagina: "/reviews/subarashiki-hibi.html",

        nota: 7,
        data_analise: "2026-11-07"
    },
    { // DDLC
        id: "doki-doki-literature-club",
        titulo: "Doki Doki Literature Club",
        generos: ["Terror", "Psicológico"],
        desenvolvedor: ["Team Salvato", "team-salvato"],
        ano_publicacao: 2017,
        adulto: true,
        
        imagem: "/image/ddlc.png",
        pagina: "/reviews/subarashiki-hibi.html",

        nota: 9,
        data_analise: "2026-11-11"
    },
    { // If my heart had wings
        id: "if-my-heart-had-wings",
        titulo: "If My Heart Had Wings",
        generos: ["Romance", "Drama"],
        desenvolvedor: ["Pulltop", "pulltop"],
        ano_publicacao: 2012,
        adulto: false,
        
        imagem: "/image/if-my-heart-had-wings.png",
        pagina: "/reviews/subarashiki-hibi.html",

        nota: 9,
        data_analise: "2026-11-16"
    },
    { // Air
        id: "air",
        titulo: "Air",
        generos: ["Fantasia", "Drama"],
        desenvolvedor: ["Key", "Key"],
        ano_publicacao: 2000,
        adulto: false,
        
        imagem: "/image/airvn.png",
        pagina: "/reviews/subarashiki-hibi.html",

        nota: 10,
        data_analise: "2026-11-16"
    },
    { // Higurashi Onikakushi-hen  | 7
        id: "higurashi-no-naku-koro-ni-onikakushi-hen",
        titulo: "Higurashi no Naku Koro Ni: Onikakushi-Hen",
        generos: ["Terror", "Mistério"],
        desenvolvedor: ["07th Expansion", "07th-expansion"],
        ano_publicacao: 2002,
        adulto: true,
        
        imagem: "/image/higurashich1.png",
        pagina: "/reviews/subarashiki-hibi.html",

        nota: 8,
        data_analise: "2026-12-01"
    },
    { // steambot chronicles battle tournament
        id: "steambot-chronicles-battle-tournament",
        titulo: "Steambot Chronicles: Battle Tournament",
        generos: ["Aventura", "Mecha"],
        desenvolvedor: ["Irem", "irem"],
        ano_publicacao: 2008,
        adulto: false,
        
        imagem: "/image/steambotbt.png",
        pagina: "/reviews/subarashiki-hibi.html",

        nota: 6,
        data_analise: "2026-12-06"
    },
    { // Yosuga no Sora
        id: "yosuga-no-sora",
        titulo: "Yosuga no Sora",
        generos: ["Eroge"],
        desenvolvedor: ["Sphere", "sphere"],
        ano_publicacao: 2008,
        adulto: true,
        
        imagem: "/image/yosuganosora.png",
        pagina: "/reviews/subarashiki-hibi.html",

        nota: 5,
        data_analise: "2026-11-06"
    },
    { // School Days
        id: "school-days",
        titulo: "School Days",
        generos: ["Eroge", "Psicológico"],
        desenvolvedor: ["Overflow", "overflow"],
        ano_publicacao: 2005,
        adulto: true,
        
        imagem: "/image/schooldayshq.png",
        pagina: "/reviews/subarashiki-hibi.html",

        nota: 8,
        data_analise: "2026-10-10"
    },
    {   // Koibito-Chan Demo
        id: "koibito-chan-demo",
        titulo: "Koibito-chan (Demo)",
        generos: ["Romance", "Psicológico"],
        desenvolvedor: ["Miller", "miller"],
        ano_publicacao: 2026,
        adulto: true,
        
        imagem: "/image/astolfotemplate.png",
        pagina: "/reviews/subarashiki-hibi.html",

        nota: 3,
        data_analise: "2026-9-03"
    }
];