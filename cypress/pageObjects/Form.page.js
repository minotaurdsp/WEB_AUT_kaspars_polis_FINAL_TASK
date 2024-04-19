import BasePage from "./base.page";

class Form extends BasePage {
    
    static get clickSubmitButton() {
        return cy.get("#btn-make-appointment");
    }

    static fillForm() {  
        cy.get('#firstName').type('John');
        
        cy.get('#lastName').type('Doe');
        
        cy.get('#userEmail').type('Jogn.Doe@magic.com');
        
        cy.get('#genterWrapper > div.col-md-9.col-sm-12 > div:nth-child(1)').click();
        
        cy.get('#userNumber').type('+371 21150861');

        // c. Set the - Date of Birth - with Calendar widget to - 28th of February, 1930.
        //cy.get('#dateOfBirthInput').click();

        // Set Subjects to Economics.
        cy.get('#subjectsInput').type('Economics')
        cy.get('#subjectsInput').click().focused().type('{downarrow}{enter}',{force:true});
        
        // e. Set Hobbies to Music.
        cy.get('#hobbiesWrapper > div.col-md-9.col-sm-12 > div:nth-child(2)').click();
    };

    

  
}
  
export default Form;