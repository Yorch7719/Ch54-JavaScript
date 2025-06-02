import "./footer.css"

const destructuracion = () => {
    let a = 10;
    let b = 20;
    // Pasar el valor de a -> b y el valor de b -> a
    let temporal = a;
    a = b;
    b = temporal;

    // La desestructuracion en JavaScript es una forma 
    // concisa de extraer valores de arrays o propiedades 
    // de objetos y asignarlos a variables

    [b,a] = [a,b];

    const gryffindor = ["Harry", "Ron", "Neville", "Hermione", "Ginny"];
    /* let protagonista;
    let amigo;
    let amiga; */
    const [protagonista, amigo, , amiga ]= gryffindor;
    /* protagonista = gryffindor[0];
    amigo = gryffindor[1];
    amiga = gryffindor [3];
    */

    // Desectructuracion en objetos
    const hatSelector = {
        name: "Jen",
        color: "brown",
        edad: 26,
        origen: "Hogwarts",
        isMagic: true, 
        casas: {
            slytherin: "🐍 Astutos y ambiciosos.",
            hufflepuff: "🦡 Leales y Trabajadores",
            gryffindor: "🦁 Valientes y Atrevidos",
            ravenclaw: "🦅 Listos y Curiosos",
        }
    }
    // {} = {};
   const {edad, name, origen:location } = hatSelector;
/* 
    const nombre = hatSelector.nombre;
    const edad = hatSelector.edad;
 */
console.log (name, edad, location); // Jen 26 Hogwarts

// Obtener le valor de Slytherin y asignarla a la variable myHouse
// const {casas} = hatSelector; // { }
// const {slytherin: myHouse} = casas; // "🐍 Astutos y ambiciosos."
const {casas: {hufflepuff:myHouse} } = hatSelector;
console.log(myHouse);

}
destructuracion();

const semana8Style = {
    fontSize: "2rem",
    color: "marmol"
};

const semana8PartyStyle = {
    fontSize:"4rem", 
    color:"red"
};

const Footer = ( {cohorte} ) => {

    return (
        <footer>
            <p style={ {fontSize: "2rem", color:"goldenrod"} }>CH {cohorte} - 2025</p>
            <p style={ cohorte===54? semana8Style : semana8PartyStyle }>Semana 8</p>
            <em className="textFooter">No es Leviosa es Leviosaaaá</em>
        </footer>
    );



};

export {Footer};