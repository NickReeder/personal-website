import { Component, Input, OnInit } from '@angular/core';
// import { PhotoService } from '@/service/photoservice';
import { GalleriaModule } from 'primeng/galleria';
import { projectImage } from '../../../shared/project-service';


@Component({
    selector: 'app-carousel',
    templateUrl: 'carousel.html',
    standalone: true,
    imports: [GalleriaModule],
    providers: []
})
export class GalleriaNavigatorIndicators implements OnInit {
  
    responsiveOptions: any[] = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    @Input() images?: projectImage[];


    // constructor(private photoService: PhotoService) {}

    ngOnInit() {
        // this.photoService.getImages().then((images) => this.images.set(images));
    }
}