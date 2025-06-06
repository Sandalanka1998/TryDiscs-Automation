
describe('Scroll Bars Testing', () => {
    it('Should scroll work properly home page', () => {
      cy.viewport(1475, 750)

      cy.visit('https://trydiscs.com/');
  
      cy.scrollTo('bottom');

      cy.wait(3000)
  
      //cy.get("button[class='q-btn q-btn-item non-selectable no-outline q-btn--unelevated q-btn--rectangle q-btn--rounded bg-white text-white q-btn--actionable q-focusable q-hoverable q-btn--no-uppercase q-btn--dense text-black btn-padding trd-text-dark trd-btn-secondary'] span[class='block']").should('be.visible');

      cy.get('.full-width > .banner-image').scrollIntoView();

      cy.wait(3000)


    });

    it('should scroll work properly explore page', ()=> { 
      cy.viewport(1475, 750)

      cy.visit('https://trydiscs.com/explore');

      cy.contains('Bead').scrollIntoView();

      cy.wait(3000)

      cy.get('.q-scrollarea__content > .trd-h2').scrollIntoView();


    })

    it('Explore page scroll 2', ()=> { 
      cy.viewport(1475, 750)
      
      cy.visit('https://trydiscs.com/explore');

      cy.contains('Challenger OS').scrollIntoView();

      cy.wait(3000)

      cy.get('thead > .q-tr > :nth-child(7)').scrollIntoView();

    })
  

    it('Buy page scroll 1', ()=> { 
      cy.viewport(1475, 750)
      
      cy.visit('https://trydiscs.com/buy');

      cy.contains('Store Reviews').scrollIntoView();

      cy.wait(3000)

      cy.get('.q-pb-xs > .trd-h2').scrollIntoView();

    })

    it('Buy page scroll 2', ()=> { 
      cy.viewport(1475, 750)
      
      cy.visit('https://trydiscs.com/buy');

      cy.contains('Rotor Disc Golf Supply').scrollIntoView();

      cy.wait(3000)

      cy.get('.q-pr-xs > span').scrollIntoView();

    })
  


  
  });
  