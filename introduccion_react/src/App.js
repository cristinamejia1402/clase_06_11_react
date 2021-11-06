import UsuarioClase from './components/usuarios-component-clase';
import UsuarioFuncional from './components/usuarios-component-funcional';

function App() {
  return (
    <div>
      <h1>Introducción a React</h1>
      <br/>
      <h3>Componente funcional</h3>
      <UsuarioFuncional name="Pepito Perez"/>
      <UsuarioFuncional name="Juan Patiño"/>
      <br/>
      <h3>Componente Clase</h3>
      <UsuarioClase/>
    </div>
  );
}

export default App;