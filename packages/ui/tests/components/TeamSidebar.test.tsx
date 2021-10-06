import * as React from "react";
import { MemoryRouter } from "react-router-dom";
import * as renderer from "react-test-renderer";
import TeamSidebar from "../../src/components/TeamSidebar";

test("Link changes the class when hovered", () => {
  const component = renderer.create(
    <MemoryRouter >
      <TeamSidebar
        team={{
          name: "LinkedIn",
          id: "linkedin",
          iconUrl: "",
          channels: [
            {
              name: "general",
              id: "g",
              teamId: "linkedin",
              description: "general chat for general folks",
            },
          ],
        }}
      />
    </MemoryRouter >
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
