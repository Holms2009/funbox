import { render, screen } from '@testing-library/react';
import PointInputBlock from './PointInputBlock';

test('renders input field with button', () => {
  render(<PointInputBlock submitHandler={() => { return }} theme='dark'/>);
  
  const button = screen.getByText(/Добавить/i);
  const input = screen.getByRole('textbox');

  expect(button).toBeInTheDocument();
  expect(input).toBeInTheDocument();
});