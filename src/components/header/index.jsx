import {RiShutDownLine} from 'react-icons/ri'


import { Container, Profile, Logout } from "./styles";

export function Header() {
    return (
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/gabrielrgrilo.png" alt="foto do usuario"></img>


                <div>
                    <span>Bem-vindo</span>
                    <strong>Gabriel Russo</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>


        </Container>
    )
}