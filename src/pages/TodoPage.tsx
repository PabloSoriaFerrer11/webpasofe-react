function Todo(){
    return (
        <main>
        <div className="">
            <h2>"To Do" List</h2>
            <p className="todo-description">Esta es una lista de posibles tareas de mejora que podríamos desarrollar para la WEB. 
                Se han detallado para indicar el conocimiento de nuevas tecnologías y mostrar la creatividad. </p>
            <ul className="todo-list">

                {listItem("Formulario de contacto mejorado con envío de correo .", false)}
                {listItem("Cambio de HOST de la WEB. Implementación de dependencias.", false)}
                {listItem("Mejorar el estilo oscuro para que sea más agradable.", false)}
                {listItem("Mejorar estilo de los botones de la WEB.", false)}
            </ul>
        </div>
        <div className="">
            <h2>"Done" List</h2>
            <p className="todo-description"></p>
            <ul className="todo-list">
                {listItem("Migración de la WEB a REACT", true)}
               
            </ul>
        </div>
        </main>
    );
};

function listItem(text: string, done: boolean) {
  return (
    <li className={`${done ? 'is-completed' : 'todo-item pending'}`}>
      {text} {done && " ✅"}
    </li>
  );
}

export const TodoPage = () => {  
    return (
       <Todo />    
    );
};