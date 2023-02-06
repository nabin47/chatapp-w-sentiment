import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom'
import Message from "./Message";
test("Users texts should be rendered", () => {
    render(<Message />);
    const name = screen.getByTitle('texts');
    expect(name).toBeInTheDocument();
  });
  
  test("person image should be rendered", () => {
    render(<Message />);
    const Image = screen.getByAltText('img1');
    expect(Image).toBeInTheDocument();
  });
  test("person sending message duration should be rendered", () => {
    render(<Message />);
    const icon = screen.getByTestId('duration');
    expect(icon).toBeInTheDocument();
  });