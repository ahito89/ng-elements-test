import { Component, ElementRef, Input, OnInit, OnDestroy } from "@angular/core";
import { ModalService } from './modal.service';

@Component({
    selector: 'test-modal',
    template:
    `<div class="test-modal">
        <div class="test-modal-body">
            <ng-content></ng-content>
        </div>
    </div>
    <div class="test-modal-background"></div>`
})

export class ModalComponent implements OnInit, OnDestroy {
    @Input() id: string;
    private element: any;

    constructor(private modalService: ModalService, private el: ElementRef) {
        this.element = el.nativeElement;
    }

    ngOnInit(): void {
        let modal = this;

        if(!this.id) {
            console.error('modal must have an id');
            return;
        }

        document.body.appendChild(this.element);
        this.element.addEventListener('click', function (e:any) {
            if (e.target.className === 'test-modal') {
                modal.close();
            }
        });

        this.modalService.add(this);
    }

    ngOnDestroy(): void {
        this.modalService.remove(this.id);
        this.element.remove();
    }

    open(): void {
        this.element.style.display = 'block';
        document.body.classList.add('test-moda-open');
    }

    close(): void {
        this.element.style.display = 'none';
        document.body.classList.remove('test-modal-open');
    }
}