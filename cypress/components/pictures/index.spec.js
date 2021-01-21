import { mount } from '@cypress/react'

import Pictures from "../../../src/pages/pictures"
import getPictures from '../../../src/utils/getPictures'

describe('Pictures', () => {
  it('matches the saved screenshot', () => {
    renderComponent()
    
    cy.get('img').and(($img) => {
      expect($img[0].naturalWidth).to.be.greaterThan(0)
    })

    cy.screenshot()
  })

  describe("is loading", () => {
    it('matches the saved screenshot', () => {
      renderComponent({
        isLoading: true,
      })

      cy.screenshot()
    })
  })

  function renderComponent(props = {}) {
    mount(
      <Pictures
        isLoading={false}
        data={getPictures()}
        onGenerateNewPictures={() => {}}
        {...props}
      />
    )
  }
})