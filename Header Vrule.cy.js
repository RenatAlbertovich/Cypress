describe('Vrule вкладки', () => {
  it('Новости', () => {
    cy.visit('https://vrule.ru/')
    cy.get('.header-flex > .main-nav > ul > :nth-child(1) > a > span').click();
    cy.contains('Новости')
    cy.get('.custom-logo').click();
   })
})

describe('Vrule вкладки', () => {
  it('машины', () => {
    cy.visit('https://vrule.ru/')
    cy.get('.header-flex > .main-nav > ul > :nth-child(2) > a > span').click();
    cy.contains('Машины')
    cy.get('.custom-logo').click();
   })
})

describe('Vrule вкладки', () => {
  it('двигатели', () => {
    cy.visit('https://vrule.ru/')
    cy.get('.header-flex > .main-nav > ul > :nth-child(3) > a > span').click();
    cy.contains('Двигатели')
    cy.get('.custom-logo').click();
   })
})

describe('Vrule вкладки', () => {
  it('интересно', () => {
    cy.visit('https://vrule.ru/')
    cy.get('.header-flex > .main-nav > ul > :nth-child(4) > a > span').click();
    cy.contains('Интересно')
    cy.get('.custom-logo').click();
   })
})

describe('Vrule хедр', () => {
  it('инпут', () => {
    cy.visit('https://vrule.ru/')
    cy.get('#wp-block-search__input-1').type('geely');
    cy.get('.wp-block-search__button').click()
    cy.contains('Вы искали: "geely"')
   })
})