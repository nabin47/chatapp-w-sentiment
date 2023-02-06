import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom'
import Conversations from "./Conversation";
test("Users name should be rendered", () => {
    render(<Conversations />);
    const name = screen.getByTitle('username');
    expect(name).toBeInTheDocument();
  });
  
  test("person image should be rendered", () => {
    render(<Conversations />);
    const Image = screen.getByAltText('img1');
    expect(Image).toBeInTheDocument();
  });
  
  