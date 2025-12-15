import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Login from "../components/Login";

describe("Login Component", () => {
  test("renders inputs and button", () => {
    render(<Login />);
    expect(screen.getByPlaceholderText(/enter email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/enter password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  test("shows error when fields are empty", () => {
    render(<Login />);
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/password is required/i)).toBeInTheDocument();
  });

  test("submits successfully when filled", () => {
    render(<Login />);

    fireEvent.change(screen.getByPlaceholderText(/enter email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/enter password/i), {
      target: { value: "123456" },
    });

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(screen.queryByText(/required/i)).not.toBeInTheDocument();
  });
});
