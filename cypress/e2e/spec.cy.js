
import Form from "../pageObjects/Form.page";
describe('Elements', () => {

  // 
  context("Start testing", () => {
    
    // open page
    beforeEach(() => {
      Scene.visit();
    })

    it('Practice Form', () => {
      Form.fillForm();
    })
  })
})