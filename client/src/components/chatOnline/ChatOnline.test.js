import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom'
import ChatOnline from "./ChatOnline";
test("Users name should be rendered", () => {
    render(<ChatOnline />);
    const name = screen.getByTitle('username');
    expect(name).toBeInTheDocument();
  });
  
  test("person image should be rendered", () => {
    render(<ChatOnline />);
    const Image = screen.getByAltText('img1');
    expect(Image).toBeInTheDocument();
  });
  test("person online should be rendered", () => {
    render(<ChatOnline />);
    const icon = screen.getByTestId('online');
    expect(icon).toBeInTheDocument();
  });