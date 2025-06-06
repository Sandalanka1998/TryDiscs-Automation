describe('Sign In', () => {

    before(() => {
      // Visit the website URL
      cy.visit('https://trydiscs.com/'); 
      
    });
  
      it('login', () => {
  
        cy.viewport(1920, 1080)
      
         // cy.visit("https://trydiscs.com/")
      
          cy.get('.col-auto > .q-btn--outline').click()
      
          
      
          cy.get('[data-cy="login-email"]').type("trydiscnew@yopmail.com")
      
          cy.get('[data-cy="login-password"]').type("Testing1")
  
        
          cy.get("button[name='signin']").click()
  
          cy.title().should('eq', 'Try Discs - Disc Golf Database, Comparison Tool, Search Engine');
  
          cy.wait(3000)
  
          
          })
        
  
        
         it('should display an error message with invalid credentials', () => {
              // Visit the login page
  
             
              cy.viewport(1920, 1080)
              cy.visit('https://trydiscs.com/');
  
  
              //Click log in button
              cy.get('.col-auto > .q-btn--outline').click()

              //Email only enter
              cy.get('[data-cy="login-email"]').type('trydiscnew@yopmail.com');
              cy.get("button[name='signin']").click()
  
              // Verify that an error message is displayed
              cy.get('.q-notification__message').should('be.visible')
                .and('contain', 'The password field is mandatory.');
  
              
              cy.wait(3000)
              cy.get('[data-cy="login-email"]').clear();
  
              
              // Enter an invalid username
              cy.get('[data-cy="login-email"]').type('testing@gmail.com'); 
          
              // Enter an invalid password
              cy.get('[data-cy="login-password"]').type("123456", { log: false });
          
              // Click the login button
              cy.get("button[name='signin']").click()
  
              // Verify that an error message is displayed
              cy.get('.q-notification__message').should('be.visible')
                .and('contain', 'Username or password is invalid.');

                cy.wait(2000)
  
            })

            it('Create new account', () => {
    
              cy.viewport(1920, 1080)
      
              cy.visit("https://trydiscs.com/signup")
      
              //Signup with registerd username and email
              cy.get('[data-cy="register-input"]').type("Testcypresss@gmail.com"); //Email
              cy.get('[data-cy="register-password"]').type("Test1234"); //Password
              cy.get('[data-cy="regitser-confirm-password"]').type("Test1234"); //Confirm password
      
              cy.get('.q-pa-none > .q-btn').click(); //Continue btn
      
              //cy.contain('eq', "Username");
              //cy.title().should('eq', 'Username');
      
              cy.wait(3000)
      
              cy.get('[data-cy="register-username"]').type('Cypress');
              cy.get(':nth-child(3) > .relative-position > .full-width').type('New York, NY, USA')
              cy.get('.q-pa-none.q-py-md > :nth-child(4)').click() 
            
              cy.wait(2000)
              cy.get(':nth-child(4) > div.row > .q-btn--unelevated').click();
              cy.wait(2000)
              cy.get('.q-notification__message').should('have.text', "Unknown error")
              cy.get(2000)
      
              //sign up with new email and username

              cy.get('.q-btn--flat > .q-btn__content').click() //Back 
              cy.wait(2000)
              cy.get('[data-cy="register-input"]').clear().type("Testcypress1@gmail.com"); //Email
              cy.get('.q-pa-none > .q-btn').click(); //Continue btn

              cy.get('[data-cy="register-username"]').type('Cypress1');
              cy.get('.q-pa-none.q-py-md > :nth-child(4)').click() 
              cy.get(':nth-child(3) > .relative-position > .full-width').type('New York, NY, USA')

              cy.get(':nth-child(4) > div.row > .q-btn--unelevated').click();
              cy.wait(2000)
              cy.get('.q-notification__message').should('have.text', "Successfully registerd")
              
      
      
          })
      
      })
  
  