import illustration from '../assets/images/illustration.svg';
import logoImage from '../assets/images/logo.svg';
import googleIcon from '../assets/images/google-icon.svg'
import '../styles/auth.scss';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export function Home(){
    const history = useNavigate();    
    const { user, signInWithGoogle } = useAuth();

    async function handleCreateRoom(){
        if(!user){
            await signInWithGoogle();
        }              
        history('/rooms/new');
    }

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
                    <button onClick={handleCreateRoom} className='create-room'>
                        <img src={googleIcon} alt="Logo do Google" title='Logo do Google' />
                        Crie sua sala com o Google 
                    </button>
                    <div className='separator'>Ou entre em uma sala</div>
                    <form action="#">
                        <input type="text" placeholder="Digite o código da sala" />
                        <Button type='submit' id='submit'>Entrar na sala</Button>
                    </form>
                </div>
            </main>
        </div>
    )
}