describe('Image Testing', ()=>{

    it('should verify the image is visible and correctly loaded', () => {

        cy.viewport(1280, 750)
      // Visit the page with the image
      cy.visit('https://app.isodiscs.com/');
  
      // Check that the image is visible
      cy.get("img[alt='Banner Image']")
        .should('be.visible')
        .and('have.attr', 'src')
        .then((src) => {
          // Verify that the image source attribute is not empty
          expect(src).to.not.be.empty;

          
  
          // Check that the image has loaded successfully
          cy.get("img[alt='Banner Image']").should(($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0);
          });
        });
    });
  }); 

  it('should verify the image is visible and correctly loaded', () => {

    cy.viewport(1280, 750)
  // Visit the page with the image
  cy.visit('https://app.isodiscs.com/');

  // Check that the image is visible
  cy.get("img[alt='Banner 1 Image']")
    .should('be.visible')
    .and('have.attr', 'src')
    .then((src) => {
      // Verify that the image source attribute is not empty
      expect(src).to.not.be.empty;

      

      

      // Check that the image has loaded successfully
      cy.get("img[alt='Banner 1 Image']").should(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
    });
});

 

/*describe('Multiple Image Testing', () => {
it('should verify all images are visible and correctly loaded', () => {
// Visit the page with the images
cy.visit('https://app.isodiscs.com/'); // Replace with your actual URL

// Wait for the images to be present in the DOM
cy.get('img', { timeout: 10000 }).should('exist'); // Increase the timeout if necessary

// Get all images on the page
cy.get('img').each(($img) => {
  // Check that the image is visible
  cy.wrap($img, { timeout: 10000 }).should('be.visible');

  // Check that the image has a valid 'src' attribute
  cy.wrap($img).should('have.attr', 'src').and('not.be.empty');

  // Check that the image has loaded successfully
  cy.wrap($img).then((img) => {
    expect(img[0].naturalWidth).to.be.greaterThan(0);
  });
});
});
});*/
