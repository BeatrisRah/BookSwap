import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import {it, expect } from "vitest";
import EventItem from "./Event";
import { MemoryRouter } from "react-router";


it('Should display event title', () => {
    const mockDAta = {
        title:'testing',
    }
    render(
    <MemoryRouter>
        <EventItem event={mockDAta} />
    </MemoryRouter>)

    const linkElemnt = screen.getByRole('link', {name: 'testing'})

    expect(linkElemnt).toBeInTheDocument();
})