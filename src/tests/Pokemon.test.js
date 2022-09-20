import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testes do componente Pokemon', () => {
  it('Testa se é renderizado um card com as informações de determinado pokémon', () => {
    renderWithRouter(<App />);
    const name = screen.getByText(/pikachu/i);
    const type = screen.getByTestId('pokemon-type');
    const weigth = screen.getByText(/average weight: 6\.0 kg/i);
    const image = screen.getByRole('img', {
      name: /pikachu sprite/i,
    });

    expect(name.textContent).toBe('Pikachu');
    expect(type.textContent).toBe('Electric');
    expect(weigth.textContent).toBe('Average weight: 6.0 kg');
    expect(image.src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(image.alt).toBe('Pikachu sprite');
  });

  it('Testa se o card do pokémon contém um link para exibir detalhes do pokémon.', () => {
    renderWithRouter(<App />);
    const link = screen.getByRole('link', {
      name: /more details/i,
    });
    expect(link.href).toBe('http://localhost/pokemons/25');
  });

  it('Teste se existe um ícone de estrela nos pokémons favoritados', () => {
    renderWithRouter(<App />);
    const link = screen.getByRole('link', {
      name: /more details/i,
    });
    userEvent.click(link);
    const checkbox = screen.getByRole('checkbox', {
      name: /pokémon favoritado\?/i,
    });
    userEvent.click(checkbox);

    const startCheck = screen.getByRole('img', {
      name: /pikachu is marked as favorite/i,
    });
    expect(startCheck).toHaveAttribute('alt', 'Pikachu is marked as favorite');
    expect(startCheck).toHaveAttribute('src', '/star-icon.svg');
  });
});
