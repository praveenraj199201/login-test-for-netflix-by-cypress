// <reference types="cypress" />
it('login test',function(){
    cy.fixture('logindata.json').then((user)=>{
        for(var i in user){
            
            cy.visit('https://www.netflix.com/in/')
            cy.get('.authLinks').click()
            cy.get('.nfEmailPhoneControls > .input_id > .placeLabel').type(user[i].userName)
            cy.get('.nfPasswordControls > .input_id > .placeLabel').type(user[i].password)
            cy.get('.btn').click()
            cy.wait(5000)
        }
        cy.get(':nth-child(1) > :nth-child(1) > .profile-link > .avatar-wrapper > .profile-icon').click()
        cy.get('.focus-visible').type('1')
        cy.get('[data-uia="pin-number-1"]').type('9')
        cy.get('[data-uia="pin-number-2"]').type('2')
        cy.get('[data-uia="pin-number-3"]').type('7')
        cy.wait(15000)
        


    })
})
    