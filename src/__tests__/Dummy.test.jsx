import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Dummy from "../components/Dummy";

test("Dummy component test",()=>{
    render(<Dummy/>)
    const testele=screen.getByText(/Hello/i);
    expect(testele).toBeInTheDocument()
})


test("dummy render with name",()=>{
    render(<Dummy name="naresh" />)
    const textElement=screen.getByText(/hello naresh/i)
    expect(textElement).toBeInTheDocument()
})