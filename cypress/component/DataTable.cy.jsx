/* eslint-disable no-undef */
import DataTable from "../../src/lib/DataTable";
import employees from "../fixtures/employees";
import columns from "../fixtures/columns";


describe("DataTable", () => {
    it("should render", () => {
        cy.mount(<DataTable data={employees} columns={columns} />);
    });
    }
);

describe("data", () => {
    it("should return the correct number of rows", () => {
        cy.mount(<DataTable data={employees} columns={columns} />);
        cy.get("tbody tr").should("have.length", 10);
    });
});

describe("columns", () => {
    it("should return the correct number of columns", () => {
        cy.mount(<DataTable data={employees} columns={columns} />);
        cy.get("thead th").should("have.length", 9);
    });
});

describe("search", () => {
    it("should return the correct number of rows", () => {
        cy.mount(<DataTable data={employees} columns={columns} />);
        cy.get("input").type("John");
        cy.get("tbody tr").should("have.length", 5);
        cy.get("input").clear();
        cy.get("input").type("Marseille");
        cy.get("tbody tr").should("have.length", 1);
    });
});

describe("rowsSelect", () => {
    it("should return the correct number of rows", () => {
        cy.mount(<DataTable data={employees} columns={columns} />);
        cy.get("tbody tr").should("have.length", 10);
        cy.get("select").select("25");
        cy.get("tbody tr").should("have.length", 12);
    });
});

describe("pagination", () => {
    it("should return the correct number of rows", () => {
        cy.mount(<DataTable data={employees} columns={columns} />);
        cy.get("tbody tr").should("have.length", 10);
        cy.get(".pagination > :nth-child(3)").click();
        cy.get("tbody tr").should("have.length", 2);
    });
});

describe("sort", () => {
    it("should return the correct number of rows", () => {
        cy.mount(<DataTable data={employees} columns={columns} />);
        cy.get("thead th").first().click();
        cy.get("tbody tr").first().find("td").first().should("have.text", "Jack");
        cy.get(":nth-child(8) > .columns-header").click();
        cy.get(":nth-child(8) > .columns-header").click();
        cy.get("tbody > :nth-child(1) > :nth-child(8)").first().should("have.text", "FR");
    });
});