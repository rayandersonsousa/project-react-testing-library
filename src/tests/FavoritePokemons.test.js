import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemon from '../pages/FavoritePokemons';

describe('Testes do componente Favorite Pokémon', () => {
  it('Teste se é exibida na tela a mensagem No favorite pokemon found', () => {
    renderWithRouter(<FavoritePokemon />);
    const noFavorite = screen.getByText(/no favorite pokemon found/i);

    expect(noFavorite).toBeInTheDocument();
  });
});
