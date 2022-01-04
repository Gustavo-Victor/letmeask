import illustration from '../assets/images/illustration.svg';
import logoImage from '../assets/images/logo.svg';
import {Button} from '../components/Button';
import '../styles/auth.scss';
import {Link} from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';


export function NewRoom(){
    const { user, signInWithGoogle } = useAuth();

    return (
        <div id="page-auth">
            <aside>
                <img src={illustration} alt="Ilustração" title='Ilustração' />
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Crie as dúvidas de sua audiência em tempo real</p>
            </aside>
            <main>                
                <div className="main-content">
                    <img src={logoImage} alt="Letmeask" title="Letmeask" /> 
                    <h2>Criar uma nova sala usuário {user?.name}</h2>                   
                    <form action="#">
                        <input type="text" placeholder="Nome da sala" />
                        <Button type='submit' id='submit'>Criar sala</Button>
                    </form>
                    <p>Quer entrar em uma sala existente?
                        <Link to={'/'} >Clique aqui</Link> 
                    </p>
                </div>
            </main>
        </div>
    )
}