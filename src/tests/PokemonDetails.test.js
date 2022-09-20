import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testes do componente Pokemon Details', () => {
  it('Testa se as informações detalhadas do pokémon são mostradas na tela', () => {
    renderWithRouter(<App />);
    const link = screen.getByRole('link', {
      name: /more details/i,
    });
    userEvent.click(link);
    const heading = screen.getByRole('heading', {
      name: /pikachu details/i,
    });
    const sumary = screen.getByRole('heading', {
      name: /summary/i,
    });
    const text1 = screen.getByText(
      /this intelligent pokémon roasts hard berries /i,
      { exact: false },
    );
    const text2 = screen.getByText(
      /with electricity to make them tender enough to eat/i,
      { exact: false },
    );

    expect(link).not.toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(sumary).toBeInTheDocument();
    expect(text1).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
  });

  it('Testa se existe uma seção com os mapas contendo as localizações do pokémon', () => {
    renderWithRouter(<App />);
    const link = screen.getByRole('link', {
      name: /more details/i,
    });
    userEvent.click(link);
    const heading = screen.getByRole('heading', {
      name: /game locations of pikachu/i,
    });
    const viridian = screen.getByText(/kanto viridian forest/i);
    const powerPlant = screen.getByText(/kanto power plant/i);
    const map = screen.getAllByRole('img', {
      alt: /Pikachu location/i,
    });
    const label = screen.getByText(/pokémon favoritado\?/i);

    expect(heading).toBeInTheDocument();
    expect(viridian).toBeInTheDocument();
    expect(powerPlant).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(map[1].alt).toBe('Pikachu location');
    expect(map[1].src).toBe('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(map[2].src).toBe('https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  });
});
