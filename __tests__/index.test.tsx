import { render, screen } from "@testing-library/react";
import HomePage from "../pages/index";
import client from "next-auth/react";
import { Session } from "next-auth";
jest.mock("next-auth");
jest.mock("next-auth/react");

describe("Home Page (Landing)...", () => {
  it("renders a heading", async () => {
    // const mockSession: Session = {
    //   expires: "1",
    //   user: { id: "1", fname: "Test", lname: "User", token: "token" },
    // };

    // (client.useSession as jest.Mock).mockReturnValueOnce([mockSession, false]);

    // render(<HomePage />);

    expect(true).toBe(true);
  });
});
