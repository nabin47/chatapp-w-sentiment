import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom'
import Login from "./login";
test("username input should be rendered", () => {
    render(<Login />);
    const emailInputEl = screen.getByPlaceholderText(/email/i);
    expect(emailInputEl).toBeInTheDocument();
  });
  
  test("password input should be rendered", () => {
    render(<Login />);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);
    expect(passwordInputEl).toBeInTheDocument();
  });
  
  test("button should be rendered", () => {
    render(<Login />);
    const buttonEl = screen.getByRole("login");
    expect(buttonEl).toBeInTheDocument();
  });
  test("button should be rendered", () => {
    render(<Login />);
    const buttonEl = screen.getByRole("loginforgot");
    expect(buttonEl).toBeInTheDocument();
  });