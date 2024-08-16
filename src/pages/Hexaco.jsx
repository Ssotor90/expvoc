import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { BorderlessLight} from "survey-core/themes";
import "survey-core/i18n/spanish";

const surveyJson = {
    title: "HEXACO",
    pages: [
        {
            name: "page1",
            elements: [
                {
                    type: "radiogroup",
                    name: "q1",
                    title: "Me aburriría bastante visitar una galería de arte.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q2",
                    title: "Limpio mi oficina o mi casa con bastante frecuencia.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q3",
                    title: "Casi nunca soy rencoroso/a, incluso con personas que me han hecho mucho daño.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q4",
                    title: "En general, me siento bastante satisfecho/a conmigo mismo/a.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q5",
                    title: "Sentiría miedo si tuviera que viajar en malas condiciones climatológicas.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q6",
                    title: "Si quiero algo de una persona que no me gusta, me comportaré con ella de un modo muy amable para conseguirlo.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q7",
                    title: "Me interesa conocer la historia y la política de otros países.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q8",
                    title: "Cuando trabajo suelo ponerme metas ambiciosas.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q9",
                    title: "La gente me dice a veces que soy muy crítico con los demás.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q10",
                    title: "Casi nunca expreso mis opiniones en reuniones sociales.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q11",
                    title: "A veces no puedo evitar preocuparme por cosas insignificantes.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q12",
                    title: "Si supiera que nunca sería descubierto, estaría dispuesto a robar un millón de euros.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q13",
                    title: "Me gustaría un trabajo rutinario en lugar de un trabajo que requiera ser creativo.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q14",
                    title: "A menudo compruebo mi trabajo varias veces para detectar cualquier error.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q15",
                    title: "A veces la gente me dice que soy muy testarudo/a.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q16",
                    title: "Evito entablar la típica conversación trivial con la gente.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q17",
                    title: "Cuando me ocurre algo doloroso, necesito alguien que me reconforte.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q18",
                    title: "Tener mucho dinero no es especialmente importante para mí.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q19",
                    title: "Considero que prestar atención a ideas extremas es una pérdida de tiempo.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q20",
                    title: "Tomo decisiones basándome en las sensaciones del momento, más que en una reflexión cuidadosa.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                }
            ]
        },
        {
            name: "page2",
            elements: [
                {
                    type: "radiogroup",
                    name: "q21",
                    title: "La gente piensa que tengo mal genio.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q22",
                    title: "Soy muy activo/a casi todo el tiempo.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q23",
                    title: "Siento ganas de llorar cuando veo llorar a otras personas.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q24",
                    title: "Soy una persona corriente, no soy mejor que los demás.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q25",
                    title: "No perdería mi tiempo leyendo un libro de poseía.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q26",
                    title: "Planifico y organizo las cosas con antelación para evitar apuros de última hora.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q27",
                    title: "Mi actitud hacia la gente que me ha tratado mal es la de 'perdonar y olvidar'.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q28",
                    title: "Pienso que a la mayoría de la gente le gustan algunos aspectos de mi personalidad.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q29",
                    title: "No me importa realizar trabajos que impliquen tareas peligrosas.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q30",
                    title: "No usaría halagos para obtener un ascenso o promoción en el trabajo, aunque pensara que con ello podría conseguirlo.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q31",
                    title: "Me divierte mirar mapas de diferentes lugares.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q32",
                    title: "A menudo me exijo mucho a mi mismo/a cuando pretendo conseguir un objetivo.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q33",
                    title: "Generalmente acepto los fallos de los demás sin quejarme.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q34",
                    title: "En situaciones sociales, normalmente soy el primero en dar el primer paso.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q35",
                    title: "Me preocupo mucho menos que la mayoría de la gente.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q36",
                    title: "Si tuviera problemas económicos, me sentiría tentado a comprar bienes robados.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q37",
                    title: "Me gustaría crear una obra de arte, como una novela, una canción, o una pintura.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q38",
                    title: "Cuando estoy trabajando en algo, no presto demasiada atención a los pequeños detalles.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q39",
                    title: "Normalmente soy bastante flexible en mis opiniones cuando la gente está en desacuerdo conmigo.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q40",
                    title: "Disfruto teniendo mucha gente a mi alrededor con quien poder hablar.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                }
            ]
        },
        {
            name: "page3",
            elements: [
                {
                    type: "radiogroup",
                    name: "q41",
                    title: "Puedo manejar situaciones difíciles sin necesitar apoyo emocional de nadie.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q42",
                    title: "Me gustaría vivir en un vecindario muy caro y de clase alta.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q43",
                    title: "Me gusta la gente que tiene opiniones poco convencionales.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q44",
                    title: "Cometo muchos errores porque no pienso antes de actuar.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q45",
                    title: "Casi nunca me enfado, incluso aunque la gente me trate bastante mal.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q46",
                    title: "La mayoría de los días, me siento feliz y optimista.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q47",
                    title: "Cuando alguien muy cercano a mí es infeliz, casi puedo sentir el sufrimiento de esa persona.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q48",
                    title: "No me gustaría que la gente me tratara como si yo fuera superior a ellos.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q49",
                    title: "Si pudiera, me gustaría ir a un concierto de música clásica.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q50",
                    title: "A menudo la gente me gasta bromas por el desorden de mi habitación o escritorio.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q51",
                    title: "Si alguien me ha engañado una vez, siempre sospecharé de esa persona.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q52",
                    title: "Me parece que soy una persona impopular.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q53",
                    title: "Cuando hay algún peligro físico, soy muy miedoso/a.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q54",
                    title: "Si quiero algo de alguien, me reiré de sus chistes aunque no tengan gracia.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q55",
                    title: "Me aburriría mucho con un libro de historia de la ciencia y tecnología.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q56",
                    title: "Cuando me propongo una meta, muchas veces abandono sin haberla conseguido.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q57",
                    title: "Tiendo a ser indulgente al juzgar a otras personas.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q58",
                    title: "Cuando estoy con un grupo de gente, suelo ser quien habla en nombre del grupo.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q59",
                    title: "Casi nunca, por no decir nunca, tengo problemas para dormir por estrés o ansiedad.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q60",
                    title: "Nunca aceptaría un soborno, aunque fuera muy cuantioso.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                }
            ]
        },
        {
            name: "page4",
            elements: [
                {
                    type: "radiogroup",
                    name: "q61",
                    title: "La gente suele decirme que tengo mucha imaginación.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q62",
                    title: "Siempre intento no cometer errores en mi trabajo, aunque me cueste tiempo.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q63",
                    title: "Cuando la gente me dice que estoy equivocado/a, mi primera reacción es discutir con ellos.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q64",
                    title: "Prefiero trabajos que implican interactuar activamente con otras personas a otros que implican trabajar solo.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q65",
                    title: "Cada vez que me siento preocupado por algo, quiero compartir mi preocupación con otra persona.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q66",
                    title: "Me gustaría que me vieran conduciendo un coche muy caro.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q67",
                    title: "Me considero una persona un tanto excéntrica.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q68",
                    title: "No permito que mis impulsos gobiernen mi comportamiento.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q69",
                    title: "La mayoría de la gente suele enfadarse más rápidamente que yo.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q70",
                    title: "La gente me dice muchas veces que debería intentar animarme.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q71",
                    title: "Siento emociones muy fuertes cuando alguien muy cercano a mí se marcha por una larga temporada.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q72",
                    title: "Creo que merezco mayor respeto que la mayoría de la gente.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q73",
                    title: "A veces me gusta mirar cómo sopla el viento a través de los árboles.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q74",
                    title: "Cuando estoy trabajando, a veces tengo dificultades porque soy desorganizado/a.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q75",
                    title: "Me resulta difícil perdonar a alguien que me ha hecho algo malo.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q76",
                    title: "A veces siento que soy una persona despreciable.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q77",
                    title: "Aunque estuviera en una situación de emergencia, no entraría en pánico.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q78",
                    title: "No intentaría agradar a alguien por el simple hecho de conseguir sus favores.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q79",
                    title: "Realmente nunca he disfrutado consultando una enciclopedia.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q80",
                    title: "Trabajo sólo lo justo y necesario.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                }
            ]
        },
        {
            name: "page5",
            elements: [
                {
                    type: "radiogroup",
                    name: "q81",
                    title: "Aunque la gente cometa muchos errores, casi nunca les digo algo negativo.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q82",
                    title: "Tiendo a sentirme bastante inseguro cuando hablo delante de un grupo de personas.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q83",
                    title: "Me pongo muy nervioso cuando estoy esperando conocer el resultado de una decisión importante.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q84",
                    title: "Me sentiría tentado/a utilizar dinero falso, si estuviera seguro/a de que no me van a descubrir.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q85",
                    title: "No me considero una persona artística o creativa.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q86",
                    title: "La gente me dice muchas veces que soy perfeccionista.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q87",
                    title: "Me resulta difícil llegar a un acuerdo cuando creo que realmente tengo razón.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q88",
                    title: "Lo primero que hago siempre que llego a un sitio nuevo es hacer amigos.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q89",
                    title: "Casi nunca hablo de mis problemas con los demás.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q90",
                    title: "Disfrutaría muchísimo si fuera propietario/a de bienes lujosos.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q91",
                    title: "Me parece aburrido hablar sobre filosofía.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q92",
                    title: "Prefiero hacer lo primero que se me ocurra, que ceñirme a un plan.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q93",
                    title: "Me resulta difícil controlar mi genio cuando la gente me insulta.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q94",
                    title: "La mayoría de la gente es más optimista y dinámica de lo que suelo ser yo.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q95",
                    title: "No me emociono incluso en situaciones donde la mayoría de las personas se ponen muy sentimentales.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q96",
                    title: "Quiero que la gente sepa que soy una persona importante, de alto estatus.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q97",
                    title: "Siento compasión por la gente que es menos afortunada que yo.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q98",
                    title: "Intento ser generoso/a con quienes lo necesitan.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q99",
                    title: "No me preocuparía hacer daño a alguien que no me gusta.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "q100",
                    title: "La gente me ve como una persona dura de corazón.",
                    isRequired: true,
                    choices: [
                        { value: 1, text: "Muy en desacuerdo" },
                        { value: 2, text: "En desacuerdo" },
                        { value: 3, text: "Neutral (ni de acuerdo ni en desacuerdo)" },
                        { value: 4, text: "De acuerdo" },
                        { value: 5, text: "Totalmente de acuerdo" }
                    ]
                }
            ]
        }
    ]
};

function App() {
    const survey = new Model(surveyJson);
    survey.locale = "es";
    survey.applyTheme(BorderlessLight)
    return <Survey model={survey} />;
}

export default App;
