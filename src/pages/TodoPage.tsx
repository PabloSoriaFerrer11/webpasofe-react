function Todo(){
    return (
        <main>
        <div className="">
            <h2>"To Do" List</h2>
            <p className="todo-description">Esta es una lista de posibles tareas de mejora que podríamos desarrollar para la WEB. 
                Se han detallado para indicar el conocimiento de nuevas tecnologías y mostrar la creatividad. </p>
            <ul className="todo-list">

                {/* 🎨 Contenido CV */}
                {listItem("Crear Hero Section en Home: foto, nombre, rol, tagline, botones [Descargar CV] / [Contactar]", false)}
                {listItem("Sección de Skills con badges visuales (JS, TS, C#, T-SQL, React, Flutter, VB6)", false)}
                {listItem("Ampliar timeline con descripciones de responsabilidades y tecnologías por puesto", false)}
                
                {/* 🔧 Técnico */}
                {listItem("Implementar menú hamburger responsive para móvil", false)}
                {listItem("Hacer dropdowns del nav accesibles (aria-expanded, teclado, focus visible)", false)}
                {listItem("Formulario de contacto funcional con EmailJS o Formspree", false)}
                {listItem("Refactor CSS: agrupar overrides dark mode, migrar a CSS Modules por componente", false)}
                {listItem("Cambio de HOST de la WEB. Implementación de dependencias.", false)}
                {listItem("Mejorar estilo de los botones de la WEB.", false)}
            </ul>
        </div>
        <div className="">
            <h2>"Done" List</h2>
            <p className="todo-description"></p>
            <ul className="todo-list">
                {listItem("Migración de la WEB a REACT", true, "2026")}
                {listItem("Añadir soporte para modo claro y oscuro con preferencias del usuario.", true, "2026")}
                {listItem("Etiquetas en el meta", true, "2026")}
                
            </ul>
        </div>
        </main>
    );
};

function listItem(text: string, done: boolean, date?: string) {
  return (
    <li className={`${done ? 'is-completed' : 'todo-item pending'}`}>
      {text} {done && " ✅"}
      {date && <span className="todo-date">{date}</span>}
    </li>
  );
}

export const TodoPage = () => {  
    return (
       <Todo />    
    );
};