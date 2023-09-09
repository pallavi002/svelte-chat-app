import { render, screen, fireEvent } from '@testing-library/svelte';
import ChatBubble from '../src/ChatBubble.svelte';

test('opens chat modal on button click', async () => {
  render(ChatBubble);

  const plusButton = screen.getByText('+');
  fireEvent.click(plusButton);

  const modalHeader = screen.getByText('Chat Support');
  expect(modalHeader).toBeInTheDocument();
});

