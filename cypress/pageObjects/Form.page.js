import BasePage from "./base.page";

class Form extends BasePage {
    
    static get clickSubmitButton() {
        return cy.get("#submit");
    }
    
    static get closeModal() {
        return cy.get('#closeLargeModal');
        
    }

    static get firstNameField() {
        return cy.get('#firstName');
    }

    static get lastNameField() {
        return cy.get('#lastName');
    }

    static get userEmailField() {
        return cy.get('#userEmail');
    }

    static get genderCheckbox() {
        return cy.get('#genterWrapper > div.col-md-9.col-sm-12 > div:nth-child(3)');
    }

    static get userEmailField() {
        return cy.get('#userEmail');
    }

    static get userNumberField() {
        return cy.get('#userNumber');
    }


    static get hobbiesCheckbox() {
        return cy.get('#hobbiesWrapper > div.col-md-9.col-sm-12 > div:nth-child(3)');
    }

    static get pictureFile() {
        return cy.get('#uploadPicture');
    }



    static validateForm() {
        // Validate Student  name
        cy.get('.modal-body > div > table > tbody > tr:nth-child(1) > td:nth-child(2)').should(
            'have.text',
            'John Doe'
        );

        // Validate  Email
        cy.get('.modal-body > div > table > tbody > tr:nth-child(2) > td:nth-child(2)').should(
            'have.text',
            'Jogn.Doe@magic.com'
        );

        // Validate  Gender
        cy.get('.modal-body > div > table > tbody > tr:nth-child(3) > td:nth-child(2)').should(
            'have.text',
            'Other'
        );

        // Validate  Phone
        cy.get('.modal-body > div > table > tbody > tr:nth-child(4) > td:nth-child(2)').should(
            'have.text',
            '21150861'
        );

        // Validate Date of Birth
        cy.get('.modal-body > div > table > tbody > tr:nth-child(5) > td:nth-child(2)').should(
            'have.text',
            '28 February,1930'
        );

        // Validate Subjects
        cy.get('.modal-body > div > table > tbody > tr:nth-child(6) > td:nth-child(2)').should(
            'have.text',
            'Economics'
        );

        // Validate Hobbies
        cy.get('.modal-body > div > table > tbody > tr:nth-child(7) > td:nth-child(2)').should(
            'have.text',
            'Music'
        );

        // Validate Picture
        cy.get('.modal-body > div > table > tbody > tr:nth-child(8) > td:nth-child(2)').should(
            'have.text',
            'one-funny-dog-isolated-white-background-png.jpg'
        );

        // Validate Address
        cy.get('.modal-body > div > table > tbody > tr:nth-child(9) > td:nth-child(2)').should(
            'have.text',
            ''
        );

        // Validate State and City
        cy.get('.modal-body > div > table > tbody > tr:nth-child(10) > td:nth-child(2)').should(
            'have.text',
            'NCR Delhi'
        );
    }
}
  
export default Form;