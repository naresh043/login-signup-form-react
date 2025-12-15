import { render, screen, fireEvent } from "@testing-library/react";
import SignUp from "../components/SignUp"; // adjust path if needed

describe("SignUp Component", () => {
  test("renders form inputs and button", () => {
    render(<SignUp />);
    expect(screen.getByPlaceholderText(/Enter name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Register/i })).toBeInTheDocument();
  });

  test("shows error messages when fields are empty", () => {
    render(<SignUp />);
    fireEvent.click(screen.getByRole("button", { name: /Register/i }));

    expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Password is required/i)).toBeInTheDocument();
  });

  test("submits successfully when all fields are filled", () => {
    render(<SignUp />);
    fireEvent.change(screen.getByPlaceholderText(/Enter name/i), { target: { value: "John" } });
    fireEvent.change(screen.getByPlaceholderText(/Enter email/i), { target: { value: "john@example.com" } });
    fireEvent.change(screen.getByPlaceholderText(/Enter password/i), { target: { value: "123456" } });

    fireEvent.click(screen.getByRole("button", { name: /Register/i }));

    // Errors should disappear
    expect(screen.queryByText(/Name is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Email is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Password is required/i)).not.toBeInTheDocument();
  });
});
