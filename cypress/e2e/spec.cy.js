
import Form from "../pageObjects/Form.page";
describe('Elements', () => {

  // 
  context("Start testing", () => {
    
    // open page
    beforeEach('Open base page',() => {
      Form.visit();
    })

    it('Fil submit validate ', () => {
      
      // Set first name
      Form.firstNameField.type('John');
      Form.firstNameField.should('have.value', 'John')


      // Set last name
      Form.lastNameField.type('Doe');
      Form.lastNameField.should('have.value', 'Doe')

      
      // Set email
      Form.userEmailField.type('Jogn.Doe@magic.com');
      Form.userEmailField.should('have.value', 'Jogn.Doe@magic.com')


      // Set gender
      Form.genderCheckbox.click();


      // Set phone
      Form.userNumberField.type('21150861');
      Form.userNumberField.should('have.value', '21150861')

      // Set Subjects to Economics.
      cy.get('#subjectsInput').type('Economics')
      cy.get('#subjectsInput').click().focused().type('{downarrow}{enter}',{force:true});
      cy.get('.subjects-auto-complete__multi-value__label').should(
          "have.text",
          'Economics'
        );

        
      // c. Set the - Date of Birth - with Calendar widget to - 28th of February, 1930.
      cy.get('#dateOfBirthInput').click();
      // Select year
      cy.get('.react-datepicker__year-select').select('1930');
      // Select month
      cy.get('.react-datepicker__month-select').select('March');
      // Select day
      cy.get(`.react-datepicker__day--0${28}`).first().click();
      // Assert input date value
      cy.get('#dateOfBirthInput').should('have.value', '28 Feb 1930');

      // e. Set Hobbies to Music.
      Form.hobbiesCheckbox.click();


      // select file
      Form.pictureFile.selectFile('cypress/files/one-funny-dog-isolated-white-background-png.jpg')


      // g. Set State to NCR.
      cy.get('#state').type('NCR');
      cy.get('#state').click().focused().type('{downarrow}{enter}',{force:true});
      cy.get('#state > div > div.css-1hwfws3 > div.css-1uccc91-singleValue').should(
          'have.text',
          'NCR'
      );

      // h. Set City to Delhi.
      cy.get('#city').type('Delhi');
      cy.get('#city').click().focused().type('{downarrow}{enter}',{force:true});
      cy.get('#city > div > div.css-1hwfws3 > div.css-1uccc91-singleValue').should(
          'have.text',
          'Delhi'
      );


      Form.clickSubmitButton.click()

      // j. Validate that each Labeled row contains the correct information.
      Form.validateForm();
      
      // Close modal
      Form.closeModal.click({force: true});

    })


  })
})