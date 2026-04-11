import { processProjects } from "../processProjects";

describe("processProjects", () => {

    test("converts markdown to HTML", () => {
        const input = ["## A project"];

        const result = processProjects(input);

        expect(result[0]).toContain("<h2");
        expect(result[0]).toContain("A project");
    });

    test("handles multiple projects", () => {
        const input = [
            "## Project One",
            "## Project Two"
        ];

        const result = processProjects(input);

        expect(result).toHaveLength(2);
    });

    test("handles empty array", () => {
        const result = processProjects([]);
        expect(result).toEqual([]);
    });

});