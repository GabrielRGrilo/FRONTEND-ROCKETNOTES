import { Container, Links, Content } from "./styles";

import { Tag } from "../../components/Tag";
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introducao ao React</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quas
            debitis temporibus, ipsum ea dicta nihil obcaecati facere et
            corrupti voluptatibus voluptas aperiam, labore repellendus
            accusantium eum. Architecto, culpa nobis?
          </p>

          <Section title="Links Uteis">
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
