import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import {it, expect } from "vitest";
import EventItem from "./Event";
import { MemoryRouter } from "react-router";


it('Should display event information', () => {
    const mockDAta = {
        title:'testing',
        date:'1/1/1',
        location:'Sofia'
    }
    render(
    <MemoryRouter>
        <EventItem event={mockDAta} />
    </MemoryRouter>)

    const linkElemnt = screen.getByRole('link', {name: 'testing'})

    expect(linkElemnt).toBeInTheDocument();
})