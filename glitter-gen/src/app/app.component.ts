import {Component, ElementRef, OnChanges, SimpleChange, SimpleChanges, ViewChild} from '@angular/core';
import {GlitterComponent} from "./glitter/glitter.component";

@Component({
  selector: 'app-root',
  template: `
    <div class="box">
        <h1>Glitter Generator</h1>
        <input [(ngModel)]="color" appInputFilter="aAbBcCdDeEfF0123456789" (ngModelChange)="resetBg()" placeholder="enter color code"/>
    </div>
    <div class="swatch" [ngClass]="{ show: color.length === 6 }" [ngStyle]="{ backgroundColor: '#' + color }">
        <app-glitter
                #gl0
                (click)="selectOption(gl0)"
                class="sample"
                [blendMode]="'multiply'"
                [color]="color"
                [hasSparkles]="true"
        ></app-glitter>
        <app-glitter
                #gl1
                (click)="selectOption(gl1)"
                class="sample"
                [blendMode]="'color-burn'"
                [color]="color"
                [hasSparkles]="true"
        ></app-glitter>
        <app-glitter
                #gl2
                (click)="selectOption(gl2)"
                class="sample"
                [blendMode]="'overlay'"
                [color]="color"
                [hasSparkles]="true"
        ></app-glitter>
        <app-glitter
                #gl3
                (click)="selectOption(gl3)"
                class="sample"
                [blendMode]="'darken'"
                [color]="color"
                [hasSparkles]="true"
        ></app-glitter>
        <app-glitter
                #gl4
                (click)="selectOption(gl4)"
                class="sample"
                [blendMode]="'color'"
                [color]="color"
                [hasSparkles]="true"
        ></app-glitter>
    </div>
    <div class="final" [ngClass]="{ show: selected !== null }">
          <app-glitter
                  #glFinal
                  [blendMode]="selected?.blendMode"
                  [color]="color"
                  [hasSparkles]="selected?.hasSparkles"
                  [width]="3600"
                  [height]="3600"
                  [fullRes]="true"
          ></app-glitter>
    </div>
    <div class="download-pane" [ngClass]="{ show: selected !== null }">
        <a class="prepare" (click)="downloadCanvas()" [ngClass]="{ show: !prepared }">{{label}}</a>
        <a #download class="download" [ngClass]="{ show: prepared }">Download</a>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
  color = '';

  @ViewChild('gl0') gl0: ElementRef;
  @ViewChild('gl1') gl1: ElementRef;
  @ViewChild('gl2') gl2: ElementRef;
  @ViewChild('gl3') gl3: ElementRef;
  @ViewChild('gl4') gl4: ElementRef;
  @ViewChild('glFinal') glFinal: ElementRef;
  @ViewChild('download') download: ElementRef;

  selected: GlitterComponent = null;
  prepared: boolean = false;
  label: string = 'Prepare';

  resetBg(): void {
    this.selected = null;
    this.download.nativeElement.href = '';
    this.download.nativeElement.download = '';
    this.prepared = false;
    this.label = 'Prepare';
  }

  selectOption(el: GlitterComponent): void {
      this.resetBg();
      this.selected = el;
  }

  downloadCanvas(): void {
      this.label = '...';
    (<any>this.glFinal).canvasRef.nativeElement.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      this.download.nativeElement.href = url;
      this.download.nativeElement.download = `${this.color}-${(<any>this.glFinal).blendMode}.png`;
      this.prepared = true;
    });
  }
}
