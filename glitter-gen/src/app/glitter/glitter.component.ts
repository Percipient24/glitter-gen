import {
  AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, OnInit, SimpleChange, SimpleChanges,
  ViewChild
} from '@angular/core';

export type BlendMode = 'multiply' | 'color-burn' | 'linear burn';

@Component({
  selector: 'app-glitter',
  template: `
    <canvas #canvas [attr.width]="width" [attr.height]="height"></canvas>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.Default
})
export class GlitterComponent implements AfterViewInit, OnInit, OnChanges {

  @Input() width: number = 300;
  @Input() height: number = 200;
  @Input() color: string;
  @Input() blendMode: string;
  @Input() hasSparkles: boolean;
  @Input() fullRes: boolean;

  bg: HTMLImageElement;
  sparkle: HTMLImageElement;

  @ViewChild('canvas') canvasRef: ElementRef;
  private ctx: CanvasRenderingContext2D;

  constructor() { }

  ngOnInit(): void {
    this.bg = document.createElement('img');
    this.bg.src = this.fullRes ? 'assets/bg-full.png' : 'assets/bg-sample.png';
    this.bg.onload = () => { this.updateColor(); }

    this.sparkle = document.createElement('img');
    this.sparkle.src = this.fullRes ? 'assets/sparkle-full.png' : 'assets/sparkle-sample.png';
    this.sparkle.onload = () => { this.updateColor(); }
  }

  ngAfterViewInit() {
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
  }

  ngOnChanges(changes: SimpleChanges): void {
    const colorChange: SimpleChange = changes.color;
    this.updateColor();
  }

  updateColor(): void {
    if (this.ctx && this.color.length === 6) {
      // draw the bg, obliterate everything
      this.ctx.globalCompositeOperation = 'source-over';
      this.ctx.drawImage(this.bg, 0, 0);

      // draw different blending modes
      switch(this.blendMode) {
        case 'multiply':
          this.ctx.globalCompositeOperation = 'multiply';
          this.ctx.fillStyle = `#${this.color}`;
          this.ctx.fillRect(0, 0, this.width, this.height);
          break;
        case 'color-burn':
          this.ctx.globalCompositeOperation = 'color-burn';
          this.ctx.fillStyle = `#${this.color}`;
          this.ctx.fillRect(0, 0, this.width, this.height);
          break;
        default:
          this.ctx.globalCompositeOperation = 'multiply';
          this.ctx.fillStyle = `#${this.color}`;
          this.ctx.fillRect(0, 0, this.width, this.height);
          break;
      }

      if (this.hasSparkles) {
        this.ctx.globalCompositeOperation = 'source-over';
        this.ctx.drawImage(this.sparkle, 0, 0);
      }
    }
  }

}
