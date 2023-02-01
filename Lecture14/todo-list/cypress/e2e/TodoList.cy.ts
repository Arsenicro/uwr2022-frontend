describe('Todo List', () => {
  it('passes', () => {
    cy.visit('http://localhost:1234/');
    cy.get('[data-testid="todo-list"] [data-testid="todo-item"]:nth-child(1)').should("not.exist");

    cy.get('[data-testid="add-form"] input').type("Study for an exam");
    cy.get('[data-testid="add-form"] button').click();

    cy.get('[data-testid="todo-list"] [data-testid="todo-item"]:nth-child(1)').should("exist");
  });
});
