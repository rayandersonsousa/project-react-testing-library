import { screen, render } from '@testing-library/react';
import { About } from '../pages';

describe('Testes do componente About', () => {
  it('Testa se a página contém um heading h2 com o texto About Pokédex', () => {
    render(<About />);
    const title = screen.getByRole('heading', {
      name: /about pokédex/i,
    });
    expect(title).toBeInTheDocument();
  });

  it('Testa se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    render(<About />);
    const firstP = screen.getByText(
      /this application simulates a pokédex/i,
    );
    const secondP = screen.getByText(
      /one can filter pokémons by type, and see more details for each one of them/i,
    );
    expect(firstP).toBeInTheDocument();
    expect(secondP).toBeInTheDocument();
  });

  it('Testa se a página contém a seguinte imagem de uma Pokédex', () => {
    render(<About />);
    const image = screen.getByRole('img', {
      name: /pokédex/i,
    });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
