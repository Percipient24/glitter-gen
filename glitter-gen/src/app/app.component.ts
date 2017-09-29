import {Component, ElementRef, OnChanges, SimpleChange, SimpleChanges, ViewChild} from '@angular/core';
import {GlitterComponent} from "./glitter/glitter.component";

@Component({
  selector: 'app-root',
  template: `
    <div class="box">
        <h1>Glitter Gen</h1>
        <input [(ngModel)]="color" appInputFilter="aAbBcCdDeEfF0123456789" />
    </div>
    <div class="swatch" [ngClass]="{ show: color.length === 6 }" [ngStyle]="{ backgroundColor: '#' + color }">
        <app-glitter
                #gl0
                (click)="selectOption(gl0)"
                class="sample"
                [blendMode]="multiply"
                [color]="color"
                [hasSparkles]="true"
        ></app-glitter>
        <app-glitter
                #gl1
                (click)="selectOption(gl1)"
                class="sample"
                [blendMode]="color-burn"
                [color]="color"
                [hasSparkles]="true"
        ></app-glitter>
        <app-glitter
                #gl2
                (click)="selectOption(gl2)"
                class="sample"
                [blendMode]="linear-burn"
                [color]="color"
                [hasSparkles]="true"
        ></app-glitter>
        <app-glitter
                #gl3
                (click)="selectOption(gl3)"
                class="sample"
                [blendMode]="multiply"
                [color]="color"
                [hasSparkles]="false"
        ></app-glitter>
        <app-glitter
                #gl4
                (click)="selectOption(gl4)"
                class="sample"
                [blendMode]="color-burn"
                [color]="color"
                [hasSparkles]="false"
        ></app-glitter>
        <app-glitter
                #gl5
                (click)="selectOption(gl5)"
                class="sample"
                [blendMode]="linear-burn"
                [color]="color"
                [hasSparkles]="false"
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
        <a #download class="download" (click)="downloadCanvas()">Download</a>
    </div>
  `,
  styles: []
})
export class AppComponent implements OnChanges {
  title = 'app';
  color = 'ffffff';

  @ViewChild('gl0') gl0: ElementRef;
  @ViewChild('gl1') gl1: ElementRef;
  @ViewChild('gl2') gl2: ElementRef;
  @ViewChild('gl3') gl3: ElementRef;
  @ViewChild('gl4') gl4: ElementRef;
  @ViewChild('gl5') gl5: ElementRef;
  @ViewChild('glFinal') glFinal: ElementRef;
  @ViewChild('download') download: ElementRef;

  selected: GlitterComponent = null;

  ngOnChanges(changes: SimpleChanges): void {
    const colorChange: SimpleChange = changes.color;
    if (changes.color && changes.color.currentValue && changes.color.currentValue.length === 6) {
      this.selected = null;
    }
  }

  selectOption(el: GlitterComponent): void {
    this.selected = el;
  }

  downloadCanvas(): void {
    this.download.nativeElement.href = (<any>this.glFinal).canvasRef.nativeElement.toDataURL();
    this.download.nativeElement.download = `${this.color}.png`;
  }
}
