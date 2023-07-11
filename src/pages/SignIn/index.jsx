import { Container, Form, Background } from "./styles";
import { FiLogIn, FiMail, FiLock} from 'react-icons/fi'
import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/button";





export function SignIn(){
    return (
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicacao para salvar e gerenciar seus links uteis.</p>

                <h2>Faca seu login</h2>
            <Input 
                placeholder="email"
                type="text"
                icon={FiMail}
            />
             <Input 
                placeholder="senha"
                type="password"
                icon={FiLock}
            />
           
           <Button title="Entrar"/>

            <Link to="/register">
                Criar Conta
            </Link>
            
           
            </Form>
            <Background/>
        </Container>
    )
}