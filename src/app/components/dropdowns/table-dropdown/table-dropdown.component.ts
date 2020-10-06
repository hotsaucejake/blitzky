import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-table-dropdown',
  templateUrl: './table-dropdown.component.html',
})
export class TableDropdownComponent implements OnInit {
  dropdownPopoverShow = false;
  @ViewChild('btnDropdownRef', { static: false }) btnDropdownRef: ElementRef;

  ngOnInit() {

  }
  toggleDropdown(event) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
      this.destroyPopper();
    } else {
      this.dropdownPopoverShow = true;
      this.createPoppper();
    }
  }
  destroyPopper() {

  }
  createPoppper() {

  }
}
