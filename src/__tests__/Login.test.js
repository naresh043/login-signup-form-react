import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../components/Login";

describe("Login Component", () => {
  test("renders form inputs and button", () => {
    render(<Login />);
    expect(screen.getByPlaceholderText(/Enter email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Login/i })).toBeInTheDocument();
  });

  test("shows error messages when fields are empty", () => {
    render(<Login />);
    fireEvent.click(screen.getByRole("button", { name: /Login/i }));

    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Password is required/i)).toBeInTheDocument();
  });

  test("submits successfully when all fields are filled", () => {
    render(<Login />);
    fireEvent.change(screen.getByPlaceholderText(/Enter email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter password/i), {
      target: { value: "123456" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Login/i }));

    // Errors should disappear
    expect(screen.queryByText(/Email is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Password is required/i)).not.toBeInTheDocument();
  });
});
