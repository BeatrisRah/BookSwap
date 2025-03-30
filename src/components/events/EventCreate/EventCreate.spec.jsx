import { expect, it, vi } from "vitest"
import * as EventHooks from "../../../api/eventsApi"
import { render, screen, waitFor } from "@testing-library/react";
import EventCreate from "./EventCreate";
import * as AuthHook from "../../../contexts/AuthContext";
import "@testing-library/jest-dom/vitest";

vi.spyOn(AuthHook, 'useAuth').mockImplementation(() => ({
    user: {uid: import.meta.env.VITE_ADMIN_ID}
}))


it('Should disable button on pending', async () => {
    const mockCreateEvent = vi.spyOn(EventHooks, 'useCreateEvent');
    mockCreateEvent.mockImplementationOnce(() => [
        {},
        vi.fn(),
        vi.fn(),
        true,
        null
    ])

    render(<EventCreate />)
    let button = null
    await waitFor(() => {
        button = screen.getByRole("button", { name: /Create Event/i });
    })
    expect(button).toBeDisabled()
})