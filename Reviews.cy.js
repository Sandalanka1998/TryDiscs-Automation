describe('Reviews', () => {

  
    it('Disc Review', () => {
  
        cy.viewport(1920, 1080)
      
        cy.visit("https://app.isodiscs.com/")
      
        cy.get('.col-auto > .q-btn--outline').click() //Login btn
      
          
        cy.get('[data-cy="login-email"]').type("Trydiscs096@yopmail.com") //Email (Change user account to the once you want to add new review for same disc)
        cy.get('[data-cy="login-password"]').type("Testing@123") //Password
        cy.get("button[name='signin']").click() //Signin btn
  
        cy.title().should('eq', 'Try Discs - Disc Golf Database, Comparison Tool, Search Engine');
        cy.wait(3000)

        //Write a new disc review
        cy.visit('https://app.isodiscs.com/product/latitude-64/beetle'); //Change the disc name to the one you want to test new review
        
        cy.wait(2000)
        cy.get('.q-pt-md > .q-rating > [aria-label="star_border 5"] > .q-icon').click() //Rating
        cy.get(':nth-child(3)>.q-field>.q-field__inner>.q-field__control>.q-field__control-container').type("Very good disc") //Review
        cy.wait(2000)        
        cy.get('.q-pb-md-md > .q-btn > .q-btn__content > .block').click() //Post Review
        cy.wait(2000)
        //cy.get('.q-pb-md-md > .q-btn > .q-btn__content > .block').should('have.text', 'Edit review') //Verify review posted successfully
        cy.wait(2000) 

        cy.reload();
        cy.wait(2000)
        cy.get(':nth-child(1) > .q-pa-md > .q-px-md > .row > .trd-card-sub-title').should('have.text', "trydiscs096")
 
          

        //Login Admin  
        cy.visit("https://admin.isodiscs.com/auth/login")

        cy.wait(2000)
        cy.get(':nth-child(1)>.q-field__inner>.q-field__control>.q-field__control-container').type('pradeep@longwapps.com') //Email
        cy.get(':nth-child(2)>.q-field__inner>.q-field__control>.q-field__control-container').type('test.123') //Password
        cy.get('.q-btn__content').click() //Signin btn
        
        cy.wait(3000)
        cy.get('.q-notification__message').should('have.text', "Successfully logged in")

        cy.wait(2000)
        cy.get(':nth-child(3)>.q-expansion-item__container>:nth-child(1)>:nth-child(2)').click() //ISO tools
        cy.wait(2000)
        cy.get(':nth-child(2)>.q-expansion-item__container>:nth-child(1)>:nth-child(2)').click() //Disc Reviews
        cy.wait(2000)
        cy.get('[href="/iso-tool/3rd-party-reviews/reviews"] > .q-item__section').click() //Reviews

        cy.get('.q-table__top > .col-2').should('have.text', "Reviews") //Verify loading to the correct page
        cy.wait(2000)
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .review-content').should('have.text', "Very good disc") //Check correct review display in admin page
        cy.wait(2000)

        cy.get('tbody > :nth-child(1) > :nth-child(4)').click() //Unapprove review
        cy.wait(2000)
        cy.get('.q-notification__message').should('have.text', "Successfully updated")
        cy.wait(2000)


        cy.visit('https://app.isodiscs.com/product/lone-star-disc/armadillo');
        cy.wait(2000)
        cy.get(':nth-child(1) > .q-pa-md > .q-px-md > .row > .trd-card-sub-title').contains('trydiscs096').should('not.exist');


        //Edit Store Review and check both admin and main site

        cy.wait(2000)
        cy.get('.q-pb-md-md > .q-btn > .q-btn__content > .block').click() //Edit Review
        cy.wait(2000)
        cy.get(':nth-child(3)>.q-field>.q-field__inner>.q-field__control>.q-field__control-container').click().clear().type("Very good disc 2")
        cy.wait(2000)        
        cy.get('.q-pb-md-md > .q-btn > .q-btn__content > .block').click() //Post Review
        cy.wait(2000)


        //Login Admin
        cy.visit("https://admin.isodiscs.com/auth/login")

        cy.wait(2000)
        cy.get(':nth-child(1)>.q-field__inner>.q-field__control>.q-field__control-container').type('pradeep@longwapps.com') //Email
        cy.get(':nth-child(2)>.q-field__inner>.q-field__control>.q-field__control-container').type('test.123') //Password
        cy.get('.q-btn__content').click() //Signin btn
        
        cy.wait(3000)
        cy.get('.q-notification__message').should('have.text', "Successfully logged in")

        cy.wait(2000)
        cy.get(':nth-child(3)>.q-expansion-item__container>:nth-child(1)>:nth-child(2)').click() //ISO tools
        cy.wait(2000)
        cy.get(':nth-child(2)>.q-expansion-item__container>:nth-child(1)>:nth-child(2)').click() //Disc Reviews
        cy.wait(2000)
        cy.get('[href="/iso-tool/3rd-party-reviews/reviews"] > .q-item__section').click() //Reviews

        cy.get('.q-table__top > .col-2').should('have.text', "Reviews") //Verify loading to the correct page
        cy.wait(4000)
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .review-content').should('have.text', "Very good disc 2") //Check correct review display in admin page
        cy.wait(2000)

        cy.get('tbody > :nth-child(1) > :nth-child(4)').click() //Approve review
        cy.wait(2000)
        cy.get('.q-notification__message').should('have.text', "Successfully updated")
        cy.wait(2000)


        cy.visit('https://app.isodiscs.com/product/lone-star-disc/armadillo');
        cy.wait(2000)
        cy.get(':nth-child(1) > .q-pa-md > .q-px-md > .row > .trd-card-sub-title').contains('trydiscs096').should('exist');


    })

     it('Stores Review', () => {
  
        cy.viewport(1920, 1080)
      
        cy.visit("https://app.isodiscs.com/")
      
        cy.get('.col-auto > .q-btn--outline').click() //Login btn
      
          
        cy.get('[data-cy="login-email"]').type("Trydiscs096@yopmail.com") //Email (Change user account to the once you want to add new review for same store)
        cy.get('[data-cy="login-password"]').type("Testing@123") //Password
        cy.get("button[name='signin']").click() //Signin btn
  
        cy.title().should('eq', 'Try Discs - Disc Golf Database, Comparison Tool, Search Engine');
        cy.wait(3000)

        //Write a new store review
        cy.visit('https://app.isodiscs.com/stores/bang-a-chain'); //Change the store name to the one you want to test new review
        

        cy.get('[aria-label="o_star_rate 5"] > .q-icon').click() //Rating
        cy.get(':nth-child(3)>.q-field>.q-field__inner>.q-field__control>.q-field__control-container').type("Very good store") //Review
        cy.wait(2000)        
        cy.get('.q-py-md-md > .q-btn > .q-btn__content > .block').click() //Post Review
        cy.wait(2000)
        //cy.get('.q-pb-md-md > .q-btn > .q-btn__content > .block').should('have.text', 'Edit review') //Verify review posted successfully
        cy.wait(2000) 
        
        cy.reload();
        cy.wait(2000)
        cy.get(':nth-child(1) > .q-pa-md > .q-px-md > .row > .trd-card-sub-title').should('have.text', "trydiscs096")
      
          

        //Login Admin 
        cy.visit("https://admin.isodiscs.com/auth/login")

        cy.wait(2000)
        cy.get(':nth-child(1)>.q-field__inner>.q-field__control>.q-field__control-container').type('pradeep@longwapps.com') //Email
        cy.get(':nth-child(2)>.q-field__inner>.q-field__control>.q-field__control-container').type('test.123') //Password
        cy.get('.q-btn__content').click() //Signin btn
        
        cy.wait(3000)
        cy.get('.q-notification__message').should('have.text', "Successfully logged in")

        cy.wait(2000)
        cy.get(':nth-child(3)>.q-expansion-item__container>:nth-child(1)>:nth-child(2)').click() //ISO tools
        cy.wait(2000)

        cy.get('[href="/iso-tool/reviews"] > .q-item__section').click()
        cy.wait(2000)

        cy.get('.col-2').should('have.text', "Reviews") //Verify loading to the correct page
        cy.wait(2000)
        cy.get(':nth-child(1) > :nth-child(4) > .review-comment').should('have.text', "Very good store") //Check correct review display in admin page


        cy.get('tbody > :nth-child(1) > :nth-child(6)').click() //Unapprove review
        cy.wait(2000)
        cy.get('.q-notification__message').should('have.text', "Successfully updated")


        cy.visit('https://app.isodiscs.com/stores/bang-a-chain')
        cy.wait(2000)
        cy.get(':nth-child(1) > .q-pa-md > .q-px-md > .row > .trd-card-sub-title').contains('trydiscs096').should('not.exist');


       //Edit Store Review and check both admin and main site

        cy.wait(2000)
        cy.get('.q-py-md-md > .q-btn > .q-btn__content > .block').click() //Edit Review
        cy.wait(2000)
        cy.get(':nth-child(3)>.q-field>.q-field__inner>.q-field__control>.q-field__control-container').click().clear().type("Very good store 2")
        cy.wait(2000)        
        cy.get('.q-py-md-md > .q-btn > .q-btn__content > .block').click() //Post Review

         //Login Admin
         cy.wait(2000)
         cy.visit("https://admin.isodiscs.com/auth/login")
         cy.wait(2000)
         cy.get(':nth-child(1)>.q-field__inner>.q-field__control>.q-field__control-container').type('pradeep@longwapps.com') //Email
         cy.get(':nth-child(2)>.q-field__inner>.q-field__control>.q-field__control-container').type('test.123') //Password
         cy.get('.q-btn__content').click() //Signin btn
         
         cy.wait(3000)
         cy.get('.q-notification__message').should('have.text', "Successfully logged in")
 
         cy.wait(2000)
         cy.get(':nth-child(3)>.q-expansion-item__container>:nth-child(1)>:nth-child(2)').click() //ISO tools
         cy.wait(2000)
 
         cy.get('[href="/iso-tool/reviews"] > .q-item__section').click()
         cy.wait(2000)
 
         cy.get('.col-2').should('have.text', "Reviews") //Verify loading to the correct page
         cy.wait(2000)
         cy.get('tbody > :nth-child(2) > :nth-child(4)').should('have.text', "Very good store 2") //Check edited correct review display in admin page
 
 
         cy.get('tbody > :nth-child(2) > :nth-child(6)').click() //Approve review
         cy.wait(2000)
         cy.get('.q-notification__message').should('have.text', "Successfully updated")
 
 
         cy.visit('https://app.isodiscs.com/stores/bang-a-chain')
         cy.wait(2000)
         cy.get(':nth-child(1) > .q-pa-md > .q-px-md > .row > .trd-card-sub-title').contains('trydiscs096').should('exist');

  }) 

})