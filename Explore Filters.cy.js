describe('Explore page filters', ()=> {

    it('Compare function', ()=> {
  
      cy.viewport(1475, 750);
      cy.visit("https://trydiscs.com/explore")
  
      //pin function
      cy.get(':nth-child(1) > :nth-child(1) > .q-card > .q-card__section--horiz > .col > .relative-position > .row > :nth-child(2)')
      .click({ force: true });
  
     cy.get(':nth-child(2) > :nth-child(1) > .q-card > .q-card__section--horiz > .col > .relative-position > .trd-card-title')
      .should('have.text', 'Glyph')
  
     cy.get('.sticky-row > :nth-child(1) > .q-card > .q-card__section--horiz > .col > .relative-position > .absolute-right > :nth-child(2) > .q-avatar__content').click()
  
     cy.get(':nth-child(2) > :nth-child(1) > .q-card > .q-card__section--horiz > .col > .relative-position > .trd-card-title')
      .should('have.text', 'Beetle')
  
      //Compare search
      cy.get('.col-auto > [href="/explore"]').click()
  
        cy.wait(6000)
  
        cy.get('.q-scrollarea__content>:nth-child(5)>:nth-child(3)>:first-child>.q-field>.q-field__inner>.q-field__control>:nth-child(2)').type('ace')
    });
  
  
  it("Checkboxes testing", ()=> {
  
      cy.viewport(1475, 750);
      cy.visit("https://trydiscs.com/explore")
      cy.wait(3000)
  
      //Type checkboxes
      cy.get(':first-child>.q-list>.q-expansion-item>.q-expansion-item__container>:nth-child(2)>.q-card>.q-card__section>.row>:first-child>.trd-filter-option>.q-checkbox>.q-checkbox__inner').click()
      cy.get(':nth-child(1) > :nth-child(1) > .q-card > .q-card__section--horiz > .col > .trd-text-grey > :nth-child(3)') 
      .should('have.text', '· Putt & Approach')
      cy.wait(4000)
      cy.get(':first-child>.q-list>.q-expansion-item>.q-expansion-item__container>:nth-child(2)>.q-card>.q-card__section>.row>:first-child>.trd-filter-option>.q-checkbox>.q-checkbox__inner').click();
  
  
      cy.get(':first-child>.q-list>.q-expansion-item>.q-expansion-item__container>.q-expansion-item__content>.q-card>.q-card__section>.row>:nth-child(2)>.trd-filter-option>.q-checkbox>.q-checkbox__inner').click()
      cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > p:nth-child(3)') 
      .should('have.text', '· Mid Range')
      cy.wait(3000)
      cy.get(':first-child>.q-list>.q-expansion-item>.q-expansion-item__container>.q-expansion-item__content>.q-card>.q-card__section>.row>:nth-child(2)>.trd-filter-option>.q-checkbox>.q-checkbox__inner').click()
  
  
      cy.get(':nth-child(3)>.trd-filter-option>.q-checkbox>.q-checkbox__inner').click()
      cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > p:nth-child(3)') 
      .should('have.text', '· Control Driver')
      cy.wait(3000)
      cy.get(':nth-child(3)>.trd-filter-option>.q-checkbox>.q-checkbox__inner').click()
  
  
      cy.get(':nth-child(4)>.trd-filter-option>.q-checkbox>.q-checkbox__inner').click()
      cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > p:nth-child(3)') 
      .should('have.text', '· Distance Driver')
      cy.wait(3000)
      cy.get(':nth-child(4)>.trd-filter-option>.q-checkbox>.q-checkbox__inner').click()
  
        //Option checkboxes
        cy.get(":nth-child(5)>.q-list>.q-expansion-item>.q-expansion-item__container>:nth-child(2)>.q-card>.q-card__section>.row>:first-child>.q-checkbox>:first-child").click()
        cy.get(':nth-child(1) > :nth-child(1) > .q-card > .q-card__section--horiz > .col > .relative-position > .trd-card-title').should("have.text","Bagger")
        cy.wait(3000)
        cy.get(":nth-child(5)>.q-list>.q-expansion-item>.q-expansion-item__container>:nth-child(2)>.q-card>.q-card__section>.row>:first-child>.q-checkbox>:first-child").click()
  
        cy.get(":nth-child(5)>.q-list>.q-expansion-item>.q-expansion-item__container>:nth-child(2)>.q-card>.q-card__section>.row>:nth-child(2)>.q-checkbox>:first-child").click()
        cy.get(':nth-child(1) > :nth-child(1) > .q-card > .q-card__section--horiz > .col > .relative-position > .trd-card-title').should("have.text",'No2 Putter')
        cy.wait(3000)
        cy.get(":nth-child(5)>.q-list>.q-expansion-item>.q-expansion-item__container>:nth-child(2)>.q-card>.q-card__section>.row>:nth-child(2)>.q-checkbox>:first-child").click()
  
        cy.get(":nth-child(5)>.q-list>.q-expansion-item>.q-expansion-item__container>:nth-child(2)>.q-card>.q-card__section>.row>:nth-child(3)>.q-checkbox>:first-child").click()
        cy.get(':nth-child(1) > :nth-child(1) > .q-card > .q-card__section--horiz > .col > .relative-position > .trd-card-title').should("have.text",'Dogwood')
        cy.wait(3000)
        cy.get(":nth-child(5)>.q-list>.q-expansion-item>.q-expansion-item__container>:nth-child(2)>.q-card>.q-card__section>.row>:nth-child(3)>.q-checkbox>:first-child").click()
  
  
  
      //Bead checkboxes
      cy.get('.q-pb-md-md>.q-list>.q-expansion-item>.q-expansion-item__container>:nth-child(2)>.q-card>.q-card__section>.row>:first-child>.trd-filter-option>.q-checkbox>.q-checkbox__inner').click()
      cy.wait(3000)
      cy.get('.q-pb-md-md>.q-list>.q-expansion-item>.q-expansion-item__container>:nth-child(2)>.q-card>.q-card__section>.row>:first-child>.trd-filter-option>.q-checkbox>.q-checkbox__inner').click()
  
      cy.get('.q-pb-md-md>.q-list>.q-expansion-item>.q-expansion-item__container>:nth-child(2)>.q-card>.q-card__section>.row>:nth-child(2)>.trd-filter-option>.q-checkbox>.q-checkbox__inner').click()
      cy.wait(3000)
      cy.get('.q-pb-md-md>.q-list>.q-expansion-item>.q-expansion-item__container>:nth-child(2)>.q-card>.q-card__section>.row>:nth-child(2)>.trd-filter-option>.q-checkbox>.q-checkbox__inner').click()
  
      
      //Brand Search
      cy.get(".q-card__section>:first-child>.q-field__inner>.q-field__control>:nth-child(2)").type('Innova')
      cy.get(':nth-child(3)>.col-12>.col-6>.q-checkbox>.q-checkbox__inner').click()
      cy.get(':first-child>:first-child>.q-card>.q-card__section>:nth-child(2)>:first-child').should('have.text', 'Innova ')
      cy.get(':nth-child(3)>.col-12>.col-6>.q-checkbox>.q-checkbox__inner').click()
  
      });
      
  
  
    it("Slider filters testing", ()=> {
  
      cy.visit("https://trydiscs.com/explore")
      cy.wait(2000)
      cy.viewport(1475, 750)
  
      //Flight slider filters
      cy.get('.q-scrollarea__content>:nth-child(7)>:nth-child(7)>.q-list>.q-expansion-item>.q-expansion-item__container>.q-expansion-item__content>.q-card>:first-child>.row>.q-range>.q-slider__track-container')
      .then(($slider) => {
          const width = $slider.width()
          const customX1 = Math.round(width * 0.15)
          const customX2 = Math.round(width * 0.75)
          const customX3 = Math.round(width * 0)
          const customX4 = Math.round(width * 0.99);
      
          cy.wrap($slider).click(customX1, 0)
          cy.wrap($slider).click(customX2, 0)
          cy.wait(2000)
  
          cy.wrap($slider).click(customX3, 0)
          cy.wrap($slider).click(customX4, 0)
          
  
        })
  
      cy.get(':nth-child(7)>.q-list>.q-expansion-item>.q-expansion-item__container>.q-expansion-item__content>.q-card>:nth-child(2)>.row>.q-range>.q-slider__track-container')
      .then(($slider) => {
          const width = $slider.width()
          const customX1 = Math.round(width * 0.15)
          const customX2 = Math.round(width * 0.75)
          const customX3 = Math.round(width * 0)
          const customX4 = Math.round(width * 0.99);
      
          cy.wrap($slider).click(customX1, 0)
          cy.wrap($slider).click(customX2, 0)
          cy.wait(2000)
  
          cy.wrap($slider).click(customX3, 0)
          cy.wrap($slider).click(customX4, 0)
  
        })
  
        cy.get(':nth-child(7)>.q-list>.q-expansion-item>.q-expansion-item__container>.q-expansion-item__content>.q-card>:nth-child(3)>.row>.q-range>.q-slider__track-container')
      .then(($slider) => {
          const width = $slider.width()
          const customX1 = Math.round(width * 0.15)
          const customX2 = Math.round(width * 0.75)
          const customX3 = Math.round(width * 0)
          const customX4 = Math.round(width * 0.99);
      
          cy.wrap($slider).click(customX1, 0)
          cy.wrap($slider).click(customX2, 0)
          cy.wait(2000)
  
          cy.wrap($slider).click(customX3, 0)
          cy.wrap($slider).click(customX4, 0)
        })
  
        cy.get(':nth-child(7)>.q-list>.q-expansion-item>.q-expansion-item__container>.q-expansion-item__content>.q-card>:nth-child(4)>.row>.q-range>.q-slider__track-container')
        .then(($slider) => {
            const width = $slider.width()
            const customX1 = Math.round(width * 0.15)
            const customX2 = Math.round(width * 0.75)
            const customX3 = Math.round(width * 0)
            const customX4 = Math.round(width * 0.99);
        
            cy.wrap($slider).click(customX1, 0)
            cy.wrap($slider).click(customX2, 0)
            cy.wait(2000)
  
            cy.wrap($slider).click(customX3, 0)
            cy.wrap($slider).click(customX4, 0)
            
          })
  
          cy.get('.q-scrollarea__content>:nth-child(7)>:nth-child(7)>.q-list>.q-expansion-item>.q-expansion-item__container>.q-expansion-item__content>.q-card>:nth-child(5)>.row>.q-range>.q-slider__track-container')
          .then(($slider) => {
              const width = $slider.width()
              const customX1 = Math.round(width * 0.15)
              const customX2 = Math.round(width * 0.75)
              const customX3 = Math.round(width * 0)
              const customX4 = Math.round(width * 0.99);
          
              cy.wrap($slider).click(customX1, 0)
              cy.wrap($slider).click(customX2, 0)
              cy.wait(2000)
  
              cy.wrap($slider).click(customX3, 0)
              cy.wrap($slider).click(customX4, 0)
      
            })
  
  
      //Dimentions slider filter
      cy.get(':nth-child(9)>.q-list>.q-expansion-item>.q-expansion-item__container>.q-expansion-item__content>.q-card>:nth-child(1)>.row>.q-range>.q-slider__track-container')
      .then(($slider) => {
          const width = $slider.width()
          const customX1 = Math.round(width * 0.15)
          const customX2 = Math.round(width * 0.75)
          const customX3 = Math.round(width * 0)
          const customX4 = Math.round(width * 0.99);
      
          cy.wrap($slider).click(customX1, 0)
          cy.wrap($slider).click(customX2, 0)
          cy.wait(2000)
  
          cy.wrap($slider).click(customX3, 0)
          cy.wrap($slider).click(customX4, 0)
        })
  
        cy.get(':nth-child(9)>.q-list>.q-expansion-item>.q-expansion-item__container>.q-expansion-item__content>.q-card>:nth-child(2)>.row>.q-range>.q-slider__track-container')
      .then(($slider) => {
          const width = $slider.width()
          const customX1 = Math.round(width * 0.15)
          const customX2 = Math.round(width * 0.75)
          const customX3 = Math.round(width * 0)
          const customX4 = Math.round(width * 0.99);
      
          cy.wrap($slider).click(customX1, 0)
          cy.wrap($slider).click(customX2, 0)
          cy.wait(2000)
  
          cy.wrap($slider).click(customX3, 0)
          cy.wrap($slider).click(customX4, 0)
        })
  
        //Rim slider filter
        cy.get(':nth-child(11)>.q-list>.q-expansion-item>.q-expansion-item__container>.q-expansion-item__content>.q-card>:nth-child(1)>.row>.q-range>.q-slider__track-container')
        .then(($slider) => {
            const width = $slider.width()
            const customX1 = Math.round(width * 0.15)
            const customX2 = Math.round(width * 0.75)
            const customX3 = Math.round(width * 0)
            const customX4 = Math.round(width * 0.99);
        
            cy.wrap($slider).click(customX1, 0)
            cy.wrap($slider).click(customX2, 0)
            cy.wait(2000)
  
            cy.wrap($slider).click(customX3, 0)
            cy.wrap($slider).click(customX4, 0)
          })
  
          cy.get(':nth-child(11)>.q-list>.q-expansion-item>.q-expansion-item__container>.q-expansion-item__content>.q-card>:nth-child(2)>.row>.q-range>.q-slider__track-container')
        .then(($slider) => {
            const width = $slider.width()
            const customX1 = Math.round(width * 0.15)
            const customX2 = Math.round(width * 0.75)
            const customX3 = Math.round(width * 0)
            const customX4 = Math.round(width * 0.99);
        
            cy.wrap($slider).click(customX1, 0)
            cy.wrap($slider).click(customX2, 0)
            cy.wait(2000)
  
            cy.wrap($slider).click(customX3, 0)
            cy.wrap($slider).click(customX4, 0)
          })
  
          cy.get(':nth-child(11)>.q-list>.q-expansion-item>.q-expansion-item__container>.q-expansion-item__content>.q-card>:nth-child(3)>.row>.q-range>.q-slider__track-container')
        .then(($slider) => {
            const width = $slider.width()
            const customX1 = Math.round(width * 0.15)
            const customX2 = Math.round(width * 0.75)
            const customX3 = Math.round(width * 0)
            const customX4 = Math.round(width * 0.99);
        
            cy.wrap($slider).click(customX1, 0)
            cy.wrap($slider).click(customX2, 0)
            cy.wait(2000)
  
            cy.wrap($slider).click(customX3, 0)
            cy.wrap($slider).click(customX4, 0)
          })
      
          cy.get(':nth-child(11)>.q-list>.q-expansion-item>.q-expansion-item__container>.q-expansion-item__content>.q-card>:nth-child(4)>.row>.q-range>.q-slider__track-container')
        .then(($slider) => {
            const width = $slider.width()
            const customX1 = Math.round(width * 0.15)
            const customX2 = Math.round(width * 0.75)
            const customX3 = Math.round(width * 0)
            const customX4 = Math.round(width * 0.99);
        
            cy.wrap($slider).click(customX1, 0)
            cy.wrap($slider).click(customX2, 0)
            cy.wait(2000)
  
            cy.wrap($slider).click(customX3, 0)
            cy.wrap($slider).click(customX4, 0)
          })
      
          cy.get(':nth-child(11)>.q-list>.q-expansion-item>.q-expansion-item__container>.q-expansion-item__content>.q-card>:nth-child(5)>.row>.q-range>.q-slider__track-container')
        .then(($slider) => {
            const width = $slider.width()
            const customX1 = Math.round(width * 0.15)
            const customX2 = Math.round(width * 0.75)
            const customX3 = Math.round(width * 0)
            const customX4 = Math.round(width * 0.99);
        
            cy.wrap($slider).click(customX1, 0)
            cy.wrap($slider).click(customX2, 0)
            cy.wait(2000)
  
            cy.wrap($slider).click(customX3, 0)
            cy.wrap($slider).click(customX4, 0)
          })
      
      
            });
  
  
            it('Graph View Filters', () => {
           
            cy.visit('https://trydiscs.com/explore');
        
            cy.viewport(1475, 750)
            //Graph
            cy.get(':nth-child(3) > .q-btn-group > .bg-white').click()
            cy.wait(3000)
            //Ascending
            cy.get(":first-child>.q-list>.q-expansion-item>.q-expansion-item__container>:nth-child(2)>.q-card>.q-card__section>.row>:first-child>.trd-filter-option>.q-radio").click()
            cy.get('.fixed-top > .td-understable > div').should('have.text', "understable")
        
            //Descending
            cy.get(":first-child>.q-list>.q-expansion-item>.q-expansion-item__container>:nth-child(2)>.q-card>.q-card__section>.row>:nth-child(2)>.trd-filter-option>.q-radio").click()
            cy.get('.fixed-top > .td-understable > div').should('have.text', "overstable")
        
            //Rim width
            cy.get(':nth-child(3)>.q-list>.q-expansion-item>.q-expansion-item__container>:nth-child(2)>.q-card>.q-card__section>.row>:nth-child(2)>.trd-filter-option>.q-radio').click()
            cy.get('.text-right > .trd-style8').should('have.text', "Rim Width")
        
            //Speed
            cy.get(':nth-child(3)>.q-list>.q-expansion-item>.q-expansion-item__container>:nth-child(2)>.q-card>.q-card__section>.row>:first-child>.trd-filter-option>.q-radio').click()
            cy.get('.text-right > .trd-style8').should('have.text', "Speed")
      
  
          })
  
          it('Add a missing disc', () => {
            // Visit the website
            cy.visit('https://app.isodiscs.com/explore');
            cy.viewport(1475, 750)
            cy.wait(3000)
      
            cy.get('.trd-btn-primary > .cursor-pointer').click()
            cy.get('.q-form>:nth-child(2)>.q-field__inner>.q-field__control>.q-field__control-container').type("Testing")
            cy.get(":nth-child(4)>.q-field__inner>.q-field__control>.q-field__control-container").type('Testing missing discs')
      
            cy.get('.q-card__actions > .q-btn--unelevated').click()
            cy.get('.q-notification__message').should('have.text', "Successfully informed the missing disc")
            
            
          })
      })