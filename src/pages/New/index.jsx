import { Link } from "react-router-dom";

import { Header } from "../../components/header";
import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/button";



export function New(){
    return (
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <h1>Criar Nota</h1>
                        <Link to="/">voltar</Link>
                    </header>

                    <Input placeholder="Titulo"/>
                    <Textarea placeholder="Observacoes"/>


                    <Section title="Links uteis">
                        <NoteItem value="https://rocketseat.com.br"/>
                        <NoteItem isNew placeholder="Novo Link"/>

                    </Section>

                    <Section title="Marcadores">
                    <div className="tags">
                        <NoteItem value="react"/>
                        <NoteItem isNew placeholder="Nova Tag"/>
                    </div>
                    </Section> 
                    <Button title="Salvar"/>
                </Form>
            </main>
        </Container>
    )
}