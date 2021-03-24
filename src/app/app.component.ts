import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  /* index: number;
  picker: any;
  cells: any;
  proxy: any;

  @ViewChild('picker', { static: false }) pickerEl: ElementRef;
  @ViewChildren('cell') cellsEls: QueryList<ElementRef>; */

  slides = [
    { id: 1, title: 'Mobile internet', action: 'Start here', link: '#' },
    { id: 2, title: 'Home internet', action: 'Start here', link: '#' },
    { id: 3, title: 'Get a device', action: 'Start here', link: '#' },
    { id: 4, title: 'Add a phone-line', action: 'Start here', link: '#' },
    { id: 5, title: 'Upgrade', action: 'Start here', link: '#' }
  ];
  constructor(@Inject(DOCUMENT) private document) { }
  ngOnInit() {
    gsap.registerPlugin(Draggable);
  }


  ngAfterViewInit() {
    gsap.defaults({ ease: 'none' });

    const picker = this.document.querySelector('.picker');
    const cells = this.document.querySelectorAll('.cell');
    const proxy = this.document.createElement('div');

    const cellWidth = 450;
    // var rotationX = 90;

    const numCells = cells.length;
    const cellStep = 1 / numCells;
    const wrapWidth = cellWidth * numCells;

    const baseTl = gsap.timeline({ paused: true });

    gsap.set(picker, {
      // perspective: 1100,
      width: wrapWidth - cellWidth
    });

    for (let i = 0; i < cells.length; i++) {
      initCell(cells[i], i);
    }

    const animation = gsap.timeline({ repeat: -1, paused: true }).add(
      baseTl.tweenFromTo(1, 2)
    );

    const draggable = Draggable.create(proxy, {
      // allowContextMenu: true,
      type: 'x',
      trigger: picker,
      throwProps: true,
      onDrag: updateProgress,
      onThrowUpdate: updateProgress,
      snap: {
        x: snapX
      },
      onThrowComplete() {
        console.log('onThrowComplete');
        // TODO: animation that inject selected card title
      }
    });

    function snapX(x) {
      return Math.round(x / cellWidth) * cellWidth;
    }

    function updateProgress() {
      animation.progress(this.x / wrapWidth);
    }

    function initCell(element, index) {

      gsap.set(element, {
        width: cellWidth,
        scale: 0.6,
        // rotationX: rotationX,
        x: -cellWidth
      });

      const tl = gsap.timeline({ repeat: 1 });

      tl.to(element, {duration: 1, x: '+=' + wrapWidth }, 0)
        .to(
          element,
          { color: '#009688', scale: 1, repeat: 1, yoyo: true },
          0.5 - cellStep
        );

      baseTl.add(tl, index * -cellStep);
    }
  }
}

