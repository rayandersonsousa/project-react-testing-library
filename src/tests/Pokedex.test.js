import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testes do componente Pokedéx', () => {
  it('Teste se a página contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);
    const heading = screen.getByRole('heading', {
      name: /encountered pokémons/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('Teste se é exibido o próximo pokémon da lista quando o botão é clicado', () => {
    renderWithRouter(<App />);
    const button = screen.getByRole('button', {
      name: /próximo pokémon/i,
    });

    const image = screen.getByRole('img', {
      name: /pikachu sprite/i,
    });

    expect(button).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    userEvent.click(button);

    const nextImage = screen.getByRole('img', {
      name: /charmander sprite/i,
    });

    expect(nextImage).toBeInTheDocument();
  });

  it('Teste se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);
    const eletric = screen.getByRole('button', {
      name: /electric/i,
    });
    const fire = screen.getByRole('button', {
      name: /fire/i,
    });
    const bug = screen.getByRole('button', {
      name: /bug/i,
    });
    const poison = screen.getByRole('button', {
      name: /poison/i,
    });
    const psychic = screen.getByRole('button', {
      name: /psychic/i,
    });
    const normal = screen.getByRole('button', {
      name: /normal/i,
    });
    const dragon = screen.getByRole('button', {
      name: /dragon/i,
    });

    expect(eletric).toBeInTheDocument();
    expect(fire).toBeInTheDocument();
    expect(bug).toBeInTheDocument();
    expect(poison).toBeInTheDocument();
    expect(psychic).toBeInTheDocument();
    expect(normal).toBeInTheDocument();
    expect(dragon).toBeInTheDocument();
  });

  it('Testa se é possível clicar no botão de filtragem All', () => {
    renderWithRouter(<App />);
    const all = screen.getByRole('button', {
      name: /all/i,
    });
    userEvent.click(all);
  });

  it('Testa se os botões de filtro possuem o data-testid=pokemon-type-button', () => {
    renderWithRouter(<App />);
    const dataTest = 7;
    const filters = screen.getAllByTestId('pokemon-type-button');
    expect(filters.length).toBe(dataTest);
  });
});
