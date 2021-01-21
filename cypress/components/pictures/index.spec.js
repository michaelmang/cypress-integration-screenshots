import { mount } from '@cypress/react'

import Pictures from "../../../src/pages/pictures"
import getPictures from '../../../src/utils/getPictures'

const DEFAULT_SNAPSHOT = { name: "cypress_components_pictures__default_snapshot" }

describe('Pictures', () => {
  it('matches the saved screenshot', () => {
    renderComponent()
    
    cy.get('img').and(($img) => {
      expect($img[0].naturalWidth).to.be.greaterThan(0)
    })

    cy.get("body").toMatchImageSnapshot(DEFAULT_SNAPSHOT)
  })

  describe("is loading", () => {
    it('matches the saved screenshot', () => {
      renderComponent({
        isLoading: true,
      })

      cy.get("body").toMatchImageSnapshot(DEFAULT_SNAPSHOT)
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