import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../pages/NotFound';

describe('Testes do componente NotFound', () => {
  it('Testa se a página contém um h2 com o texto Page requested not found', () => {
    renderWithRouter(<NotFound />);
    const text = screen.getByRole('heading', {
      name: /page requested not found/i,
    });

    expect(text).toBeInTheDocument();
  });

  it('Testa se a página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    renderWithRouter(<NotFound />);
    const image = screen.getByRole('img', {
      name: /pikachu crying because the page requested was not found/i,
    });

    expect(image).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
