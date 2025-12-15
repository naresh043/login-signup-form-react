import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import SignUp from "../components/SignUp";

describe("SignUp Component", () => {
  test("renders form inputs and button", () => {
    render(<SignUp />);

    expect(screen.getByPlaceholderText(/enter name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/enter email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/enter password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /register/i })).toBeInTheDocument();
  });

  test("shows error messages when fields are empty", () => {
    render(<SignUp />);
    fireEvent.click(screen.getByRole("button", { name: /register/i }));

    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/password is required/i)).toBeInTheDocument();
  });

  test("submits successfully when all fields are filled", () => {
    render(<SignUp />);

    fireEvent.change(screen.getByPlaceholderText(/enter name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByPlaceholderText(/enter email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/enter password/i), {
      target: { value: "123456" },
    });

    fireEvent.click(screen.getByRole("button", { name: /register/i }));

    expect(screen.queryByText(/required/i)).not.toBeInTheDocument();
  });
});
