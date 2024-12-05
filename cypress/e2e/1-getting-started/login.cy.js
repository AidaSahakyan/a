describe('Login Tests', () => {
    before(() => {
      cy.log('This will run before all tests');
    });
  
    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/login');  
      cy.log('This will run before each test');
    });
  
    afterEach(() => {
      cy.log('This will run after each test');
    });
  
    after(() => {
      cy.log('This will run after all tests');
    });
  
    it('should login successfully with valid credentials', () => {
      cy.get('#username').type('valid_username'); 
      cy.get('#password').type('valid_password');  
      cy.get('button[type="submit"]').click();     
      
      cy.url().should('include', '/secure');  
      cy.get('div.flash.success').should('contain', 'You logged into a secure area!');
    });
  
    it('should display an error message with invalid credentials', () => {
      cy.get('#username').type('invalid_username');  
      cy.get('#password').type('valid_password');    
      cy.get('button[type="submit"]').click();     
      
      cy.get('div.flash.error').should('contain', 'Your username is invalid!');
    });
  });
  