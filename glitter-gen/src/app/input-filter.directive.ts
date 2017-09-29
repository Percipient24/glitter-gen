import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appInputFilter]'
})
export class InputFilterDirective implements OnInit {

  @Input() appInputFilter: string;
  whitelist: string[] = [];
  commands: number[] = [8, 16, 17, 18, 37, 39, 91];

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    console.log(this.appInputFilter);
    this.whitelist = this.appInputFilter.split('');
  }

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    let e = <KeyboardEvent> event;
    const value = this.el.nativeElement.value;
    const isCopy: boolean = (e.ctrlKey || e.metaKey) && e.key === 'c';
    const isPaste: boolean = (e.ctrlKey || e.metaKey) && e.key === 'v';
    if (isCopy || isPaste) {
      return;
    }

    const isAllowed: boolean = this.whitelist.some((value: string): boolean => {
      return e.keyCode === value.charCodeAt(0);
    });
    const isMeta: boolean = this.commands.some((value: number): boolean => {
      return e.keyCode === value;
    });
    const selectSize: number = this.el.nativeElement.selectionEnd - this.el.nativeElement.selectionStart;
    if (value.length >= 6 && isAllowed && selectSize === 0) {
      e.preventDefault();
    }

    if (!isAllowed && !isMeta) {
      e.preventDefault();
    }
  }

  /**
   * Cheat on paste, and only allow valid characters, up to a limit of 6 chars.
   */
  @HostListener('paste', ['$event']) onPaste(event) {
    setTimeout(() => {
      const value: string = this.el.nativeElement.value;
      let count: number = 0;
      let result: string = '';
      for (let i: number = 0; i < value.length; i++) {
        const char: string = value.charAt(i);
        const allowed: boolean = this.whitelist.some((v: string): boolean => {
          return char === v;
        });
        if (allowed) {
          result += char;
        }
        if (result.length === 6) {
          this.el.nativeElement.value = result;
          return;
        }
      }
      this.el.nativeElement.value = result;
    }, 1);
  }


}
