import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom'
import Topbar from "./Topbar";
test("Logo should be rendered", () => {
    render(<Topbar />);
    const logo = screen.getByTitle('logo');
    expect(logo).toBeInTheDocument();
  });
  test("Homepage link should be rendered", () => {
    render(<Topbar />);
    const Homepage = screen.getByTitle('homepage');
    expect(Homepage).toBeInTheDocument();
  });
  test("person sending message duration should be rendered", () => {
    render(<Topbar />);
    const icon = screen.getByTestId('icon');
    expect(icon).toBeInTheDocument();
  });
  test("Homepage link should be rendered", () => {
    render(<Topbar />);
    const number = screen.getByTitle('number');
    expect(number).toBeInTheDocument();
  });