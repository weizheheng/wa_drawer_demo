import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="wa-drawer"
export default class extends Controller {
  static targets = [ "toggleButton" ]

  open() {
    this.waDrawer.open = true
  }

  get waDrawer() {
    return this.element.querySelector("wa-drawer")
  }
}
